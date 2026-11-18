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
                def hoy_completo(nombre):
                    """Pulsa «Hoy» y recorre la sesión valorando todo «casi todos»; devuelve las partes vistas."""
                    pg.click('button:text-is("Hoy")'); partes = []
                    for _ in range(80):
                        pg.wait_for_timeout(80)
                        if pg.locator('text=¿Alguien ha encontrado alguna').count(): pg.click('text=Hoy no'); continue # EN1: la primera pantalla de «Hoy»
                        if pg.locator('.rotulo').count() == 0: break
                        r = pg.inner_text('.rotulo'); parte = r.split(' · ')[0]
                        if parte not in partes and parte in ('Recordamos', 'Jugamos', 'Cierre'): partes.append(parte)
                        if parte == 'Cierre': revisa(f'{nombre}cierre'); pg.click('text=Terminar')
                        elif parte in ('Recordamos', 'Jugamos'):
                            if pg.locator('text=¡Hecho!').count(): pg.click('text=Seguir')
                            elif pg.locator('text=Ver la respuesta').count(): pg.click('text=Ver la respuesta')
                            else: pg.keyboard.press('1') # test 92: la tecla 1 valora «casi todos»
                        else:
                            if 'Palabra nueva' not in partes: partes.append('Palabra nueva'); revisa(f'{nombre}nueva')
                            pg.click('text=Siguiente' if pg.locator('text=Siguiente').count() else 'text=Seguir')
                    else: fallos.append(f'{et}: la sesión «Hoy» no termina')
                    return partes
                pg.goto('http://localhost:8765/index.html'); pg.wait_for_selector('.lexi-mascota svg')
                if pg.evaluate('document.documentElement.dataset.theme') != tema: fallos.append(f'{et}: tema')
                revisa('1inicio')
                # Docente: error sin nombre, crear clase
                pg.click('text=Docente'); pg.wait_for_selector('#nom'); pg.click('text=Crear clase')
                if 'Escribe un nombre' not in pg.inner_text('#err'): fallos.append(f'{et}: falta aviso de nombre vacío')
                pg.fill('#nom', '1.º A'); revisa('2quien'); pg.click('text=Crear clase'); pg.wait_for_selector('.escala-fila')
                an = pg.evaluate("[...document.querySelectorAll('.escala-fila .escala g')].map(g=>g.getBoundingClientRect().width)")
                if len(an) != 4 or an != sorted(an): fallos.append(f'{et}: la escala no crece {an}')
                revisa('3casa')
                # Semana 1: lista y presentación completa de una palabra
                pg.click('text=Palabras de la semana 1'); pg.wait_for_selector('.palabras .pal'); revisa('3semana')
                if pg.locator('.palabras .pal').count() != 6: fallos.append(f'{et}: la semana 1 debía tener 6 palabras')
                if not pg.evaluate("[...document.querySelectorAll('.pal img')].every(i=>i.complete&&i.naturalWidth>0)") and not pg.wait_for_function("[...document.querySelectorAll('.pal img')].every(i=>i.complete&&i.naturalWidth>0)"): pass
                pg.click('.pal:has-text("observar")'); pg.wait_for_selector('.rotulo')
                vistos = []
                for k in range(9):
                    vistos.append(pg.inner_text('.rotulo'))
                    if k in (0, 2, 4, 8): revisa(f'4pres{k}')
                    if k == 0 and not pg.evaluate("(()=>{const i=document.querySelector('.esc-img');return i.complete&&i.naturalWidth>0})()"): fallos.append(f'{et}: la imagen de la escena no carga')
                    if k < 8: pg.click('text=Siguiente')
                if vistos[0] != 'Escena' or vistos[-1] != 'Ya la conocemos' or len(set(vistos)) != 9: fallos.append(f'{et}: pasos de la presentación {vistos}')
                if 'ob' not in pg.inner_text('main') and 'observar' not in pg.inner_text('main'): fallos.append(f'{et}: falta la palabra al final')
                pg.keyboard.press('ArrowLeft'); pg.wait_for_selector('.rotulo:has-text("Más ejemplos · 3 de 3")'); pg.keyboard.press('ArrowRight') # AT2: atajos de teclado en la presentación
                if pg.inner_text('.rotulo') != 'Ya la conocemos': fallos.append(f'{et}: flecha derecha no avanzó la presentación')
                if pg.locator('button[aria-label="Pantalla completa"]').count() != 1: fallos.append(f'{et}: falta el botón de pantalla completa') # AT1
                pg.click('text=Terminar'); pg.wait_for_selector('.palabras')
                if pg.evaluate("JSON.parse(localStorage.getItem('lexi.v1')).perfiles.find(p=>p.n==='1.º A').pal.observar.e") != 2: fallos.append(f'{et}: la palabra presentada no quedó en «La conocemos»')
                if pg.evaluate("JSON.parse(localStorage.getItem('lexi.v1')).perfiles.find(p=>p.n==='1.º A').pal.comparar") is not None: fallos.append(f'{et}: se guardó una palabra no presentada')
                # Jugamos: con una sola palabra presentada sale una tarea; se ve la respuesta, se valora y se guarda
                pg.click('button:text-is("Jugamos")'); pg.wait_for_selector('.rotulo:has-text("Jugamos")'); revisa('5juego')
                tarea = pg.inner_text('.rotulo')
                if '1 de 1' not in tarea: fallos.append(f'{et}: debía haber 1 tarea {tarea}')
                if pg.locator('text=Ver la respuesta').count():
                    pg.click('text=Ver la respuesta'); pg.wait_for_selector('.veredicto'); revisa('5juegoresp')
                pg.click('button:text-is("La mitad")'); pg.wait_for_selector('text=¡Hecho!'); revisa('5juegofin')
                val = pg.evaluate("JSON.parse(localStorage.getItem('lexi.v1')).perfiles.find(p=>p.n==='1.º A').pal.observar.val")
                if len(val) != 1 or val[0]['v'] != 'mitad': fallos.append(f'{et}: la valoración no se guardó {val}')
                pg.click('text=Otra vez'); pg.wait_for_selector('.rotulo:has-text("Jugamos")')
                if pg.locator('text=Ver la respuesta').count(): pg.keyboard.press('ArrowRight'); pg.wait_for_selector('.veredicto') # AT2: siguiente enseña la respuesta
                pg.wait_for_selector('.vals')
                pg.keyboard.press('PageDown'); pg.keyboard.press('ArrowRight'); pg.keyboard.press(' '); pg.wait_for_timeout(200) # AT3: en valorar, siguiente no hace nada
                if pg.locator('.vals').count() != 1 or pg.locator('text=¡Hecho!').count(): fallos.append(f'{et}: en la pantalla de valorar, AvPág avanzó')
                pg.keyboard.press('0'); pg.wait_for_selector('text=¡Hecho!') # 0 = seguir sin valorar
                if len(pg.evaluate("JSON.parse(localStorage.getItem('lexi.v1')).perfiles.find(p=>p.n==='1.º A').pal.observar.val")) != 1: fallos.append(f'{et}: «seguir sin valorar» no debía guardar')
                pg.click('text=Terminar'); pg.wait_for_selector('.palabras')
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.casa-cab')
                # «Hoy»: observar ya estaba presentada hoy → no hay «Recordamos»; entra 1 palabra nueva (comparar), se juega y se cierra; queda «hecha»
                revisa('5casahoy'); partes = hoy_completo('6hoy'); pg.wait_for_selector('.casa-cab')
                if partes != ['Palabra nueva', 'Jugamos', 'Cierre']: fallos.append(f'{et}: partes de «Hoy» {partes}')
                dat = pg.evaluate("JSON.parse(localStorage.getItem('lexi.v1')).perfiles.find(p=>p.n==='1.º A')")
                if dat['pal']['comparar']['e'] < 2 or not dat['ses']: fallos.append(f'{et}: «Hoy» no guardó la palabra nueva ni el día {dat["ses"]}')
                if 'Hoy · hecha' not in pg.inner_text('main'): fallos.append(f'{et}: falta «Hoy · hecha»')
                # muro «Nuestras palabras»: ficha de consulta y «Una al azar» (no guardan nada)
                antes = pg.evaluate("localStorage.getItem('lexi.v1')")
                pg.click('button:text-is("Nuestras palabras")'); pg.wait_for_selector('.palabras .pal'); revisa('7muro')
                if 'Ya son' not in pg.inner_text('main'): fallos.append(f'{et}: el muro no dice «Ya son N»')
                pg.click('.pal >> nth=0'); pg.wait_for_selector('.palabra-g'); revisa('7consulta'); pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.palabras .pal')
                pg.click('button:text-is("Una al azar")'); pg.wait_for_selector('.rotulo'); revisa('7azar'); pg.keyboard.press('Enter'); pg.wait_for_selector('.palabra-g ~ .gr'); pg.keyboard.press('PageDown'); pg.wait_for_selector('.rotulo') # AT2: Ver y Otra con el teclado
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.palabras .pal'); pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.casa-cab')
                if pg.evaluate("localStorage.getItem('lexi.v1')") != antes: fallos.append(f'{et}: el muro cambió los datos')
                # «La hemos encontrado» (paso 5.5): apuntar, deshacer, chispa y ficha; no mueve la escala
                enc = lambda: pg.evaluate("JSON.parse(localStorage.getItem('lexi.v1')).perfiles.find(p=>p.n==='1.º A').pal")
                e0 = {k: (v['e'], v['caja'], v['prox']) for k, v in enc().items()}
                pg.click('button:text-is("Nuestras palabras")'); pg.wait_for_selector('.palabras .pal')
                pg.click('button:text-is("La hemos encontrado")'); pg.wait_for_selector('.palabras .pal'); revisa('8encpal')
                pg.click('.pal:has-text("observar")'); pg.wait_for_selector('.enc-btn'); revisa('8enccomo')
                pg.click('.enc-btn:has-text("oído")'); pg.wait_for_selector('text=¡Apuntada!'); revisa('8enchecha')
                if enc()['observar'].get('enc', {}).get('o') != 1: fallos.append(f'{et}: «La hemos oído» no se guardó')
                pg.click('button:text-is("Deshacer")'); pg.wait_for_selector('.enc-btn')
                if 'enc' in enc()['observar']: fallos.append(f'{et}: «Deshacer» no dejó las cuentas como estaban')
                pg.click('.enc-btn:has-text("dicho")'); pg.wait_for_selector('text=¡Apuntada!'); pg.click('button:text-is("Otra palabra")'); pg.wait_for_selector('.palabras .pal')
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.palabras .pal'); pg.wait_for_selector('.chispa'); revisa('8chispa')
                if pg.locator('.chispa').count() != 1: fallos.append(f'{et}: debía haber una chispa en el muro')
                pg.click('.pal:has-text("observar")'); pg.wait_for_selector('text=La hemos encontrado 1 vez: 1 dicha'); revisa('8ficha')
                pg.click('button:text-is("La hemos encontrado")'); pg.wait_for_selector('.enc-btn'); pg.click('.enc-btn:has-text("escrita")'); pg.wait_for_selector('text=¡Apuntada!')
                pg.click('button:text-is("Listo")'); pg.wait_for_selector('text=La hemos encontrado 2 veces: 1 vista · 1 dicha')
                if {k: (v['e'], v['caja'], v['prox']) for k, v in enc().items()} != e0: fallos.append(f'{et}: «La hemos encontrado» movió la escala o el repaso')
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.palabras .pal'); pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.casa-cab')
                # EN1: «Hoy» empieza preguntando; «Sí» lleva a apuntar y se sigue con la sesión
                pg.click('button:has-text("Hoy")'); pg.wait_for_selector('text=¿Alguien ha encontrado alguna de nuestras palabras?'); revisa('8hoypreg')
                pg.click('button:text-is("Sí")'); pg.wait_for_selector('.palabras .pal'); pg.click('.pal:has-text("observar")'); pg.click('.enc-btn:has-text("oído")')
                pg.wait_for_selector('text=¡Apuntada!'); pg.click('button:text-is("Seguir con Hoy")'); pg.wait_for_selector('.casa-cab, .rotulo')
                while pg.locator('.rotulo').count(): # si «Hoy» aún tiene partes, se saltan para volver a la casa
                    if pg.locator('text=Saltar esta parte').count(): pg.click('text=Saltar esta parte')
                    else: pg.click('button[aria-label="Atrás"]')
                    pg.wait_for_timeout(100)
                pg.wait_for_selector('.casa-cab')
                # Explorar (paso 5.7): con una palabra de la semana 2 puesta a mano salen «Parejas» y «Dos al azar»
                pg.click('button:text-is("Explorar")'); pg.wait_for_selector('text=Aquí irá Explorar'); revisa('9exp0')
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.casa-cab')
                pg.evaluate("""(() => { const e = PALABRAS.find(p => p.id === 'enorme'); PALABRAS.push({ ...e, id: 'diminuto', palabra: 'diminuto', semana: 2, orden: 1, rel: { parecida: [], contraria: ['enorme'] } }); window.__antes = !!perfilAct().pal.enorme; presentarPalabra('enorme'); presentarPalabra('diminuto'); })()""")
                pg.click('button:text-is("Explorar")'); pg.wait_for_selector('button:text-is("Parejas")'); revisa('9exp1')
                if pg.locator('button:text-is("Por grupos")').count() != 0: fallos.append(f'{et}: «Por grupos» no debía salir con menos de 6 palabras')
                pg.click('button:text-is("Parejas")'); pg.wait_for_selector('.pareja-mini'); revisa('9expparejas'); pg.click('.pareja-mini >> nth=0'); pg.wait_for_selector('.pareja')
                if 'lo contrario' not in pg.inner_text('main') or pg.locator('.pareja img').count() != 2: fallos.append(f'{et}: la pareja no enseña dos imágenes y su pregunta'); revisa('9exppareja')
                pg.click('button[aria-label="Atrás"]'); pg.click('button[aria-label="Atrás"]'); pg.click('button:text-is("Dos al azar")'); pg.wait_for_selector('.pareja'); revisa('9expazar')
                if 'frase con las dos' not in pg.inner_text('main'): fallos.append(f'{et}: «Dos al azar» sin su pregunta')
                pg.click('button:text-is("Otras dos")'); pg.wait_for_selector('.pareja')
                pg.click('button[aria-label="Atrás"]'); pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.casa-cab')
                pg.evaluate("(() => { delete perfilAct().pal.diminuto; if (!window.__antes) delete perfilAct().pal.enorme; guardar(); PALABRAS.pop(); })()")
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
                if 'AvPág' not in pg.inner_text('main'): fallos.append(f'{et}: falta la línea de atajos en la zona del tutor') # AT4
                # tarjetas para imprimir (TA1-TA3): grandes (6 hojas) y pequeñas (1 hoja de 6)
                pg.click('.fila-t:has-text("Imprimir tarjetas")'); pg.wait_for_selector('.tj-g'); revisa('6tarj')
                if pg.locator('.tj-hoja').count() != 6: fallos.append(f'{et}: tarjetas grandes: no son 6')
                pg.click('.hoja-ctl .dos button:has-text("Pequeñas")'); pg.wait_for_selector('.tj-p')
                if pg.locator('.tj-p figure').count() != 6 or pg.locator('.tj-p .tj-hoja').count() != 1: fallos.append(f'{et}: tarjetas pequeñas: no son 6 en una hoja')
                if 'Lucía' in pg.inner_text('.tj') or 'Lexi' in pg.inner_text('.tj'): fallos.append(f'{et}: las tarjetas llevan nombres o Lexi')
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('text=Zona del tutor')
                # hoja para las familias (FA1-FA3): abrir, sin imágenes, volver
                pg.click('.fila-t:has-text("Hoja para las familias")'); pg.wait_for_selector('.hoja'); revisa('6hoja')
                if pg.locator('.hoja-pal').count() != 6: fallos.append(f'{et}: la hoja no tiene 6 palabras')
                if 'semana 1' not in pg.inner_text('.hoja h2'): fallos.append(f'{et}: la hoja no es de la semana 1')
                pg.click('#hoja-sin')
                if pg.locator('.hoja img').count(): fallos.append(f'{et}: «sin imágenes» deja imágenes')
                if 'Lucía' in pg.inner_text('.hoja') or 'Lexi' in pg.inner_text('.hoja'): fallos.append(f'{et}: la hoja lleva nombres o menciona Lexi')
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('text=Zona del tutor')
                # «Cómo va la clase» (RE1-RE3): se ve desde el perfil de la clase y se vuelve
                pg.click('.fila-t:has-text("1.º A")'); pg.click('button:text-is("Cómo va la clase")'); pg.wait_for_selector('.hoja.resumen'); revisa('6resumen')
                if '1.º A' not in pg.inner_text('.resumen') or 'La conocemos' not in pg.inner_text('.resumen'): fallos.append(f'{et}: el resumen no dice la clase ni los pasos')
                pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('#nom'); pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('text=Zona del tutor')
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
                pg.wait_for_selector('button:text-is("Hoy")'); partes = hoy_completo('11hoydoc'); pg.wait_for_selector('.pill-md.salir')
                if partes != ['Recordamos', 'Palabra nueva', 'Jugamos', 'Cierre']: fallos.append(f'{et}: «Hoy» en Modo Docente {partes}')
                pg.click('button:text-is("Explorar")'); pg.click('button:text-is("Por grupos")'); pg.wait_for_selector('.palabras .pal'); revisa('11expgrupos')
                if pg.locator('.palabras .pal').count() != 6: fallos.append(f'{et}: «Por grupos» en Modo Docente debía tener las 6 de la semana 1')
                pg.click('.pal >> nth=0'); pg.wait_for_selector('.palabra-g'); pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('.palabras .pal') # la ficha vuelve a los grupos
                pg.click('button[aria-label="Atrás"]'); pg.click('button[aria-label="Atrás"]'); pg.wait_for_selector('button:text-is("Hoy")')
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
