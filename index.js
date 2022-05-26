const express = require('express');
const routes = require('./routes');


//creamos una aplicacion de express
const app = express();

//llamamos a las rutas creadas en otra carpeta
app.use('/', routes());



//Asignamos el puerto que vamos a usar
const port = 5000;
app.listen(port);
console.log("Estas usando el puerto " + port);