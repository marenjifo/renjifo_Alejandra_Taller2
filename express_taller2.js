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

//Pestana
app.get('/pestana', function(req, res) {
    var contexto = {
       
    };
    res.render('pestana',contexto);
});






// Escuchar desde puerto 3000
app.listen(3000, function(){
    console.log('Servidor en el puerto 3000')
});