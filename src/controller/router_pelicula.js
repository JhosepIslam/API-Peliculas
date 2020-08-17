const express = require("express");

//conexion BD

const pool = require("../settings/db.js");
//Modelo BD
const Pelicula  = require("../models/model_pelicula");
//app
let listarPeliculas = async (req, res) =>{
    const model = await Pelicula.find()
    Pelicula.countDocuments({}, (err, total ) =>{
      if (err) {
        return res.json({
          status:400,
          mensaje : "Error al leer el archivo",
          err

        })
      }
      res.json( model)      
      console.log(model);
    })
  };

//web
let listarContenido = async(req, res) =>{
  const pelicula = await Pelicula.find();
Pelicula.countDocuments({}, (err, total) =>{
  if (err) {
    return res.json({
      status:400,
      mensaje : "Error al leer el archivo",
      err

    })
  }

  res.render("index", {pelicula})
})

}

let addPelicula = async (req, res) =>{
  const   {titulo, imagen, categoria, descripcion, url} = req.body;
  const pelicula = await new Pelicula({
    titulo,
    imagen,
    categoria,
    descripcion,
    url
  });
  pelicula.save((err, data) =>{
    if(err){
      return res.json({
        status:200,
        mensaje : "error al agregar pelicula",
        err
      })
    }


  })
  res.redirect("/api/listarContenido")

}


//editar pelicula get
let editPelicula =  async(req, res ) =>{
  let id = req.params._id;
  const pelicula = await Pelicula.findById(id);
  res.render("editarpelicula", {pelicula})
}
//editar pelicula post
let edit_Pelicula = async(req, res) =>{
  let id = req.params;

  const   {titulo, imagen, categoria, descripcion, url} = req.body; 
  const edit_pelicula = {
    titulo,
     imagen, 
     categoria, 
     descripcion,
      url
  }
 await Pelicula.update({_id : id}, edit_pelicula);
  res.redirect("/api/listarContenido"); 
}

// eliminar pelicula get

let deletPelicula = async (req, res) => {
  let id = req.params;
  await Pelicula.findOneAndDelete({_id: id});
  res.redirect('/api/listarContenido');    
}


  module.exports = {listarPeliculas, 
    listarContenido , 
    addPelicula,
    editPelicula,
    edit_Pelicula,
    deletPelicula
    
  };