const express = require('express');
const router = express.Router();

module.exports = function () {
    //ruta para el home
    router.get('/', (req, res) => {
        res.send("Hola mundo")
    })
    return router;
}