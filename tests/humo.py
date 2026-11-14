"""Prueba de humo: arranca la app, sin errores de consola, claro y oscuro, móvil y tableta.
Uso: python3 tools/build.py && python3 tests/humo.py"""
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
                pg = b.new_page(viewport={'width': w, 'height': h}); errs = []
                pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
                pg.on('pageerror', lambda e: errs.append(str(e)))
                pg.add_init_script(f"localStorage.setItem('lexi.th','\"{tema}\"')")
                pg.goto('http://localhost:8765/index.html'); pg.wait_for_selector('.lexi-mascota img')
                pg.wait_for_timeout(300)
                if pg.evaluate('document.documentElement.dataset.theme') != tema: fallos.append(f'{tema} {w}: tema')
                for bt in pg.query_selector_all('button'):
                    bb = bt.bounding_box()
                    if bb['width'] < 44 or bb['height'] < 44: fallos.append(f'{tema} {w}: botón pequeño')
                if pg.evaluate('document.documentElement.scrollWidth') > w: fallos.append(f'{tema} {w}: desborda')
                if errs: fallos.append(f'{tema} {w}x{h}: {errs}')
                pg.screenshot(path=f'/tmp/lexi-{tema}-{w}.png'); pg.close()
        b.close()
finally:
    srv.terminate()
print('FALLOS:' if fallos else 'OK', *fallos, sep='\n')
sys.exit(1 if fallos else 0)
