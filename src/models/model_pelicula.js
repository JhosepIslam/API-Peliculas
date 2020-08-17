const  {Schema, model} = require ("mongoose");

    const Pelicula = Schema({
        titulo: {type : String , require: [true, "Titulo Obligatorio"]},
        imagen : {type : String, require :[true, "Imagen es requerida"]},
        categoria : {type : String, require :[true, "Categoria es requerida"]},
        descripcion : {type : String, require :[true, "Descripcion es requerida"]},
        url : {type : String, require :[true, "Url es requerida"]},
    })

module.exports = model("peliculas", Pelicula)