//Importar librerias
var express = require('express');
var exphbs = require('express-handlebars');

//Mongo: crear variables (Paso 1)
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'tienda';
const client = new MongoClient(url);

//Mongo: conectar (Paso 2)
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const clientdb = client.db(dbName);
    const productos = clientdb.collection('productos');
    
    productos.find({}, { sort: ['precio'] }).toArray(function(err,docs){
        assert.equal(null,err);
        console.log('Encontrados los documentos');
        docs.forEach(function(prod){
            console.log(prod.precio);

        });
        

    });
  
    client.close();
  });

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
    numero: 'P1',
    miniatura1: 'banner-P1.jpeg',
    miniatura2: 'banda-P1.jpeg',
    miniatura3: 'frente-P1.jpeg',
    modelo: 'SERIES 4',
    nombre: 'Pink Aluminum Case with Sport Band',
    precio: '399',
    codigoColor: 'FCCAE9',
    color: 'Pink',
    banda: 'Sport',
    descripcion: 'Compared to the Apple Watch 3, the new Apple Watch 4 offers a faster processor (S4 64-bit dual-core processor), larger screen and louder speaker to go along with LTE cellular support, walkie-talkie mode, more extensive and context-based notifications, and more.',
    feature1: 'Built-in GPS',feature2: 'W3 Apple wireless chip',feature3: 'Barometric altimeter',feature4: 'Capacity 16GB',feature5: 'Optical heart sensor',
    content1: 'Gold Aluminum Case',content2: 'S/M Sport Band',content3: '1m Magnetic Charging Cable',content4: '5W USB Power Adapter',content5: 'Ambient light sensor',
    detalles: 'detalles-P1.png',
});

productos.push({
    numero: 'P2',
    miniatura1: 'banner-P1.jpeg',
    miniatura2: 'banda-P1.jpeg',
    miniatura3: 'frente-P1.jpeg',
    modelo: 'NIKE +',
    nombre: 'Silver Aluminum Case with Sport Band',
    precio: '599',
    codigoColor: 'E8E8E8',
    color: 'Silver',
    banda: 'Sport',
    descripcion: 'Compared to the Apple Watch 3, the new Apple Watch 4 offers a faster processor (S4 64-bit dual-core processor), larger screen and louder speaker to go along with LTE cellular support, walkie-talkie mode, more extensive and context-based notifications, and more.',
    feature1: 'Built-in GPS',feature2: 'W3 Apple wireless chip',feature3: 'Barometric altimeter',feature4: 'Capacity 16GB',feature5: 'Optical heart sensor',
    content1: 'Gold Aluminum Case',content2: 'S/M Sport Band',content3: '1m Magnetic Charging Cable',content4: '5W USB Power Adapter',content5: 'Ambient light sensor',
    detalles: 'detalles-P1.png',
});


//Ruta inicial
app.get('/',function(req,res){

    res.sendFile(__dirname+'/public/home.html');

});

//Ruta a la tienda
app.get('/tienda', function(req, res) {
    var contexto = {
        listaProductos: productos
    };
    res.render('tienda',contexto);
});


//ruta dinamica
app.get('/tienda/:pestana', function(req, res) {
    var contexto= null;
   
       productos.forEach(function(producto){
           if(producto.numero == req.params.pestana){
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