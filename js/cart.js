// cart.js — Agregar productos al carrito en Supabase
// Requiere: superbase.js cargado antes en el HTML

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product__hover li a').forEach(a => {
        const icon = a.querySelector('.icon_bag_alt')
        if (!icon) return
        a.addEventListener('click', async (e) => {
            e.preventDefault()
            const item = a.closest('.product__item')
            if (!item) return
            const nombre = item.querySelector('h6 a')?.textContent?.trim()
                        || item.querySelector('h6')?.textContent?.trim() || 'Producto'
            const precioText = item.querySelector('.product__price')?.textContent || '0'
            const precio = parseFloat(precioText.replace(/[^0-9.]/g, '')) || 0
            const img = item.querySelector('.product__item__pic')?.getAttribute('data-setbg') || ''
            await agregarAlCarrito(nombre, precio, img)
        })
    })
})

async function agregarAlCarrito(nombre, precio, imagen) {
    const { data: { session } } = await window.supabaseClient.auth.getSession()
    if (!session) {
        mostrarToast('Debes iniciar sesión para agregar al carrito', 'error')
        setTimeout(() => window.location.href = 'login.html', 1500)
        return
    }
    const userId = session.user.id
    const { data: existe } = await window.supabaseClient
        .from('carrito').select('id,cantidad').eq('user_id', userId).eq('nombre_producto', nombre).single()

    if (existe) {
        await window.supabaseClient.from('carrito').update({ cantidad: existe.cantidad + 1 }).eq('id', existe.id)
    } else {
        await window.supabaseClient.from('carrito').insert({ user_id: userId, nombre_producto: nombre, precio, cantidad: 1, imagen_url: imagen })
    }
    mostrarToast(`✅ "${nombre}" agregado al carrito`)
}

function mostrarToast(msg, tipo = 'success') {
    let t = document.getElementById('_cart_toast')
    if (!t) {
        t = document.createElement('div'); t.id = '_cart_toast'
        t.style.cssText = 'position:fixed;bottom:28px;right:28px;z-index:9999;padding:13px 20px;border-radius:6px;font-size:13px;font-weight:700;font-family:Montserrat,sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.15);transition:opacity .4s;opacity:0;'
        document.body.appendChild(t)
    }
    t.textContent = msg
    t.style.background = tipo === 'error' ? '#c62828' : '#1c1c1c'
    t.style.color = '#fff'; t.style.opacity = '1'
    clearTimeout(t._t); t._t = setTimeout(() => { t.style.opacity = '0' }, 2800)
}
