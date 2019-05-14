//Importar librerias
var express = require('express');
var exphbs = require('express-handlebars');

//Mongo: crear variables (Paso 1)
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'tienda';
const client = new MongoClient(url, { useNewUrlParser: true });
var clientdb=null;

//Mongo: conectar (Paso 2)
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    clientdb = client.db(dbName);
   // client.close();
  });

//Crear app de express
var app = express();

//Establecer la carpeta public como estatica
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//Registro de handlebars
app.engine('handlebars',exphbs());
//Establecer handlebars como el motor de render
app.set('view engine','handlebars');

//Arreglo de productos
var productos = [];
productos.push({
        numero: "P1",
        imagenes: ["banner-P1.jpeg","banda-P1.jpg","frente-P1.jpeg","detalles-P1.png"],
        modelo: "SERIES 4",
        nombre: "Pink Aluminum Case with Sport Band",
        precio: 399,
        codigoColor: "FCCAE9",
        color: "Pink",
        banda: "Sport",
        descripcion: "Compared to the Apple Watch 3, the new Apple Watch 4 offers a faster processor (S4 64-bit dual-core processor), larger screen and louder speaker to go along with LTE cellular support, walkie-talkie mode, more extensive and context-based notifications, and more.",
        caracteristicas: ["Built-in GPS","W3 Apple wireless chip","Barometric altimeter","Capacity 16GB","Optical heart sensor"],
        contenido: ["Pink Aluminum Case","S/M Sport Band","1m Magnetic Charging Cable","5W USB Power Adapter","Ambient light sensor"]
});



//Ruta inicial
app.get('/',function(req,res){

    res.sendFile(__dirname+'/public/home.html');

});

//Ruta a la tienda
app.get('/tienda/', function(req, res) {

    //Mongo: buscar documentos (Paso 3)
    var productos = clientdb.collection('productos');
    productos.find()
	        .toArray(function(err, docs) {
        var contexto = {
            listaProductos: docs,
           
        };
        res.render('tienda',contexto);
    });

});

//Ruta filtros
app.get('/tienda/:filtro', function(req, res) {


    var productos = clientdb.collection('productos');
    productos.find({ $or: [ { banda: req.params.filtro }, { color: req.params.filtro } , { modelo: req.params.filtro }]})
	        .toArray(function(err, docs) {
        var contexto = {
            listaProductos: docs,
           
        };
        res.render('tienda',contexto);
    });

    
   
});

//Ruta al carrito
app.get('/carrito', function(req, res) {
    var contexto = {
       
    };
    res.render('carrito',contexto);
});



//ruta dinamica
app.get('/tienda/prod/:pestana', function(req, res) {

    
    var contexto= null;

    var productos = clientdb.collection('productos');
    productos.find({numero : req.params.pestana}).toArray(function(err,docs){
        assert.equal(null,err);
      
        docs.forEach(function(prod){
            
                contexto=prod;
            
        });

       
        if(contexto == null){
            res.send('Page not found: '+req.params.pestana);
        }else{
            res.render('pestana',contexto);
        }
    });
   
      
       
   });
//Ruta al carrito
app.get('/pago', function(req, res) {
   
    var contexto = {
       
    };
    res.render('pago',contexto);
});

//Ruta al checkout
app.post('/checkout', function(req, res) {
    
    var pedido = {
       correo:req.body.correo,
       telefono:req.body.telefono,
       nombre:req.body.nombre,
       apellido:req.body.apellido,
       direccion:req.body.direccion,
       pais:req.body.pais,
       estado:req.body.estado,
       ciudad:req.body.ciudad,
       zip:req.body.zip,
       tarjeta:req.body.tarjeta,
       fecha:req.body.fecha,
       mes:req.body.mes,
       cvv:req.body.cvv,
       nombre__tarjeta:req.body.nombre__tarjeta,
       productos:JSON.parse(req.body.productos),
       total:req.body.total
       
    };

    var collection=clientdb.collection('pedidos');
    collection.insertOne(pedido,function(err){
        assert.equal(err,null);
        console.log("Pedido Guardado");

    });
    res.redirect('/tienda');
});


// Escuchar desde puerto 3000
app.listen(3000, function(){
    console.log('Servidor en el puerto 3000')
});