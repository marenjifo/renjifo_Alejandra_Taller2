function paginaCargada(){


//Iconos Feather
feather.replace()

//------Para galeria de imagenes del producto-----
var imagenes = document.querySelectorAll('.galeria__miniatura');
var banner = document.querySelector('.galeria__fotos');    
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
window.addEventListener('load',paginaCargada);