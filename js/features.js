/* ========================================
   FEATURES.JS - Nuevas Funcionalidades
   ======================================== */

const translations = {
es: {
    dashboard:'Dashboard',
    productos:'Productos',
    usuarios:'Usuarios',
    mensajes:'Mensajes de Contacto',
    nuevo: "Nuevo",
    modoOscuro: "Modo Oscuro",
    modoClaro: "Modo Claro",
    verDescripcion: "Ver descripción ▾",
    ocultar: "Ocultar ▴",
    agregarProducto: "Agregar Producto",
    nombreProducto: "Nombre del producto",
    precioPlaceholder: "Precio (ej: 59.0)",
    seleccionarCategoria: "-- Selecciona categoría --",
    todos:"Todos",
    boda: "Boda",
    prom: "Prom",
    esmoquin: "Esmoquin",
    accesorios: "Accesorios",
    urlImagen: "URL de imagen (opcional)",
    errorNombre: "El nombre es obligatorio.",
    errorPrecio: "Ingresa un precio válido.",
    errorCategoria: "Selecciona una categoría.",
    eliminarProducto: "¿Eliminar este producto?",
    sinProductos: "Sin productos en ese rango.",
    productosEncontrados: "productos encontrados.",
    productoEncontrado: "producto encontrado.",
    ofertaDia: "Ver Oferta del Día",
    cerrarOferta: "Cerrar Oferta",
    mensajeExito: "✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.",
    errorNombreContacto: "Por favor ingresa tu nombre completo (mínimo 2 caracteres).",
    errorCorreo: "Ingresa un correo electrónico válido (ej: correo@ejemplo.com).",
    errorMensaje: "El mensaje debe tener al menos 10 caracteres.",
    favoritos: "Mis Favoritos",
    meGusta: "Me gusta",
    agregadoFav: "añadido a favoritos",
    quitadoFav: "quitado de favoritos",
    productoNuevoDesc: "Producto recién agregado. Disponible en todas las tallas. Consulta disponibilidad en tienda.",
    inicio: "Inicio Sesion",
    ropa: "Ropa",
    carrito: "Carrito",
    nosotros: "Nosotros",
    contacto: "Contáctanos",
    nuevosProductos: "Nuevos Productos",
    descripcionHero: "Descubre nuestra exclusiva selección de vestidos diseñados para hacer inolvidable tu día especial.",
    verOferta:"Ver Oferta del Día",
    vestidoEnc:"Vestido de Encaje",
    vestidoVerd:"Vestido Verde",
    brazaletes:"Brazaletes",
    vestidoNeg:"Vestido Negro",
    vestidoPlateado: "Vestido plateado",
    esmoquinEtiqueta: "Esmoquin etiqueta",
    oferta: "Oferta",
    vestidoMangaLarga: "Vestido de manga larga",
    vestidoAsimetrico: "Vestido asimétrico",
    vestidoAzul: "Vestido azul",
    vestidoRaso: "Vestido de raso",
    favNovia:"Favoritos de la Novia",
    comprarAhora:"Comprar ahora",
    tendencia:"Tendencias",
    bolso:"Bolso Tejido",
    vestidoLargo:"Vestido Largo",
    aretes:"Aretes de Concha",
    bolsoAmarillo:"Bolso Amarillo",
    descuento:"Descuento",
    primavera:"Primavera",
    enlacesRapidos: "Enlaces rápidos",
    blogs: "Blogs",
    faq: "Preguntas frecuentes",
    cuentas: "Cuentas",
    miCuenta: "Mi cuenta",
    pedidos: "Pedidos",
    compras: "Compras",
    listaDeseos: "Lista de deseos",
    boletin: "Boletín Informativo",
    suscribete: "Suscríbete",
    email: "Correo electrónico",
    buscar: "Busca aquí...",
    iniciarSesion:"Iniciar Sesion",
    vestidos:"Vestidos",
    velos:"Velos",
    lazos:"Lazos",
    cola:"Cola",
    tejido:"Tejido",
    ajustado:"Ajustado",
    corto:"Corto",
    largo:"Largo",
    collares:"Collares",
    anillos:"Anillos",
    broches:"Broches",
    comprarPrecio:" Comprar por Precio",
    precio:"Precio",
    filtrar:"Filtrar",
    comprarTalla:"Comprar por Talla",
    comprarColor:"Comprar por Color",
    negro:"Negro",
    blanco:"Blanco",
    rojo:"Rojo",
    gris:"Gris",
    azul:"Azul",
    verde:"Verde",
    amarillo:"Amarillo",
    tabla:"Tabla Comparativa de Productos",
    categorias: "Categorías",
    categoria: "Categoría",
    tallas: "Tallas disponibles",
    colores: "Colores",
    envioGratis: "Envío gratis",
    devolucion: "Devolución 30 días",
    personalizacion: "Personalización",
    incluyeAccesorios: "Incluye accesorios",
    calificacion: "Calificación",
    cargandoCarrito: "Cargando carrito...",
    iniciaSesionCarrito: "Inicia sesión para ver tu carrito.",
    carritoVacio: "Tu carrito está vacío.",
    verProductos: "Ver productos",
    continuarComprando: "Continuar comprando",
    vaciarCarrito: "Vaciar carrito",
    carritoTotal: "Carrito total",
    subtotal: "Subtotal",
    total: "Total",
    procederPago: "Proceder al pago",
    productos: "Productos",
    precio: "Precio",
    cantidad: "Cantidad",
    eliminar: "Eliminar",
    cerrarSesion: "Cerrar Sesión",
    hola: "Hola",
    conocenos: "Conócenos",
    subtituloNosotros: "Más que una boutique, somos parte de tus momentos más importantes.",
    nuestraHistoria: "Nuestra Historia",
    loQueSomos: "Lo que somos",
    textoHistoria: "Yvette's Bridal Formal nace con el propósito de ofrecer vestidos exclusivos para momentos inolvidables. Desde nuestros inicios, nos hemos enfocado en brindar una atención personalizada y diseños que reflejen elegancia, calidad y estilo.",
    nuestraMision: "Nuestra Misión",
    loQueHacemos: "Lo que hacemos",
    textoMision: "Crear experiencias únicas a través de vestidos que hagan sentir seguras, elegantes y especiales a nuestras clientas en cada evento. Ofrecemos atención personalizada y diseños exclusivos que reflejan la esencia de cada mujer.",
    nuestraVision: "Nuestra Visión",
    aDondeVamos: "A dónde vamos",
    textoVision: "Ser la boutique de referencia en moda formal y nupcial a nivel regional, reconocida por la calidad de nuestros diseños y la calidez de nuestra atención.",
    analisisFoda: "Análisis FODA",
    descripcionFoda: "Un vistazo honesto a nuestra posición estratégica",
    fortalezas: "Fortalezas",
    oportunidades: "Oportunidades",
    debilidades: "Debilidades",
    amenazas: "Amenazas",
    f1: "Atención personalizada y cercana a cada clienta",
    f2: "Amplio catálogo de vestidos formales y nupciales exclusivos",
    f3: "Experiencia y conocimiento del mercado de moda formal",
    f4: "Fuerte presencia en redes sociales e imagen de marca",
    f5: "Ubicación estratégica accesible para el público objetivo",
    o1: "Crecimiento del comercio electrónico en moda femenina",
    o2: "Alta demanda de vestidos para bodas, quince años y graduaciones",
    o3: "Posibilidad de expandir ventas a otras ciudades vía e-commerce",
    o4: "Alianzas con fotógrafos, organizadores de eventos y salones",
    o5: "Tendencia al alza en personalización y diseño a medida",
    d1: "Capacidad de inventario limitada en temporadas de alta demanda",
    d2: "Dependencia de proveedores externos para ciertos diseños",
    d3: "Presencia digital en etapa de desarrollo y crecimiento",
    d4: "Proceso de ventas aún mayormente presencial",
    d5: "Recursos limitados para campañas de publicidad masiva",
    amenaza1: "Competencia de tiendas en línea con precios más bajos",
    amenaza2: "Fluctuaciones económicas que afectan el poder adquisitivo",
    amenaza3: "Cambios rápidos en tendencias de moda y preferencias",
    amenaza4: "Entrada de nuevas boutiques al mercado local",
    amenaza5: "Incremento en costos de materiales e importación de telas",
    infoContacto: "Información de contacto",
    direccion: "Dirección",
    direccionTexto: "A solo una milla al este de Tyndall PKWY/ HWY 98 en Callaway, Panama City 32404.",
    telefono: "Teléfono",
    correo: "Correo",
    enviarMensaje: "Enviar mensaje",
    enviar: "Enviar",
    nombre: "Nombre",
    mensaje: "Mensaje",
    email: "Email",
    enlaces: "Enlaces rápidos",
    miCuenta: "Mi cuenta",
    pedidos: "Pedidos",
    compras: "Compras",
    wishlist: "Lista de deseos",
    boletin: "Boletin Informativo",
    subscribete: "Subscríbete",
    tituloLogin: "Yvette's - Iniciar Sesión",
    correoEjemplo: "correo@gmail.com",
    password: "••••••••",
    regresar: "← Regresar",
    nombreCompleto: "Nombre completo",
    min6: "Mínimo 6 caracteres",
    repetirPassword: "Repite tu contraseña",
    confirmarContrasena: "Confirmar contraseña",
    crearCuenta: "Crear Cuenta",
    verificacion: "Verificación",
    mfaSimulacion: "Simulación de Segundo factor de autenticación",
    ingresaCodigo: "Ingresa el código de verificación",
    codigoAcceso: "Código de acceso:",
    verificarCodigo: "Verificar Código",
    reenviarCodigo: "Reenviar código",
    volver: "Volver",
    recuperarContrasena: "Recuperar Contraseña",
    enviarEnlace: "Enviar enlace",
    olvideContrasena: "¿Olvidaste tu contraseña?",
    tituloAdmin: "Yvette's - Panel Admin",
    principal: "Principal",
    gestion: "Gestión",
    cuenta: "Cuenta",
    admin: "ADMIN",
    itemsCarrito: "Items en carrito",
    bienvenidaAdmin: "Bienvenido al panel de administración de Yvette's.",
    nuevoProducto: "Nuevo producto",
    usuariosRegistrados: "Usuarios registrados",
    mensajesContacto: "Mensajes de contacto",
    cargando: "Cargando...",
    nombreProducto: "Nombre del producto",
    precio: "0.00",
    categoria: "Categoría",
    imagenUrl: "URL de imagen",
    imagen: "img/product/...",
    descripcion: "Descripción",
    cancelar: "Cancelar",
    guardar: "Guardar",
    noProductos: "No hay productos aún.",
    noUsuarios: "No hay usuarios.",
    noMensajes: "No hay mensajes.",
    errorCampos: "Nombre y precio son requeridos.",
    confirmarEliminar: "¿Eliminar este producto?"
},
en: {
    dashboard:'Dashboard',
    productos:'Products',
    usuarios:'Users',
    mensajes:'Contact Messages',
    nuevo: "New",
    modoOscuro: "Dark Mode",
    modoClaro: "Light Mode",
    verDescripcion: "View description ▾",
    ocultar: "Hide ▴",
    agregarProducto: "Add Product",
    nombreProducto: "Product name",
    precioPlaceholder: "Price (e.g: 59.0)",
    seleccionarCategoria: "-- Select category --",
    todos:"All",
    boda: "Wedding",
    prom: "Prom",
    esmoquin: "Tuxedo",
    accesorios: "Accessories",
    urlImagen: "Image URL (optional)",
    errorNombre: "Name is required.",
    errorPrecio: "Enter a valid price.",
    errorCategoria: "Select a category.",
    eliminarProducto: "Delete this product?",
    sinProductos: "No products in this range.",
    productosEncontrados: "products found.",
    productoEncontrado: "product found.",
    ofertaDia: "View Deal of the Day",
    cerrarOferta: "Close Deal",
    mensajeExito: "✅ Message sent successfully! We will contact you soon.",
    errorNombreContacto: "Please enter your full name (at least 2 characters).",
    errorCorreo: "Enter a valid email (e.g: email@example.com).",
    errorMensaje: "Message must be at least 10 characters.",
    favoritos: "My Favorites",
    meGusta: "Like",
    agregadoFav: "added to favorites",
    quitadoFav: "removed from favorites",
    productoNuevoDesc: "Newly added product. Available in all sizes. Check store availability.",
    inicio: "Login",
    ropa: "Shop",
    carrito: "Car",
    nosotros: "About",
    contacto: "Contact",
    nuevosProductos: "New Products",
    descripcionHero: "Discover our exclusive selection of dresses designed to make your special day unforgettable.",
    verOferta:"View today's deals",
    vestidoEnc:"Lace dress",
    vestidoVerd:"Green dress",
    brazaletes:"Bracelet",
    vestidoNeg:"Dark bress",
    vestidoPlateado: "Silver dress",
    esmoquinEtiqueta: "Tuxedo",
    oferta: "Sale",
    vestidoMangaLarga: "Long sleeve dress",
    vestidoAsimetrico: "Asymmetrical dress",
    vestidoAzul: "Blue dress",
    vestidoRaso: "Satin dress",
    favNovia:"The bride's favorites",
    comprarAhora:"Shop Now",
    tendencia:"Trends",
    bolso:"Woven bag",
    vestidoLargo:"Long dress",
    aretes:"Shell earrings",
    bolsoAmarillo:"Yellow bag",
    descuento:"discount",
    primavera:"Spring",
    enlacesRapidos: "Quick Links",
    blogs: "Blogs",
    faq: "FAQ",
    cuentas: "Accounts",
    miCuenta: "My Account",
    pedidos: "Orders",
    compras: "Purchases",
    listaDeseos: "Wishlist",
    boletin: "Newsletter",
    email: "Email",
    buscar: "Search here...",
    iniciarSesion:"Login",
    vestidos:"Dress",
    velos:"Veils",
    lazos:"Ribbons",
    cola:"Train",
    tejido:"Fabric",
    ajustado: "Fitted",
    corto: "Short",
    largo: "Long",
    collares: "Necklaces",
    anillos: "Rings",
    broches: "Brooches",
    comprarPrecio: "Shop by Price",
    precio: "Price",
    filtrar: "Filter",
    comprarTalla: "Shop by Size",
    comprarColor: "Shop by Color",
    negro: "Black",
    blanco: "White",
    rojo: "Red",
    gris: "Gray",
    azul: "Blue",
    verde: "Green",
    amarillo: "Yellow",
    tabla: "Product Comparison Table",
    categorias: "Categories",
    categoria: "Category",
    tallas: "Available sizes",
    colores: "Colors",
    envioGratis: "Free shipping",
    devolucion: "30-day return",
    personalizacion: "Customization",
    incluyeAccesorios: "Includes accessories",
    calificacion: "Rating",
    cargandoCarrito: "Loading cart...",
    iniciaSesionCarrito: "Log in to view your cart.",
    carritoVacio: "Your cart is empty.",
    verProductos: "View products",
    continuarComprando: "Continue shopping",
    vaciarCarrito: "Empty cart",
    carritoTotal: "Cart total",
    subtotal: "Subtotal",
    total: "Total",
    procederPago: "Proceed to checkout",
    productos: "Products",
    precio: "Price",
    cantidad: "Quantity",
    eliminar: "Remove",
    cerrarSesion: "Log out",
    hola: "Hello",
    conocenos: "Get to know us",
    subtituloNosotros: "More than a boutique, we are part of your most important moments.",
    nuestraHistoria: "Our History",
    loQueSomos: "Who we are",
    textoHistoria: "Yvette's Bridal Formal was born with the purpose of offering exclusive dresses for unforgettable moments. Since our beginnings, we have focused on providing personalized attention and designs that reflect elegance, quality, and style.",
    nuestraMision: "Our Mission",
    loQueHacemos: "What we do",
    textoMision: "To create unique experiences through dresses that make our clients feel confident, elegant, and special at every event. We offer personalized attention and exclusive designs that reflect each woman's essence.",
    nuestraVision: "Our Vision",
    aDondeVamos: "Where we are going",
    textoVision: "To be the leading boutique in formal and bridal fashion at a regional level, recognized for the quality of our designs and the warmth of our service.",
    analisisFoda: "SWOT Analysis",
    descripcionFoda: "An honest look at our strategic position",
    fortalezas: "Strengths",
    oportunidades: "Opportunities",
    debilidades: "Weaknesses",
    amenazas: "Threats",
    f1: "Personalized and close attention to each client",
    f2: "Wide catalog of exclusive formal and bridal dresses",
    f3: "Experience and knowledge of the formal fashion market",
    f4: "Strong presence on social media and brand image",
    f5: "Strategic location accessible to the target audience",
    o1: "Growth of e-commerce in women's fashion",
    o2: "High demand for dresses for weddings, quinceañeras, and graduations",
    o3: "Opportunity to expand sales to other cities via e-commerce",
    o4: "Partnerships with photographers, event planners, and venues",
    o5: "Rising trend in customization and made-to-measure design",
    d1: "Limited inventory capacity during high-demand seasons",
    d2: "Dependence on external suppliers for certain designs",
    d3: "Digital presence still in development and growth stage",
    d4: "Sales process still largely in-person",
    d5: "Limited resources for large-scale advertising campaigns",
    amenaza1: "Competition from online stores with lower prices",
    amenaza2: "Economic fluctuations affecting purchasing power",
    amenaza3: "Rapid changes in fashion trends and preferences",
    amenaza4: "Entry of new boutiques into the local market",
    amenaza5: "Increase in material costs and fabric imports",
    infoContacto: "Contact Information",
    direccion: "Address",
    direccionTexto: "Just one mile east of Tyndall PKWY / HWY 98 in Callaway, Panama City 32404.",
    telefono: "Phone",
    correo: "Email",
    enviarMensaje: "Send Message",
    enviar: "Send",
    nombre: "Name",
    mensaje: "Message",
    email: "Email",
    buscar: "Search here.....",
    enlaces: "Quick Links",
    cuentas: "Accounts",
    miCuenta: "My Account",
    pedidos: "Orders",
    compras: "Purchases",
    wishlist: "Wishlist",
    boletin: "Newsletter",
    subscribete: "Subscribe",
    tituloLogin: "Yvette's - Login",
    correoEjemplo: "email@gmail.com",
    password: "••••••••",
    regresar: "← Back",
    nombreCompleto: "Full name",
    min6: "Minimum 6 characters",
    repetirPassword: "Repeat your password",
    confirmarContrasena: "Confirm password",
    crearCuenta: "Create Account",
    verificacion: "Verification",
    mfaSimulacion: "Second factor authentication simulation",
    ingresaCodigo: "Enter the verification code",
    codigoAcceso: "Access code:",
    verificarCodigo: "Verify Code",
    reenviarCodigo: "Resend code",
    volver: "Back",
    recuperarContrasena: "Recover Password",
    enviarEnlace: "Send link",
    olvideContrasena: "Forgot your password?",
    tituloAdmin: "Yvette's - Admin Panel",
    principal: "Main",
    gestion: "Management",
    cuenta: "Account",
    admin: "ADMIN",
    itemsCarrito: "Cart items",
    bienvenidaAdmin: "Welcome to Yvette's admin panel.",
    nuevoProducto: "New product",
    usuariosRegistrados: "Registered users",
    mensajesContacto: "Contact messages",
    cargando: "Loading...",
    nombreProducto: "Product name",
    precio: "0.00",
    categoria: "Category",
    imagenUrl: "Image URL",
    imagen: "img/product/...",
    descripcion: "Description",
    cancelar: "Cancel",
    guardar: "Save",
    noProductos: "No products yet.",
    noUsuarios: "No users.",
    noMensajes: "No messages.",
    errorCampos: "Name and price are required.",
    confirmarEliminar: "Delete this product?"
}
};
let lang = localStorage.getItem("lang") || "es";
const t = translations[lang];

function changeLang(newLang){
    localStorage.setItem("lang", newLang);
    location.reload();
}

$(document).ready(function () {

    $('[data-key]').each(function(){const key = $(this).data('key');
        if(t[key]){
            $(this).text(t[key]);
        }
    });
    $('[data-key-placeholder]').each(function(){
    const key = $(this).data('key-placeholder');
    if(t[key]){
        $(this).attr('placeholder', t[key]);
    }
    });

    let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    savedProducts.forEach(function(product) {

        var newProductHTML = `
        <div class="col-lg-4 col-md-6 shop-product-col">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="${product.img}">
                    <div class="label new">${t.nuevo}</div>
                    <ul class="product__hover">
                        <li><a href="${product.img}" class="image-popup">
                            <span class="arrow_expand"></span>
                        </a></li>
                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                        <li><a href="#" class="delete-product" data-name="${product.name}"><span class="fa fa-trash"></span></a></li>
                    </ul>
                </div>
                <div class="product__item__text">
                    <h6><a href="#">${product.name}</a></h6>
                    <div class="rating">
                        <i class="fa fa-star"></i><i class="fa fa-star"></i>
                        <i class="fa fa-star"></i><i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ ${product.price}</div>
                </div>
            </div>
        </div>`;

        if ($('.property__gallery').length) {
            $('.property__gallery').prepend(newProductHTML);
        } else {
            $('.shop .col-lg-9 .row').prepend(newProductHTML);
        }

        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            if (bg) {
                $(this).css('background-image', 'url(' + bg + ')');
            }
        });

    });

    /* ============================================
       1. MODO OSCURO CON BOTÓN
    ============================================ */
    var darkModeBtn = $('<button id="dark-mode-btn"><span id="dm-icon">🌙</span> <span id="dm-label">Modo Oscuro</span></button>');
    $('body').append(darkModeBtn);

    var darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        $('body').addClass('dark-mode');
        $('#dm-icon').text('☀️');
        $('#dm-label').text(t.modoClaro);
    }

    $('#dark-mode-btn').on('click', function () {
        $('body').toggleClass('dark-mode');
        darkMode = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            $('#dm-icon').text('☀️');
            $('#dm-label').text(t.modoClaro);
        } else {
            $('#dm-icon').text('🌙');
            $('#dm-label').text(t.modoOscuro);
        }
    });


    /* ============================================
       2. BOTÓN "MOSTRAR MÁS" EN PRODUCTOS
    ============================================ */
    var descriptions = [
        "Elegante diseño con acabados premium. Talla disponible: XS-XL. Material: 95% poliéster.",
        "Corte moderno y tela de alta calidad. Perfecto para eventos especiales. Envío gratuito.",
        "Diseño exclusivo de temporada. Disponible en varios colores. Devolución garantizada.",
        "Confección artesanal con detalles únicos. Cómodo y sofisticado. Talla ajustable.",
        "Material importado de primera calidad. Ideal para bodas y graduaciones. Colores vibrantes.",
        "Estilo contemporáneo con corte preciso. Incluye garantía de 30 días. Muy popular.",
        "Acabado brillante y duradero. Perfecto para toda ocasión. Disponible en tienda física.",
        "Colección limitada de diseñador. Tejido de lujo con detalles bordados a mano.",
        "Ajuste perfecto garantizado. Materiales 100% naturales. Certificado eco-friendly.",
        "Última tendencia de la temporada. Gran variedad de tallas. Atención personalizada."
    ];

    $('.product__item__text').each(function (i) {
        var desc = descriptions[i % descriptions.length];
        var $descSpan = $('<p class="product__desc">' + desc + '</p>');
        var $btn = $('<button class="btn-mostrar-mas">'+t.verDescripcion+'</button>');
        $(this).append($descSpan).append($btn);
    });

    $(document).on('click', '.btn-mostrar-mas', function () {
        var $desc = $(this).prev('.product__desc');
        if ($desc.is(':visible')) {
            $desc.slideUp(200);
            $(this).text(t.verDescripcion);
        } else {
            $desc.slideDown(200);
            $(this).text(t.ocultar);
        }
    });


    /* ============================================
       3. BOTÓN AGREGAR PRODUCTO DINÁMICAMENTE
       (Solo en index.html y shop.html)
    ============================================ */
    if ($('.property__gallery').length || $('.shop .row .col-lg-9').length) {

        var $addSection = $('<div class="add-product-section container"><button class="btn-add-product">'+t.agregarProducto+'</button></div>');

        if ($('.property__gallery').length) {
            $('.product.spad').append($addSection);
        } else {
            $('.shop .col-lg-9').append($addSection);
        }

        var modalHTML = `
        <div id="add-product-overlay">
            <div class="add-product-modal">
                <span class="modal-close">&times;</span>
                <h4>${t.agregarProducto}</h4>
                <input type="text" id="new-product-name" placeholder="${t.nombreProducto}" />
                <span class="error-msg" id="err-name"></span>
                <input type="text" id="new-product-price" placeholder="${t.precioPlaceholder}" />
                <span class="error-msg" id="err-price"></span>
                <select id="new-product-category">
                    <option value="">${t.seleccionarCategoria}</option>
                    <option value="women">${t.boda}</option>
                    <option value="men">${t.prom}</option>
                    <option value="kid">${t.esmoquin}</option>
                    <option value="accessories">${t.accesorios}</option>
                </select>
                <span class="error-msg" id="err-cat"></span>
                <input type="text" id="new-product-img" placeholder="${t.urlImagen}" />
                <button class="btn-add-product">${t.agregarProducto}</button>
            </div>
        </div>`;
        $('body').append(modalHTML);

        $(document).on('click', '.btn-add-product', function () {
            $('#add-product-overlay').addClass('active');
        });

        $(document).on('click', '.modal-close, #add-product-overlay', function (e) {
            if ($(e.target).is('#add-product-overlay') || $(e.target).is('.modal-close')) {
                $('#add-product-overlay').removeClass('active');
            }
        });

        $(document).on('click', '.btn-submit-product', function () {
            var name = $('#new-product-name').val().trim();
            var price = $('#new-product-price').val().trim();
            var cat = $('#new-product-category').val();
            var img = $('#new-product-img').val().trim() || 'img/product/V1.webp';
            var valid = true;

            $('#err-name, #err-price, #err-cat').text('');
            $('#new-product-name, #new-product-price, #new-product-category').removeClass('field-error');

            if (!name) {
                $('#err-name').text(t.errorNombre);
                $('#new-product-name').addClass('field-error');
                valid = false;
            }
            if (!price || isNaN(parseFloat(price))) {
                $('#err-price').text(t.errorPrecio);
                $('#new-product-price').addClass('field-error');
                valid = false;
            }
            if (!cat) {
                $('#err-cat').text(t.errorCategoria);
                $('#new-product-category').addClass('field-error');
                valid = false;
            }

            if (!valid) return;

            // 
            var priceFloat = parseFloat(price).toFixed(1);

            let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

            savedProducts.push({
                name: name,
                price: priceFloat,
                cat: cat,
                img: img
            });

            localStorage.setItem("products", JSON.stringify(savedProducts));
            // 

            var newProductHTML = `
            <div class="col-lg-3 col-md-4 col-sm-6 mix ${cat} shop-product-col" style="display:none">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="${img}" style="background-image:url('${img}')">
                        <div class="label new">Nuevo</div>
                        <ul class="product__hover">
                            <li><a href="${img}" class="image-popup"><span class="arrow_expand"></span></a></li>
                            <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">${name}</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ ${priceFloat}</div>
                    </div>
                </div>
            </div>`;

            var $newProduct = $(newProductHTML);

            if ($('.property__gallery').length) {
                $('.property__gallery').append($newProduct);
            } else {
                $('.shop .col-lg-9 .row').prepend($newProduct);
            }

            // Añadir descripción al nuevo producto
            var $newDesc = $('<p class="product__desc">'+t.productoNuevoDesc+'</p>');
            var $newBtn = $('<button class="btn-mostrar-mas">'+t.verDescripcion+'</button>');
            $newProduct.find('.product__item__text').append($newDesc).append($newBtn);

            $newProduct.slideDown(400);

            $newProduct.find('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', 'url(' + bg + ')');
            });

            // Reiniciar Magnific Popup si está disponible
            try {
                $newProduct.find('.image-popup').magnificPopup({ type: 'image' });
            } catch (e) {}

            $('#add-product-overlay').removeClass('active');
            $('#new-product-name').val('');
            $('#new-product-price').val('');
            $('#new-product-category').val('');
            $('#new-product-img').val('');
        });
    }

    // BTN PARA ELIMINAR 
    $(document).on('click', '.delete-product', function (e) {

        e.preventDefault();

        var productName = $(this).data('name');

        // Confirmación opcional
        if (!confirm(t.eliminarProducto)) return;

        // Eliminar visualmente
        $(this).closest('.col-lg-4').fadeOut(300, function () {
            $(this).remove();
        });

        // Actualizar localStorage
        let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

        savedProducts = savedProducts.filter(function(product) {
            return product.name !== productName;
        });

        localStorage.setItem("products", JSON.stringify(savedProducts));

    });


    /* ============================================
       4. VALIDACIÓN JS REAL EN CONTACTO
    ============================================ */
    if ($('.contact__form form').length) {
        var $form = $('.contact__form form');
        var $nameInput = $form.find('input[placeholder="Nombre"]');
        var $emailInput = $form.find('input[placeholder="Correo"]');
        var $msgInput = $form.find('textarea');
        var $submitBtn = $form.find('button[type="submit"]');

        // Insertar mensajes de error
        $nameInput.after('<span class="error-msg" id="err-contact-name"></span>');
        $emailInput.after('<span class="error-msg" id="err-contact-email"></span>');
        $msgInput.after('<span class="error-msg" id="err-contact-msg"></span>');
        $form.append('<div class="success-msg" id="contact-success">'+t.mensajeExito+'</div>');

        $submitBtn.on('click', function (e) {
            e.preventDefault();
            var name = $nameInput.val().trim();
            var email = $emailInput.val().trim();
            var msg = $msgInput.val().trim();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var valid = true;

            // Limpiar errores
            $('.error-msg').text('');
            $nameInput.add($emailInput).add($msgInput).removeClass('field-error');
            $('#contact-success').hide();

            if (!name || name.length < 2) {
                $('#err-contact-name').text(t.errorNombreContacto);
                $nameInput.addClass('field-error');
                valid = false;
            }
            if (!email || !emailRegex.test(email)) {
                $('#err-contact-email').text(t.errorCorreo);
                $emailInput.addClass('field-error');
                valid = false;
            }
            if (!msg || msg.length < 10) {
                $('#err-contact-msg').text(t.errorMensaje);
                $msgInput.addClass('field-error');
                valid = false;
            }

            if (valid) {
                $('#contact-success').fadeIn();
                $nameInput.val('');
                $emailInput.val('');
                $msgInput.val('');
            }
        });
    }


    /* ============================================
       5. FILTRO DE CATEGORÍA EN SHOP (barra lateral)
    ============================================ */
    if ($('.shop__sidebar').length && !$('.property__gallery').length) {

        // Agregar botones de filtro rápido arriba de los productos
        var filterHTML = `
        <div class="category-filter-btns">
            <button class="cat-filter-btn active" data-cat="all">${t.todos}</button>
            <button class="cat-filter-btn" data-cat="boda">${t.boda}</button>
            <button class="cat-filter-btn" data-cat="prom">${t.prom}</button>
            <button class="cat-filter-btn" data-cat="esmoquin">${t.esmoquin}</button>
            <button class="cat-filter-btn" data-cat="accesorios">${t.accesorios}</button>
        </div>`;

        $('.shop .col-lg-9 .row').before(filterHTML);

        // Asignar categoría a cada producto en shop.html basándonos en el nombre
        $('.shop .col-lg-9 .col-lg-4').each(function () {
            var name = $(this).find('h6 a').text().toLowerCase();
            var cat = 'all';
            if (name.includes('encaje') || name.includes('manga') || name.includes('asimetric') || name.includes('raso') || name.includes('larga')) {
                cat = 'boda';
            } else if (name.includes('verde') || name.includes('plateado') || name.includes('negro') || name.includes('azul')) {
                cat = 'prom';
            } else if (name.includes('esmoquin')) {
                cat = 'esmoquin';
            } else if (name.includes('brazalete') || name.includes('accesorio')) {
                cat = 'accesorios';
            } else {
                cat = 'boda';
            }
            $(this).addClass('shop-product-col').attr('data-cat', cat);
        });

        $(document).on('click', '.cat-filter-btn', function () {
            var cat = $(this).data('cat');
            $('.cat-filter-btn').removeClass('active');
            $(this).addClass('active');

            if (cat === 'all') {
                $('.shop-product-col').removeClass('hidden');
            } else {
                $('.shop-product-col').each(function () {
                    if ($(this).data('cat') === cat) {
                        $(this).removeClass('hidden');
                    } else {
                        $(this).addClass('hidden');
                    }
                });
            }
        });

        // Hacer funcionales los links del sidebar
        $('.categories__accordion .card-body ul li a').on('click', function (e) {
            e.preventDefault();
            var text = $(this).text().toLowerCase();
            var catMap = {
                'vestidos': 'boda', 'velos': 'boda', 'lazos': 'boda', 'cola': 'boda', 'tejido': 'boda',
                'ajustado': 'prom', 'smock': 'prom', 'corto': 'prom', 'largo': 'prom',
                'coats': 'esmoquin', 'jackets': 'esmoquin', 'dresses': 'esmoquin', 'shirts': 'esmoquin', 't-shirts': 'esmoquin', 'jeans': 'esmoquin',
                'collares': 'accesorios', 'brazaletes': 'accesorios', 'aretes': 'accesorios', 'anillos': 'accesorios', 'broches': 'accesorios'
            };
            var cat = catMap[text] || 'all';
            $('.cat-filter-btn[data-cat="' + cat + '"]').trigger('click');
        });
    }


    /* ============================================
       8. FILTRO POR PRECIO - SHOP
    ============================================ */
    if ($('.sidebar__filter').length && $('#minamount').length) {

        var PRICE_MIN = 30;
        var PRICE_MAX = 100;

        // Inicializar jQuery UI slider de rango
        $('.price-range').slider({
            range: true,
            min: PRICE_MIN,
            max: PRICE_MAX,
            values: [PRICE_MIN, PRICE_MAX],
            slide: function (event, ui) {
                $('#minamount').val('$ ' + ui.values[0]);
                $('#maxamount').val('$ ' + ui.values[1]);
                $('#price-filter-result').text('');
            }
        });

        // Valores iniciales en los inputs
        $('#minamount').val('$ ' + $('.price-range').slider('values', 0));
        $('#maxamount').val('$ ' + $('.price-range').slider('values', 1));

        // Función que aplica el filtro
        function aplicarFiltroPrecio() {
            var minVal = $('.price-range').slider('values', 0);
            var maxVal = $('.price-range').slider('values', 1);
            var visibles = 0;

            $('.shop .col-lg-9 .shop-product-col').each(function () {
                var priceText = $(this).find('.product__price').text();
                // Tomar el primer número del precio (precio actual, no el tachado)
                var match = priceText.match(/\$\s*([\d.]+)/);
                if (!match) { $(this).removeClass('price-hidden'); visibles++; return; }
                var precio = parseFloat(match[1]);

                if (precio >= minVal && precio <= maxVal) {
                    $(this).removeClass('price-hidden');
                    visibles++;
                } else {
                    $(this).addClass('price-hidden');
                }
            });

            var $result = $('#price-filter-result');
            if (visibles === 0) {
                $result.text(t.sinProductos).addClass('active');
            } else {
                $result.text(visibles + ' ' + (visibles !== 1 ? t.productosEncontrados : t.productoEncontrado)).addClass('active');
            }

            // Mostrar botón limpiar
            $('#btn-limpiar-precio').show();
        }

        // Click en "Filtrar"
        $('#btn-filtrar-precio').on('click', function (e) {
            e.preventDefault();
            aplicarFiltroPrecio();
        });

        // Click en "Limpiar filtro"
        $('#btn-limpiar-precio').on('click', function (e) {
            e.preventDefault();
            $('.shop .col-lg-9 .shop-product-col').removeClass('price-hidden');
            $('.price-range').slider('values', [PRICE_MIN, PRICE_MAX]);
            $('#minamount').val('$ ' + PRICE_MIN);
            $('#maxamount').val('$ ' + PRICE_MAX);
            $('#price-filter-result').text('').removeClass('active');
            $(this).hide();
        });
    }


    /* ============================================
       6. CAMBIO DINÁMICO DE CONTENIDO
          Sección "Oferta del Día" en index.html
    ============================================ */
    var productosDestacados = [
        {
            nombre: 'Vestido de Encaje',
            badge: 'Boda',
            desc: 'Elegante vestido de encaje con detalles artesanales. Perfecto para bodas y celebraciones formales. Disponible en tallas XS–XL con envío gratuito.',
            precio: '$ 59.0',
            img: 'img/product/V1.webp',
            estrellas: '⭐⭐⭐⭐⭐',
            resenas: '128 reseñas'
        },
        {
            nombre: 'Vestido Verde',
            badge: 'Prom',
            desc: 'Diseño moderno en verde esmeralda, ideal para graduaciones. Corte ajustado con detalles brillantes que harán brillar tu noche.',
            precio: '$ 49.0',
            img: 'img/product/Prom1.webp',
            estrellas: '⭐⭐⭐⭐⭐',
            resenas: '94 reseñas'
        },
        {
            nombre: 'Esmoquin Etiqueta',
            badge: 'Esmoquin',
            desc: 'Esmoquin de alta costura para eventos de gala. Confección italiana con forro de seda y botones de nácar. Incluye corbata de moño.',
            precio: '$ 89.0',
            img: 'img/product/E1.avif',
            estrellas: '⭐⭐⭐⭐⭐',
            resenas: '57 reseñas'
        },
        {
            nombre: 'Brazalete Dorado',
            badge: 'Accesorios',
            desc: 'Brazalete artesanal chapado en oro de 18k. Diseño exclusivo que complementa cualquier vestido. Talla única ajustable.',
            precio: '$ 35.0',
            img: 'img/product/A2.jpg',
            estrellas: '⭐⭐⭐⭐⭐',
            resenas: '203 reseñas'
        },
        {
            nombre: 'Vestido de Raso',
            badge: 'Boda',
            desc: 'Opulento vestido de raso con cola de dos metros. Material importado de Italia. Precio especial esta semana con 15% de descuento.',
            precio: '$ 49.0',
            img: 'img/product/V4.webp',
            estrellas: '⭐⭐⭐⭐⭐',
            resenas: '76 reseñas'
        }
    ];

    // Botón CTA en hero → muestra/oculta la sección destacada
    $('#btn-oferta-dia').on('click', function () {
        var $sec = $('#seccion-destacado');
        if ($sec.is(':visible')) {
            $sec.slideUp(400);
            $(this).html('<span>🎁</span> ' + t.ofertaDia);
        } else {
            $sec.slideDown(500);
            $(this).html('<span>✖</span> ' + t.cerrarOferta);
            $('html, body').animate({ scrollTop: $sec.offset().top - 80 }, 500);
        }
    });

    // Cambio dinámico al presionar cada botón del destacado
    $(document).on('click', '.dest-nav-btn', function () {
        var idx = parseInt($(this).data('index'));
        var prod = productosDestacados[idx];
        if (!prod) return;

        $('.dest-nav-btn').removeClass('active');
        $(this).addClass('active');

        // Animar imagen
        $('#destacado-img').addClass('changing');
        setTimeout(function () {
            $('#destacado-img').attr('src', prod.img);
            $('#destacado-img').removeClass('changing');
        }, 300);

        // Cambiar textos con fade
        $('#destacado-nombre').fadeOut(150, function () {
            $(this).text(prod.nombre).fadeIn(200);
        });
        $('#destacado-desc').fadeOut(150, function () {
            $(this).text(prod.desc).fadeIn(200);
        });
        $('#destacado-precio').fadeOut(150, function () {
            $(this).text(prod.precio).fadeIn(200);
        });
        $('#destacado-badge').fadeOut(150, function () {
            $(this).text(prod.badge).fadeIn(200);
        });
        $('.destacado-stars').fadeOut(150, function () {
            $(this).html(prod.estrellas + ' <span>(' + prod.resenas + ')</span>').fadeIn(200);
        });
    });


    /* ============================================
       7. BOTONES INTERACTIVOS CON EVENTOS
          - Likes en productos (corazón animado)
          - Wishlist counter flotante
          - Toast notification
    ============================================ */

    // Toast helper
    function showToast(msg) {
        var $toast = $('#toast-notif');
        $toast.text(msg).addClass('show');
        setTimeout(function () { $toast.removeClass('show'); }, 2200);
    }

    // Crear elementos persistentes
    $('body').append('<div class="wishlist-badge" id="wishlist-badge">❤️ '+t.favoritos+' <span class="wl-count" id="wl-count">0</span></div>');
    $('body').append('<div class="toast-notif" id="toast-notif"></div>');

    var wishlistCount = parseInt(localStorage.getItem('wishlistCount') || '0');
    $('#wl-count').text(wishlistCount);

    // Añadir botón de like a cada producto
    $('.product__item__text').each(function () {
        var productName = $(this).find('h6 a').text().trim() || 'Producto';
        var liked = localStorage.getItem('like_' + productName) === '1';
        var count = parseInt(localStorage.getItem('likecount_' + productName) || Math.floor(Math.random() * 40 + 5));
        var heartIcon = liked ? '❤️' : '🤍';
        var $likeWrap = $(
            '<div class="btn-like-wrap">' +
            '<button class="btn-like ' + (liked ? 'liked' : '') + '" data-product="' + productName + '" data-liked="' + (liked ? '1' : '0') + '">' +
            heartIcon +
            '<span class="like-count">' + count + '</span>' +
            '</button>' +
            '<span style="font-size:11px;color:#999;font-family:Montserrat,sans-serif;">'+t.meGusta+'</span>' +
            '</div>'
        );
        $(this).append($likeWrap);
        localStorage.setItem('likecount_' + productName, count);
    });

    // Evento click en likes
    $(document).on('click', '.btn-like', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $btn = $(this);
        var productName = $btn.data('product');
        var isLiked = $btn.data('liked') === '1' || $btn.data('liked') === 1;
        var count = parseInt($btn.find('.like-count').text());

        if (!isLiked) {
            // Dar like
            $btn.html('❤️<span class="like-count">' + (count + 1) + '</span>');
            $btn.data('liked', '1').addClass('liked');
            localStorage.setItem('like_' + productName, '1');
            localStorage.setItem('likecount_' + productName, count + 1);
            wishlistCount++;
            localStorage.setItem('wishlistCount', wishlistCount);
            $('#wl-count').text(wishlistCount);
            $('#wishlist-badge').addClass('pop');
            setTimeout(function () { $('#wishlist-badge').removeClass('pop'); }, 400);
            showToast('❤️ "' + productName + '" ' + t.agregadoFav);
        } else {
            // Quitar like
            $btn.html('🤍<span class="like-count">' + (count - 1) + '</span>');
            $btn.data('liked', '0').removeClass('liked');
            localStorage.setItem('like_' + productName, '0');
            localStorage.setItem('likecount_' + productName, count - 1);
            wishlistCount = Math.max(0, wishlistCount - 1);
            localStorage.setItem('wishlistCount', wishlistCount);
            $('#wl-count').text(wishlistCount);
            showToast('🤍 "' + productName + '" ' + t.quitadoFav);
        }
    });

});
