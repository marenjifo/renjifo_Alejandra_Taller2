//Iconos Feather
feather.replace()

//------Para galeria de imagenes del producto VOY AQUI-----
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