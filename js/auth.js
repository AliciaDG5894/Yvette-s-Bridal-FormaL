// auth.js — Header dinámico, roles y cierre de sesión
// Requiere: superbase.js cargado antes en el HTML

async function cerrarSesion() {
    await window.supabaseClient.auth.signOut()
    window.location.href = 'login.html'
}

async function obtenerUsuario() {
    const { data: { session } } = await window.supabaseClient.auth.getSession()
    if (!session) return null
    const { data: perfil } = await window.supabaseClient
        .from('usuarios').select('id,nombre,rol').eq('id', session.user.id).single()
    return perfil ? { ...session.user, ...perfil } : null
}

async function renderizarHeader() {
    const authDiv = document.querySelector('.header__right__auth')
    const offAuth = document.querySelector('.offcanvas__auth')
    if (!authDiv) return

    const u = await obtenerUsuario()

    if (!u) {
        authDiv.innerHTML = `<a href="login.html">Iniciar Sesión</a>`
        if (offAuth) offAuth.innerHTML = `<a href="login.html">Iniciar Sesión</a>`
        return
    }

    if (u.rol === 'admin') {
        authDiv.innerHTML = `
            <a href="admin.html" style="margin-right:10px;font-weight:700;">Panel Admin</a>
            <a href="#" onclick="cerrarSesion()" style="color:#ca1515;font-weight:700;">Cerrar Sesión</a>`
        if (offAuth) offAuth.innerHTML = `
            <a href="admin.html" style="display:block;margin-bottom:6px;">Panel Admin</a>
            <a href="#" onclick="cerrarSesion()">Cerrar Sesión</a>`
        // Admin no ve favoritos
        document.querySelectorAll('.icon_heart_alt').forEach(el => {
            const li = el.closest('li'); if (li) li.style.display = 'none'
        })
    } else {
        const nombre = u.nombre ? u.nombre.split(' ')[0] : 'Mi cuenta'
        authDiv.innerHTML = `
            <span style="font-size:13px;font-weight:600;margin-right:10px;color:#1c1c1c;">Hola, ${nombre}</span>
            <a href="#" onclick="cerrarSesion()" style="color:#ca1515;font-weight:700;">Cerrar Sesión</a>`
        if (offAuth) offAuth.innerHTML = `<a href="#" onclick="cerrarSesion()">Cerrar Sesión</a>`
    }
}

window.addEventListener('DOMContentLoaded', () => { renderizarHeader() })
