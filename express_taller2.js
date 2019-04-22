//Importar librerias
var express = require('express');
var exphbs = require('express-handlebars');


//Crear app de express
var app = express();

//Establecer la carpeta public como estatica
app.use(express.static('public'));

//Registro de handlebars
app.engine('handlebars',exphbs());
//Establecer handlebars como el motor de render
app.set('view engine','handlebars');

//Arreglo de productos
var productos = [];
productos.push({
    miniatura1: 'banner-P1.jpeg',
    miniatura2: 'banda-P1.jpeg',
    miniatura3: 'frente-P1.jpeg',
    modelo: 'SERIES 4',
    nombre: 'Gold Aluminum Case with Pink Sand Sport Band',
    precio: '399',
    codigoColor: 'FCCAE9',
    color: 'Coral',
    banda: 'Sport',
    descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quo in! Inventore cum fugit obcaecati repellat. Fuga optio enim repudiandae necessitatibus consectetur numquam reiciendis qui ducimus, minus doloribus! Illo, perferendis.',
    feature1: 'F1',feature2: 'F2',feature3: 'F3',feature4: 'F4',feature5: 'F5',
    content1: 'C1',content2: 'C2',content3: 'C3',content4: 'C4',content5: 'C5',
    detalles: 'detalles-P1.png',
});


//Ruta inicial
app.get('/',function(req,res){

    res.sendFile(__dirname+'/public/home.html')

});

//Ruta a la tienda
app.get('/tienda', function(req, res) {
    var contexto = {
       
    };
    res.render('tienda',contexto);
});

//Ruta a la tienda
app.get('/prueba2', function(req, res) {
    var contexto = {
       
    };
    res.render('pestana',contexto);
});

//ruta dinamica
app.get('/tienda/:pestana', function(req, res) {
    var contexto= null;
   
       productos.forEach(function(producto){
           if(producto.precio == req.params.pestana){
               contexto=producto;
           }
       });
   
       if(contexto == null){
           res.send('Page not found: '+req.params.pestana);
       }else{
           res.render('pestana',contexto);
       }
   
       console.log(req.params.pestana);
       
   });

   



// Escuchar desde puerto 3000
app.listen(3000, function(){
    console.log('Servidor en el puerto 3000')
});