"""Prueba de humo: recorre la app (Docente → clase, Familias → niño con animal, recarga), sin errores de consola,
claro y oscuro, móvil / tableta / pizarra. Uso: python3 tools/build.py && python3 tests/humo.py"""
import subprocess, time, sys, pathlib
from playwright.sync_api import sync_playwright
R = pathlib.Path(__file__).resolve().parent.parent
srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8765', '-d', str(R)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1); fallos = []
try:
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        for tema in ('light', 'dark'):
            for w, h in ((390, 844), (768, 1024), (1024, 768)):
                pg = b.new_page(viewport={'width': w, 'height': h}); errs = []; et = f'{tema} {w}x{h}'
                pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
                pg.on('pageerror', lambda e: errs.append(str(e)))
                pg.add_init_script(f"localStorage.setItem('lexi.th','\"{tema}\"')")
                def revisa(que):
                    pg.wait_for_timeout(150)
                    for bt in pg.query_selector_all('button, input'):
                        bb = bt.bounding_box()
                        if bb and (bb['width'] < 44 or bb['height'] < 44): fallos.append(f'{et} {que}: control pequeño {bb}')
                    if pg.evaluate('document.documentElement.scrollWidth') > w: fallos.append(f'{et} {que}: desborda')
                    pg.screenshot(path=f'/tmp/lexi-{tema}-{w}-{que}.png')
                pg.goto('http://localhost:8765/index.html'); pg.wait_for_selector('.lexi-mascota img')
                if pg.evaluate('document.documentElement.dataset.theme') != tema: fallos.append(f'{et}: tema')
                revisa('1inicio')
                # Docente: error sin nombre, crear clase
                pg.click('text=Docente'); pg.wait_for_selector('#nom'); pg.click('text=Crear clase')
                if 'Escribe un nombre' not in pg.inner_text('#err'): fallos.append(f'{et}: falta aviso de nombre vacío')
                pg.fill('#nom', '1.º A'); revisa('2quien'); pg.click('text=Crear clase'); pg.wait_for_selector('.escala-fila')
                an = pg.evaluate("[...document.querySelectorAll('.escala-fila .escala g')].map(g=>g.getBoundingClientRect().width)")
                if len(an) != 4 or an != sorted(an): fallos.append(f'{et}: la escala no crece {an}')
                revisa('3casa')
                # recarga: el perfil sigue guardado
                pg.reload(); pg.wait_for_selector('.opciones'); pg.click('text=Docente'); pg.wait_for_selector('.qa')
                if '1.º A' not in pg.inner_text('.quien'): fallos.append(f'{et}: no se guardó la clase')
                # repetido
                pg.fill('#nom', '1.º a'); pg.click('text=Crear clase')
                if 'ya existe' not in pg.inner_text('#err'): fallos.append(f'{et}: falta aviso de nombre repetido')
                # Familias: niño con animal elegido
                pg.click('button[aria-label="Atrás"]'); pg.click('text=Familias'); pg.wait_for_selector('#nom')
                pg.fill('#nom', 'Lucía'); pg.click('button[aria-label="Animal 4"]'); revisa('4familias')
                pg.click('text=Crear'); pg.wait_for_selector('.casa-cab .av')
                if '🦁' not in pg.inner_text('.casa-cab'): fallos.append(f'{et}: animal elegido no aparece')
                # --- Zona del tutor: crear PIN (repetido mal y bien)
                def pin(cifras):
                    for c in cifras: pg.click(f'.pk button:text-is("{c}")')
                    pg.wait_for_timeout(350)
                pg.click('button[aria-label="Zona del tutor"]'); pg.wait_for_selector('.pk'); revisa('5pin')
                pin('1234'); pin('1111')
                if 'Crea un PIN' not in pg.inner_text('.pinw h2'): fallos.append(f'{et}: PIN distinto debía volver a crear')
                pin('1234'); pin('1234'); pg.wait_for_selector('text=Zona del tutor'); pg.wait_for_selector('.h-t'); revisa('6tutor')
                txt = pg.inner_text('main')
                if 'Lucía' not in txt or '1.º A' not in txt: fallos.append(f'{et}: faltan perfiles en el tutor')
                # renombrar y cambiar animal
                pg.click('.fila-t:has-text("Lucía")'); pg.wait_for_selector('#nom'); pg.fill('#nom', '  '); pg.click('text=Guardar nombre')
                if 'Escribe un nombre' not in pg.inner_text('#err'): fallos.append(f'{et}: renombrar a vacío debía avisar')
                pg.fill('#nom', 'Lucía M'); pg.click('text=Guardar nombre'); pg.wait_for_selector('.toast')
                pg.click('button[aria-label="Animal 6"]')
                if '🐙' not in pg.inner_text('.casa-cab'): fallos.append(f'{et}: no cambió el animal')
                revisa('7perfil')
                # copia de seguridad
                pg.click('button[aria-label="Atrás"]')
                with pg.expect_download() as d: pg.click('text=Guardar copia de seguridad')
                ruta = f'/tmp/copia-{tema}-{w}.json'; d.value.save_as(ruta)
                import json
                c = json.load(open(ruta, encoding='utf8'))
                if c.get('app') != 'lexi' or c['ajustes']['pin'] != '1234' or len(c['perfiles']) != 2: fallos.append(f'{et}: copia mal {c}')
                # borrar el niño y comprobar
                pg.click('.fila-t:has-text("Lucía M")'); pg.click('text=Borrar este perfil'); revisa('8borrar'); pg.click('text=Sí, borrar'); pg.wait_for_selector('.h-t')
                if 'Lucía' in pg.inner_text('main'): fallos.append(f'{et}: no se borró')
                # restaurar la copia: vuelve el niño
                pg.set_input_files('#fi', ruta); pg.wait_for_selector('text=Sustituir'); revisa('9restaurar'); pg.click('text=Sustituir'); pg.wait_for_selector('.opciones')
                pg.click('text=Familias'); pg.wait_for_selector('.qa')
                if 'Lucía M' not in pg.inner_text('.quien'): fallos.append(f'{et}: la copia no devolvió al niño')
                # archivo que no es copia
                pg.click('button[aria-label="Atrás"]'); pg.click('button[aria-label="Zona del tutor"]'); pg.wait_for_selector('.pk')
                pin('1111'); pg.wait_for_selector('.pd.mal')
                pg.set_input_files('#fi', {'name': 'x.json', 'mimeType': 'application/json', 'buffer': b'{"hola":1}'}); pg.wait_for_selector('[role=alert]')
                if 'no es una copia' not in pg.inner_text('main'): fallos.append(f'{et}: no avisa de copia inválida')
                pg.click('text=Volver'); pg.wait_for_selector('.pk')
                if pg.query_selector('.h-t'): fallos.append(f'{et}: «Volver» desde el PIN abrió la zona del tutor sin PIN')
                pin('1234'); pg.wait_for_selector('.h-t')
                # Modo Docente: no guarda
                antes = pg.evaluate("localStorage.getItem('lexi.v1')")
                pg.click('text=Modo Docente'); pg.wait_for_selector('.pill-md.salir'); revisa('10docente')
                if pg.evaluate("localStorage.getItem('lexi.v1')") != antes: fallos.append(f'{et}: Modo Docente escribió datos')
                pg.click('text=Salir'); pg.wait_for_selector('.opciones')
                claves = pg.evaluate('Object.keys(localStorage)')
                if any(not k.startswith('lexi.') for k in claves): fallos.append(f'{et}: claves ajenas {claves}')
                if errs: fallos.append(f'{et}: {errs}')
                pg.close()
        b.close()
finally:
    srv.terminate()
print('FALLOS:' if fallos else 'OK', *fallos, sep='\n')
sys.exit(1 if fallos else 0)
