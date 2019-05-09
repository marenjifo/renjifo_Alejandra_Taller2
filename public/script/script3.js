function paginaCargada(){

//Iconos Feather
feather.replace();


//------Para galeria de imagenes del producto-----



var imagenes = document.querySelectorAll('.galeria__miniatura');
var banner = document.querySelector('.galeria__fotos'); 
if(imagenes!=null && banner!=null){   
    function recorrerImagenes(img, index){
        function clickImagen(event){
            var fondo = img.style.backgroundImage;
           var url= fondo.replace('url(','').replace(')','');
           console.log(url);
           banner.style.backgroundImage = 'url(' + url + ')';
        }

        

        function imgActiva(event){
            for (let index = 0; index < imagenes.length; index++) {
                const img = imagenes[index];
                img.classList.remove('active');
                
            }
             img.classList.add('active');
            
        }

        if(index === 0){
            clickImagen();
            imgActiva();
        }

        img.addEventListener('click', clickImagen);
        img.addEventListener('click', imgActiva);
    }
    imagenes.forEach(recorrerImagenes);

}
if(botones!=null && secciones!=null){  
    var botones = document.querySelectorAll('.pestanas__btn');
    var secciones = document.querySelectorAll('.pestanas__seccion');
    function recorrerBotones(btn, index){
        function mostrarSeccion(event){
            secciones.forEach(function (seccion){
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

        if(index === 0){
            btnActivo();
        }

        btn.addEventListener('click', mostrarSeccion);
        btn.addEventListener('click',btnActivo);
    }
    botones.forEach(recorrerBotones);

}


    var botones = document.querySelectorAll('.carac__btn');
    var listaCarrito= [];

    if(localStorage.getItem('listaCarrito')!=null){
        listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'));
    }
   var num_compra=document.querySelector('.nav-fija__compra');
   var res_compra=document.querySelector('.resumen__cantidad');
   
   var comp=document.querySelector('.lista-productos');
   var contNuevo=document.createElement('div');
   var imgNuevo=document.createElement('div');
   var nombreNuevo=document.createElement('p');
   var btnNuevo=document.createElement('button');
   var cantNuevo=document.createElement('p');
   var btnNuevo2=document.createElement('button');
   var precioNuevo=document.createElement('p');
   var eliminarNuevo=document.createElement('i');
   
   if(comp!=null){

   comp.appendChild(contNuevo);
   contNuevo.appendChild(imgNuevo);
   contNuevo.appendChild(nombreNuevo);
   contNuevo.appendChild(btnNuevo);
   contNuevo.appendChild(cantNuevo);
   contNuevo.appendChild(btnNuevo2);
   contNuevo.appendChild(precioNuevo);
   contNuevo.appendChild(eliminarNuevo);

}
   function actualizarCarrito(){
    num_compra.innerHTML = listaCarrito.length;

    if(res_compra != null){
        res_compra.innerHTML = listaCarrito.length+" PRODUCTS";
    }
    listaCarrito.forEach(function(producto){
        contNuevo.className='lista-productos__item';
        imgNuevo.className= 'item-carro__img';
        nombreNuevo.className='item-carro__nombre';
        btnNuevo.className='item-carro__btn';
        cantNuevo.className='item-carro__cantidad';
        btnNuevo2.className='item-carro__btn2';
        precioNuevo.className='item-carro__precio';
        eliminarNuevo.className='item-carro__eliminar fas fa-trash';

        imgNuevo.style.backgroundImage='url('+producto.imagen+')';
        nombreNuevo.innerHTML= producto.nombre;
        precioNuevo.innerHTML= producto.precio;
        cantNuevo.innerHTML= '1';
        btnNuevo.innerHTML= '-';
        btnNuevo2.innerHTML= '+';

        eliminarNuevo.addEventListener('click',function(){
            listaCarrito.removeItem(producto);
        });
    });

   }
   actualizarCarrito();

    function recorrerBtn(btn){

        function agregarCarrito(){
            var nombre=document.querySelector('.producto__nombre').innerText;
            var precio=document.querySelector('.producto__precio').innerText;
            var src=document.querySelector('.galeria__fotos').style.backgroundImage;
            var imagen= src.replace('url(','').replace(')','');
           
           console.log(imagen);

           var producto = {
               nombre:nombre,
               precio:precio,
               imagen:imagen
           }
           listaCarrito.push(producto);
           actualizarCarrito();
            localStorage.setItem('listaCarrito',JSON.stringify(listaCarrito));
        }
        
        btn.addEventListener('click',agregarCarrito);


    }
    if(botones!=null){
        botones.forEach(recorrerBtn);
    }
   

    



}
window.addEventListener('load',paginaCargada);