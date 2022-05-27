exports.proyectosHome = (req, res) => {
    res.render('index',{
        nombrePagina:"Proyectos"
    })
}

exports.formularioProyecto= (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina:'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = (req, res) => {
    //Enviar por consola lo que escribe el usuario
    
    //Validamos que el input no este vacio
    const {nombre} = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'texto': 'Agrega un nombre al Proyecto'})
    }

    //SI HAY ERRORES    
    if(errores.length > 0){
        res.render('nuevoProyecto',{
            nombrePagina: 'Nuevo proyecto',
            errores
        })
    }else {
        //insertamos en la base de datos cuando no haya errores
    }

}