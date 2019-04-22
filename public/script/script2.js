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


}

window.addEventListener('load',paginaCargada);
