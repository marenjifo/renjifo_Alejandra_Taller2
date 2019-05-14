function paginaCargada() {

    //Iconos Feather
    feather.replace();


    //------Para galeria de imagenes del producto-----



    var imagenes = document.querySelectorAll('.galeria__miniatura');
    var banner = document.querySelector('.galeria__fotos');
    if (imagenes != null && banner != null) {
        function recorrerImagenes(img, index) {
            function clickImagen(event) {
                var fondo = img.style.backgroundImage;
                var url = fondo.replace('url(', '').replace(')', '');
                console.log(url);
                banner.style.backgroundImage = 'url(' + url + ')';
            }



            function imgActiva(event) {
                for (let index = 0; index < imagenes.length; index++) {
                    const img = imagenes[index];
                    img.classList.remove('active');

                }
                img.classList.add('active');

            }

            if (index === 0) {
                clickImagen();
                imgActiva();
            }

            img.addEventListener('click', clickImagen);
            img.addEventListener('click', imgActiva);
        }
        imagenes.forEach(recorrerImagenes);

    }

    var botones = document.querySelectorAll('.pestanas__btn');
    var secciones = document.querySelectorAll('.pestanas__seccion');
    if (botones != null && secciones != null) {
        function recorrerBotones(btn, index) {

            function mostrarSeccion(event) {
                secciones.forEach(function (seccion) {
                    seccion.style.display = 'none';
                });
                secciones[index].style.display = 'block';
            }
           
            function btnActivo(event){
                for (let index = 0; index < botones.length; index++) {
                    const btn = botones[index];
                    btn.classList.remove('active');
                }
                btn.classList.add('active');
                
            }
            if (index === 0) {
                btnActivo();
            }
         
            btn.addEventListener('click', mostrarSeccion);
            btn.addEventListener('click',btnActivo);

        }
        if(botones!=null){
            botones.forEach(recorrerBotones);
        }
       

    }

    //------------------------Carrito de compras-------------------------------   

    var botonesPestana = document.querySelectorAll('.carac__btn');
    var botonesProducto = document.querySelectorAll('.producto__btn');
    var num_compra = document.querySelector('.nav-fija__compra');
    var res_compra = document.querySelector('.resumen__cantidad');
    var total__compra = document.querySelector('.resumen__num-total');
    var subtotal= document.querySelector('.resumen__sub');
    var listaCarrito = [];
    var comp = document.querySelector('.lista-productos');

    if (localStorage.getItem('listaCarrito') != null) {
        listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'));
    }
    

    function actualizarCarrito() {
        var suma = 0;
        var cantidad=1;

        //Numero de elementos del carrito
        num_compra.innerHTML = listaCarrito.length;

        //Numero de productos en el resumen
        if (res_compra != null) {
            res_compra.innerHTML = listaCarrito.length + " PRODUCTS";
        }
        if(comp!=null){
            comp.innerHTML="";
        }
        


        listaCarrito.forEach(function (producto, index) {

            //Crear un contenedor por cada producto en el carrito
            
            var contNuevo = document.createElement('div');
            var imgNuevo = document.createElement('div');
            var nombreNuevo = document.createElement('p');
            var btnNuevo = document.createElement('button');
            var cantNuevo = document.createElement('p');
            var btnNuevo2 = document.createElement('button');
            var precioNuevo = document.createElement('p');
            var eliminarNuevo = document.createElement('i');

            if (comp != null) {

                comp.appendChild(contNuevo);
                contNuevo.appendChild(imgNuevo);
                contNuevo.appendChild(nombreNuevo);
                contNuevo.appendChild(btnNuevo);
                contNuevo.appendChild(cantNuevo);
                contNuevo.appendChild(btnNuevo2);
                contNuevo.appendChild(precioNuevo);
                contNuevo.appendChild(eliminarNuevo);

            }
            contNuevo.className = 'lista-productos__item';
            imgNuevo.className = 'item-carro__img';
            nombreNuevo.className = 'item-carro__nombre';
            btnNuevo.className = 'item-carro__btn';
            cantNuevo.className = 'item-carro__cantidad';
            btnNuevo2.className = 'item-carro__btn2';
            precioNuevo.className = 'item-carro__precio';
            eliminarNuevo.className = 'item-carro__eliminar fas fa-trash';

            imgNuevo.style.backgroundImage = 'url(' + producto.imagen + ')';
            nombreNuevo.innerHTML = producto.nombre;
            precioNuevo.innerHTML = producto.precio;
            cantNuevo.innerHTML = ""+cantidad;
            btnNuevo.innerHTML = '-';
            btnNuevo2.innerHTML = '+';

            



            //Total de la compra
                var temp = new String();
                for (let i = 1; i < producto.precio.length; i++) {
                    temp += producto.precio[i];
                }
                suma += parseInt(temp);
                
           /*Sumar cantidad    */
           btnNuevo2.addEventListener('click', function () {
              // cantidad=1;
            console.log("click-btn");
            cantidad++;
            console.log(cantidad);
            cantNuevo.innerHTML=""+cantidad;
            listaCarrito.push(producto);
            localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito));
            num_compra.innerHTML = listaCarrito.length;
            var temp = new String();
                for (let i = 1; i < producto.precio.length; i++) {
                    temp += producto.precio[i];
                }
                suma += parseInt(temp);
                total__compra.innerHTML = "$" + suma;   
                //actualizarCarrito();
        });
    


            //Eliminar elemento del carrito
            eliminarNuevo.addEventListener('click', function () {
                
                listaCarrito.splice(index, 1);
                contNuevo.remove();
                localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito));
                num_compra.innerHTML = listaCarrito.length;
                actualizarCarrito();
            });
        });

        if (total__compra != null) {
            total__compra.innerHTML = "$" + suma;  
            subtotal.innerHTML="$"+ suma; 
        }

    }
    actualizarCarrito();

    function recorrerBtnProductos(btn) {

        function agregarCarritoProductos() {
            var padre = btn.parentNode.parentNode.parentNode;
            var nombre = padre.querySelector('.producto__nombre').innerText;
            var precio = padre.querySelector('.producto__precio').innerText;
            var src = padre.querySelector('.producto__banner').style.backgroundImage;
            var imagen = src.replace('url(', '').replace(')', '');

            console.log("se agrega");

            var producto = {
                nombre: nombre,
                precio: precio,
                imagen: imagen
            }
            listaCarrito.push(producto);
            actualizarCarrito();
            localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito));
        }

        btn.addEventListener('click', agregarCarritoProductos);

    }
    if (botonesProducto != null) {
        botonesProducto.forEach(recorrerBtnProductos);
    }

    function recorrerBtnPestana(btn) {

        function agregarCarritoPestana() {
            var nombre = document.querySelector('.producto__nombre').innerText;
            var precio = document.querySelector('.producto__precio').innerText;
            var src = document.querySelector('.galeria__fotos').style.backgroundImage;
            var imagen = src.replace('url(', '').replace(')', '');

            console.log(imagen);

            var producto = {
                nombre: nombre,
                precio: precio,
                imagen: imagen
            }
            listaCarrito.push(producto);
            actualizarCarrito();
            localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito));
        }

        btn.addEventListener('click', agregarCarritoPestana);

    }
    if (botonesPestana != null) {
        botonesPestana.forEach(recorrerBtnPestana);
    }

//----------Enviar lista de productos a base de datos---------
var form=document.querySelector('.pago__formularios');
function enviarProductos(event){
    //event.preventDefault();
 //   console.log("holiii")
    var input= document.querySelector('.formularios__productos');
    input.value=localStorage.getItem('listaCarrito');
    localStorage.removeItem('listaCarrito');
}
function enviarTotal(event){
    //event.preventDefault();
 //   console.log("holiii")
    var input= document.querySelector('.formularios__total');
    input.value=total__compra.innerHTML;
    console.log(input.value);
}
if(form!=null){
    form.addEventListener('submit',enviarProductos);
    form.addEventListener('submit',enviarTotal);
};



}
window.addEventListener('load', paginaCargada);