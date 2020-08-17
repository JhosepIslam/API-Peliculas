const express = require("express"),
app = express.Router();

const pelicula = require("../controller/router_pelicula")



//listar peliculas app

app.get("/listPeliculas",pelicula.listarPeliculas );

//listar peliculas web

app.get("/listarContenido", pelicula.listarContenido)


//agregar pelicula post

app.post("/addPelicula", pelicula.addPelicula)

//editar pelicula

    //get pedir datos
    app.get("/editPelicula/:_id", pelicula.editPelicula)

    //post guardar datos editados

    app.post("/edit_Pelicula/:_id", pelicula.edit_Pelicula)


   // eliminar pelicula
app.get('/eliminarPelicula/:_id', pelicula.deletPelicula);





  module.exports = app;