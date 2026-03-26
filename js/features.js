/* ========================================
   FEATURES.JS - Nuevas Funcionalidades
   ======================================== */

// const translations = {
//     es: {
//         nuevo: "Nuevo",
//         modoOscuro: "Modo Oscuro",
//         modoClaro: "Modo Claro",
//         verDescripcion: "Ver descripción ▾",
//         ocultar: "Ocultar ▴",
//         agregarProducto: "Agregar Producto",
//         nombreProducto: "Nombre del producto",
//         errorNombre: "El nombre es obligatorio.",
//         eliminarProducto: "¿Eliminar este producto?",
//         sinProductos: "Sin productos en ese rango.",
//         ofertaDia: "Ver Oferta del Día"
//     },
//     en: {
//         nuevo: "New",
//         modoOscuro: "Dark Mode",
//         modoClaro: "Light Mode",
//         verDescripcion: "View description ▾",
//         ocultar: "Hide ▴",
//         agregarProducto: "Add Product",
//         nombreProducto: "Product name",
//         errorNombre: "Name is required.",
//         eliminarProducto: "Delete this product?",
//         sinProductos: "No products in this range.",
//         ofertaDia: "View Deal of the Day"
//     }
// };
// let lang = localStorage.getItem("lang") || "es";
// const t = translations[lang];

// function changeLang(newLang){
//     localStorage.setItem("lang", newLang);
//     location.reload();
// }

function cambiarIdioma(lang) {
    var interval = setInterval(function() {
        var select = document.querySelector(".goog-te-combo");
        
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event("change"));
            clearInterval(interval);
        }
    }, 500);
}

setInterval(function () {
    var frame = document.querySelector('.goog-te-banner-frame');

    if (frame) {
        frame.style.display = 'none'; // lo oculta
        frame.remove(); // lo elimina completamente
    }

    // 🔥 MUY IMPORTANTE
    document.body.style.top = '0px';
    document.documentElement.style.top = '0px'; // <-- ESTE TE FALTABA
}, 500);

$(document).ready(function () {

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
        $('#dm-label').text('Modo Claro');
    }

    $('#dark-mode-btn').on('click', function () {
        $('body').toggleClass('dark-mode');
        darkMode = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            $('#dm-icon').text('☀️');
            $('#dm-label').text('Modo Claro');
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
            $(this).text('Ver descripción ▾');
        } else {
            $desc.slideDown(200);
            $(this).text('Ocultar ▴');
        }
    });


    /* ============================================
       3. BOTÓN AGREGAR PRODUCTO DINÁMICAMENTE
       (Solo en index.html y shop.html)
    ============================================ */
    if ($('.property__gallery').length || $('.shop .row .col-lg-9').length) {

        var $addSection = $('<div class="add-product-section container"><button class="btn-add-product">+ Agregar Producto</button></div>');

        if ($('.property__gallery').length) {
            $('.product.spad').append($addSection);
        } else {
            $('.shop .col-lg-9').append($addSection);
        }

        var modalHTML = `
        <div id="add-product-overlay">
            <div class="add-product-modal">
                <span class="modal-close">&times;</span>
                <h4>Agregar Nuevo Producto</h4>
                <input type="text" id="new-product-name" placeholder="Nombre del producto" />
                <span class="error-msg" id="err-name"></span>
                <input type="text" id="new-product-price" placeholder="Precio (ej: 59.0)" />
                <span class="error-msg" id="err-price"></span>
                <select id="new-product-category">
                    <option value="">-- Selecciona categoría --</option>
                    <option value="women">Boda</option>
                    <option value="men">Prom</option>
                    <option value="kid">Esmoquin</option>
                    <option value="accessories">Accesorios</option>
                </select>
                <span class="error-msg" id="err-cat"></span>
                <input type="text" id="new-product-img" placeholder="URL de imagen (opcional)" />
                <button class="btn-submit-product">Agregar Producto</button>
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
                $('#err-name').text('El nombre es obligatorio.');
                $('#new-product-name').addClass('field-error');
                valid = false;
            }
            if (!price || isNaN(parseFloat(price))) {
                $('#err-price').text('Ingresa un precio válido.');
                $('#new-product-price').addClass('field-error');
                valid = false;
            }
            if (!cat) {
                $('#err-cat').text('Selecciona una categoría.');
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
            var $newDesc = $('<p class="product__desc">Producto recién agregado. Disponible en todas las tallas. Consulta disponibilidad en tienda.</p>');
            var $newBtn = $('<button class="btn-mostrar-mas">Ver descripción ▾</button>');
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
        $form.append('<div class="success-msg" id="contact-success">✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</div>');

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
                $('#err-contact-name').text('Por favor ingresa tu nombre completo (mínimo 2 caracteres).');
                $nameInput.addClass('field-error');
                valid = false;
            }
            if (!email || !emailRegex.test(email)) {
                $('#err-contact-email').text('Ingresa un correo electrónico válido (ej: correo@ejemplo.com).');
                $emailInput.addClass('field-error');
                valid = false;
            }
            if (!msg || msg.length < 10) {
                $('#err-contact-msg').text('El mensaje debe tener al menos 10 caracteres.');
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
            <button class="cat-filter-btn active" data-cat="all">Todos</button>
            <button class="cat-filter-btn" data-cat="boda">Boda</button>
            <button class="cat-filter-btn" data-cat="prom">Prom</button>
            <button class="cat-filter-btn" data-cat="esmoquin">Esmoquin</button>
            <button class="cat-filter-btn" data-cat="accesorios">Accesorios</button>
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
                $result.text('Sin productos en ese rango.').addClass('active');
            } else {
                $result.text(visibles + ' producto' + (visibles !== 1 ? 's' : '') + ' encontrado' + (visibles !== 1 ? 's' : '') + '.').addClass('active');
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
            $(this).html('<span>🎁</span> Ver Oferta del Día');
        } else {
            $sec.slideDown(500);
            $(this).html('<span>✖</span> Cerrar Oferta');
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
    $('body').append('<div class="wishlist-badge" id="wishlist-badge">❤️ Mis Favoritos <span class="wl-count" id="wl-count">0</span></div>');
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
            '<span style="font-size:11px;color:#999;font-family:Montserrat,sans-serif;">Me gusta</span>' +
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
            showToast('❤️ "' + productName + '" añadido a favoritos');
        } else {
            // Quitar like
            $btn.html('🤍<span class="like-count">' + (count - 1) + '</span>');
            $btn.data('liked', '0').removeClass('liked');
            localStorage.setItem('like_' + productName, '0');
            localStorage.setItem('likecount_' + productName, count - 1);
            wishlistCount = Math.max(0, wishlistCount - 1);
            localStorage.setItem('wishlistCount', wishlistCount);
            $('#wl-count').text(wishlistCount);
            showToast('🤍 "' + productName + '" quitado de favoritos');
        }
    });

});
