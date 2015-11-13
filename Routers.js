'use strict';

let express = require('express');
let app = express();
let router = express.Router();
let AccessData = require('./AccessData').getInstance();


module.exports = {
  update: router.post('/',(req,res) => {}),
  create: app.post('/',(req,res) => {
    //debugger;
    console.log("llego aqui 1!!");

    let registro = {
      user:req.body.mensaje,
      mensaje:req.body.user,
      date:req.body.date
    }
  //  debugger;
    AccessData.crear(registro);

    res.sendStatus(200)
  }),
  listar: router.get('/',(req,res) => {
    console.log("llego aqui 2!!");
    let datosDB=[];
  //  debugger;

  		AccessData.consulta().then(function(vals){
  		    vals.forEach(function(dat){
  		        datosDB.push(dat.body);
  		    });

  		    res.json(datosDB);

  		})
  })
}
