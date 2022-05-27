const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//crear conexion a base de datos 
const db =  require('./config/db')

db.authenticate()
    .then(() => clg("Conectado al servidor.."))
    .catch(error => console.log(error) )   

//creamos una aplicacion de express
const app = express();

// archivos estaticos
app.use(express.static('public'))

//habilitamos pug
app.set('view engine', 'pug');

//añadimos la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));


//habilitar body-parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

//llamamos a las rutas creadas en otra carpeta
app.use('/', routes());


//Asignamos el puerto que vamos a usar
const port = 5000;
app.listen(port);
console.log("Estas usando el puerto " + port);