// ══════════════════════════════════════════════════
//  search.js — Búsqueda dinámica en el sitio
// ══════════════════════════════════════════════════

// Contenido indexado del sitio
const SITE_CONTENT = [
    { tipo: 'página', titulo: 'Inicio', url: 'index.html', texto: 'inicio home page principal bienvenida yvettes bridal formal vestidos' },
    { tipo: 'página', titulo: 'Tienda / Ropa', url: 'shop.html', texto: 'tienda ropa shop vestidos productos comprar moda formal nupcial' },
    { tipo: 'página', titulo: 'Nosotros', url: 'Nosotros.html', texto: 'nosotros historia misión visión foda fortalezas oportunidades debilidades amenazas valores boutique' },
    { tipo: 'página', titulo: 'Contacto', url: 'contact.html', texto: 'contacto contactanos dirección teléfono correo mensaje enviar formulario' },
    { tipo: 'página', titulo: 'Carrito', url: 'shop-cart.html', texto: 'carrito compras total productos agregados eliminar pago' },
    { tipo: 'página', titulo: 'Checkout / Pago', url: 'checkout.html', texto: 'checkout pago compra finalizar pedido envío dirección' },
    { tipo: 'producto', titulo: 'Vestido de encaje', url: 'shop.html', texto: 'vestido encaje boda novia blanco formal elegante $59' },
    { tipo: 'producto', titulo: 'Vestido verde', url: 'shop.html', texto: 'vestido verde prom graduación fiesta $49' },
    { tipo: 'producto', titulo: 'Vestido asimétrico', url: 'shop.html', texto: 'vestido asimetrico moderno elegante formal $59' },
    { tipo: 'producto', titulo: 'Esmoquin', url: 'shop.html', texto: 'esmoquin etiqueta formal hombre traje $59' },
    { tipo: 'producto', titulo: 'Vestido de quinceañera', url: 'shop.html', texto: 'quinceañera xv años vestido princesa $59' },
    { tipo: 'producto', titulo: 'Vestido de graduación', url: 'shop.html', texto: 'graduación prom vestido largo formal $49' },
    { tipo: 'servicio', titulo: 'Atención personalizada', url: 'contact.html', texto: 'atención personalizada asesoría moda estilo boutique servicio' },
    { tipo: 'servicio', titulo: 'Envío a domicilio', url: 'checkout.html', texto: 'envío domicilio entrega pedido compra' },
    { tipo: 'info', titulo: 'Misión de Yvette\'s', url: 'Nosotros.html', texto: 'misión experiencias únicas vestidos elegantes especiales clientas evento' },
    { tipo: 'info', titulo: 'Visión de Yvette\'s', url: 'Nosotros.html', texto: 'visión boutique referencia moda formal nupcial regional calidad diseños' },
];

const ICONOS = {
    página: '📄',
    producto: '👗',
    servicio: '⭐',
    info: 'ℹ️'
};

function buscarEnSitio(query) {
    if (!query || query.trim().length < 2) return [];
    const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return SITE_CONTENT.filter(item => {
        const texto = (item.titulo + ' ' + item.texto).toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return texto.includes(q);
    });
}

function resaltarTexto(texto, query) {
    const q = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return texto.replace(new RegExp(`(${q})`, 'gi'), '<mark style="background:#fff176;padding:0 2px;border-radius:2px;">$1</mark>');
}

window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    if (!input) return;

    // Crear contenedor de resultados dentro del search-model
    const form = input.closest('form') || input.parentElement;
    
    let resultsDiv = document.getElementById('search-results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'search-results';
        resultsDiv.setAttribute('role', 'listbox');
        resultsDiv.setAttribute('aria-label', 'Resultados de búsqueda');
        form.parentElement.appendChild(resultsDiv);
    }

    // Búsqueda dinámica al escribir
    input.addEventListener('input', async function () {
        const query = this.value.trim();

        if (query.length < 2) {
            resultsDiv.innerHTML = '';
            resultsDiv.style.display = 'none';
            return;
        }

        // Buscar en contenido estático del sitio
        let resultados = buscarEnSitio(query);

        // Buscar también en productos de Supabase si está disponible
        if (window.supabaseClient) {
            try {
                const { data: prods } = await window.supabaseClient
                    .from('productos')
                    .select('nombre, precio, categoria, imagen_url')
                    .ilike('nombre', `%${query}%`)
                    .limit(5);

                if (prods && prods.length > 0) {
                    prods.forEach(p => {
                        resultados.unshift({
                            tipo: 'producto',
                            titulo: p.nombre,
                            url: 'shop.html',
                            texto: `${p.categoria || ''} $${parseFloat(p.precio).toFixed(2)}`
                        });
                    });
                }
            } catch (e) {}
        }

        if (resultados.length === 0) {
            resultsDiv.innerHTML = `<div class="search-no-results">Sin resultados para "<strong>${query}</strong>"</div>`;
            resultsDiv.style.display = 'block';
            return;
        }

        resultsDiv.innerHTML = resultados.slice(0, 8).map(r => `
            <a href="${r.url}" class="search-result-item" role="option">
                <span class="search-result-icon">${ICONOS[r.tipo] || '🔍'}</span>
                <div class="search-result-body">
                    <div class="search-result-title">${resaltarTexto(r.titulo, query)}</div>
                    <div class="search-result-tipo">${r.tipo}</div>
                </div>
            </a>`).join('');
        resultsDiv.style.display = 'block';
    });

    // Limpiar resultados al cerrar búsqueda
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#search-results') && !e.target.closest('#search-input')) {
            resultsDiv.innerHTML = '';
            resultsDiv.style.display = 'none';
        }
    });

    // Enter para ir al primer resultado
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const first = resultsDiv.querySelector('.search-result-item');
            if (first) window.location.href = first.getAttribute('href');
        }
    });
});
