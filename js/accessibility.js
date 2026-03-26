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
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
                    <path d="M6.5 10.5l-1.41 1.41L7 14H4v2h3l-1.91 1.91L6.5 19.32 10 15.83V21h2v-5.17l3.5 3.49 1.41-1.41L14 15h3v-2h-3l1.91-1.91L14.5 9.68 11 13.17V9h-2v4.17L6.5 10.5z"/>
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
