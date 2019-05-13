function paginaCargada(){


//Iconos Feather
feather.replace()

//------------Para scroll suave-------------
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".nav-fija__enlace--icono").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });




//-----------Para efecto de Fade In-----------------------
const sr = ScrollReveal();
sr.reveal('h1',{
    
    duration:2000,
    origin: 'top',
    distance: '8px',
    reset:true


});

//-----------Para la barra de navegacion-----------------


$(document).ready(function() {
    // Cuando la ventana hace scroll
    $(window).scroll(function() {
      // si el scroll pasa de los 80px, se añade la clase solid-bar
      if($(this).scrollTop() > 80) { 
          $('.nav-fija').addClass('solid-bar');
          $('.nav-fija__icono').addClass('solid-bar');
          $('.nav-fija__item').addClass('solid-bar');
          $('.nav-fija__enlace').addClass('solid-bar');
      } else {
          $('.nav-fija').removeClass('solid-bar');
          $('.nav-fija__icono').removeClass('solid-bar');
          $('.nav-fija__item').removeClass('solid-bar');
          $('.nav-fija__enlace').removeClass('solid-bar');
      }
    });
});
//-----------Para la barra de navegacion responsive-----------------
var menu=document.querySelector('.menu');
function menuHamb() {
    var x = document.querySelector("#miNav");
    if (x.className === "nav-fija") {
      x.className += " responsive";
    } else {
      x.className = "nav-fija";
    }
  }
menu.addEventListener('click',menuHamb);


//------------Para la galeria de imagenes---------------
var numImagen = 1;
var anterior=document.querySelector(".galeria__anterior");
var siguiente=document.querySelector(".galeria__siguiente");
var p1=document.querySelector(".p1");
var p2=document.querySelector(".p2");
var p3=document.querySelector(".p3");
mostrarImagenes(numImagen);

function otraImagen(n) {
    mostrarImagenes(numImagen += n);
}

/*anterior.addEventListener('click',otraImagen(-1));
siguiente.addEventListener('click',otraImagen(1));*/

function imagenActual(n) {
    mostrarImagenes(numImagen = n);
}
/*p1.addEventListener('click',imagenActual(1));
p2.addEventListener('click',imagenActual(2));
p3.addEventListener('click',imagenActual(3));*/

function mostrarImagenes(n) {
  var i;
  var slides = document.querySelectorAll(".galeria__imagen");
  var puntos = document.querySelectorAll(".galeria__punto");

  if (n > slides.length) {numImagen = 1}    
  if (n < 1) {numImagen = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < puntos.length; i++) {
    puntos[i].className = puntos[i].className.replace(" active", "");
  }
  slides[numImagen-1].style.display = "block";  
  puntos[numImagen-1].className += " active";

  
}

//------------Para la interaccion---------------
var blanco=document.querySelector("#blanco");
var gris=document.querySelector("#gris");
var negro=document.querySelector("#negro");
var img_banda=document.querySelector(".interaccion__img-bandas");
var img_apps=document.querySelector(".interaccion__img-apps");
var spotify=document.querySelector("#spotify");
var twitter=document.querySelector("#twitter");
var telegram=document.querySelector("#telegram");
var botones=document.querySelectorAll('.interaccion__btn');
var botones2=document.querySelectorAll('.interaccion__btn2');

function colorBlanco(event){
    img_banda.src="imagenes/blanco.png";
    
}

blanco.addEventListener('click',colorBlanco);

function colorGris(event){
    img_banda.src="imagenes/gris.png";
  
}

gris.addEventListener('click',colorGris);

function colorNegro(event){
    img_banda.src="imagenes/negro.png";
}

negro.addEventListener('click',colorNegro);

function appSpotify(event){
    img_apps.src="imagenes/spotify.png";
}

spotify.addEventListener('click',appSpotify);

function appTwitter(event){
    img_apps.src="imagenes/twitter.png";
}

twitter.addEventListener('click',appTwitter);

function appTelegram(event){
    img_apps.src="imagenes/telegram.png";
}

telegram.addEventListener('click',appTelegram);

function recorrerBtn(boton){
    function botonActivo(event){
        for (let index = 0; index < botones.length; index++) {
            const boton = botones[index];
            boton.classList.remove('active');
            
        }
         boton.classList.add('active');
        console.log("hola");
    }
    boton.addEventListener('click',botonActivo);
}

function recorrerBtn2(boton){
    function botonActivo(event){
        for (let index = 0; index < botones2.length; index++) {
            const boton = botones2[index];
            boton.classList.remove('active');
            
        }
         boton.classList.add('active');
        console.log("hola");
    }
    boton.addEventListener('click',botonActivo);
}

botones.forEach(recorrerBtn);
botones2.forEach(recorrerBtn2);




}

window.addEventListener('load',paginaCargada);