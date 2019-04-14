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
app.get('/',function(request,response){

    response.sendFile(__dirname+'/public/home.html')

});







// Escuchar desde puerto 3000
app.listen(3000, function(){
    console.log('Servidor en el puerto 3000')
});