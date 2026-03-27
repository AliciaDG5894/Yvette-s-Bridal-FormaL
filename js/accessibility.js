// ══════════════════════════════════════════════════
//  accessibility.js — Alto contraste + Tamaño texto
// ══════════════════════════════════════════════════

(function () {
    const FONT_SIZES = ['normal', 'grande', 'extra'];
    let fontIdx = 0;

    // ── Aplicar preferencias guardadas ────────────
    function aplicarPreferencias() {
        const contraste = localStorage.getItem('altoContraste') === 'true';
        fontIdx = parseInt(localStorage.getItem('fontIdx') || '0');
        if (contraste) document.body.classList.add('alto-contraste');
        aplicarFuente();
    }

    function aplicarFuente() {
        document.body.classList.remove('fuente-grande', 'fuente-extra');
        if (fontIdx === 1) document.body.classList.add('fuente-grande');
        if (fontIdx === 2) document.body.classList.add('fuente-extra');
        const btn = document.getElementById('acc-font-btn');
        if (btn) {
            const labels = ['A', 'A+', 'A++'];
            btn.textContent = labels[fontIdx];
        }
    }

    // ── Toggle alto contraste ─────────────────────
    window.toggleContraste = function () {
        document.body.classList.toggle('alto-contraste');
        const on = document.body.classList.contains('alto-contraste');
        localStorage.setItem('altoContraste', on);
        const btn = document.getElementById('acc-contrast-btn');
        if (btn) btn.classList.toggle('acc-active', on);
    };

    // ── Ciclar tamaño de fuente ───────────────────
    window.ciclárFuente = function () {
        fontIdx = (fontIdx + 1) % 3;
        localStorage.setItem('fontIdx', fontIdx);
        aplicarFuente();
    };

    // ── Crear widget flotante ─────────────────────
    function crearWidget() {
        if (document.getElementById('acc-widget')) return;

        const widget = document.createElement('div');
        widget.id = 'acc-widget';
        widget.setAttribute('role', 'region');
        widget.setAttribute('aria-label', 'Herramientas de accesibilidad');
        widget.innerHTML = `
            <button id="acc-toggle" onclick="toggleAccWidget()" title="Accesibilidad" aria-label="Abrir herramientas de accesibilidad">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="4" r="2"/>
                    
                </svg>
            </button>
            <div id="acc-panel" style="display:none;" role="menu">
                <p class="acc-label">Accesibilidad</p>
                <button id="acc-font-btn" onclick="ciclárFuente()" title="Aumentar texto" aria-label="Cambiar tamaño de texto">
                    A
                </button>
                <button onclick="resetAcc()" title="Restablecer" aria-label="Restablecer accesibilidad" style="font-size:11px;opacity:.7;">
                    ↺ Restablecer
                </button>
            </div>
        `;
        document.body.appendChild(widget);

        // Reflejar estado guardado en botones
        if (document.body.classList.contains('alto-contraste')) {
            document.getElementById('acc-contrast-btn').classList.add('acc-active');
        }
        aplicarFuente();
    }

    window.toggleAccWidget = function () {
        const panel = document.getElementById('acc-panel');
        const open = panel.style.display === 'none';
        panel.style.display = open ? 'block' : 'none';
        document.getElementById('acc-toggle').setAttribute('aria-expanded', open);
    };

    window.resetAcc = function () {
        fontIdx = 0;
        localStorage.removeItem('altoContraste');
        localStorage.removeItem('fontIdx');
        document.body.classList.remove('alto-contraste', 'fuente-grande', 'fuente-extra');
        const cb = document.getElementById('acc-contrast-btn');
        if (cb) cb.classList.remove('acc-active');
        aplicarFuente();
    };

    window.addEventListener('DOMContentLoaded', () => {
        aplicarPreferencias();
        crearWidget();
    });
})();
