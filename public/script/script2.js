function paginaCargada(){


    //Iconos Feather
    feather.replace();

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

  if(menu!=null){
    menu.addEventListener('click',menuHamb);
  }



    //------------Para scroll suave-------------

var flecha= document.querySelector('.nav-fija__enlace--icono');
if(flecha!=null){


$(document).ready(function(){
    // Add smooth scrolling to all links
    $(flecha).on('click', function(event) {
  
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

}


//----------------------Para filtros del modelo--------------------

var filtrosM = document.querySelectorAll('.filtros__filtrar--modelo');

    function recorrerFiltrosM(fil, index){

        function filActivo(event){
             fil.classList.add('active');
        }

       

        fil.addEventListener('click', filActivo);
    }
    filtrosM.forEach(recorrerFiltrosM);

//----------------------Para filtros de la banda--------------------
var filtrosB = document.querySelectorAll('.filtros__filtrar--banda');

    function recorrerFiltrosB(fil, index){

        function filActivo(event){
             fil.classList.add('active');
        }

       

        fil.addEventListener('click', filActivo);
    }
    filtrosB.forEach(recorrerFiltrosB);

//----------------------Para filtros del color--------------------
var filtrosC = document.querySelectorAll('.filtros__color');

    function recorrerFiltrosC(fil, index){

        function filActivo(event){
             fil.classList.add('active');
        }

       

        fil.addEventListener('click', filActivo);
    }
    filtrosC.forEach(recorrerFiltrosC);

    //--------------------Filtros--------------------

//BANDA
var sport= document.querySelector('.sport');
var leather= document.querySelector('.leather');
var steel= document.querySelector('.steel');

function filtrarSport(){
    location.href= '/tienda/Sport/#sec-tienda';
}
sport.addEventListener('click',filtrarSport);

function filtrarLeather(){
  location.href= '/tienda/Leather/#sec-tienda';
}
leather.addEventListener('click',filtrarLeather);

function filtrarSteel(){
  location.href= '/tienda/Steel/#sec-tienda';
}
steel.addEventListener('click',filtrarSteel);

//---------Numero carrito-------------

var listaCarrito= [];

    if(localStorage.getItem('listaCarrito')!=null){
        listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'));
    }
   var num_compra=document.querySelector('.nav-fija__compra');
   num_compra.innerHTML = listaCarrito.length;

//-----------Responsive de los filtros-------------
var filtros=document.querySelector('.tienda__filtros');
var res__filtros=document.querySelector('.tienda__responsive');
if(filtros!=null && res__filtros!=null){
  function abrirFiltros(){
   
    if(filtros.style.display=='block'){
      filtros.style.display= 'none';
    }else{
      filtros.style.display= 'block';
    }
    
  }

  res__filtros.addEventListener('click',abrirFiltros);

}

}



window.addEventListener('load',paginaCargada);
