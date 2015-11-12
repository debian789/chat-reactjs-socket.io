'use strict';

let massive = require('massive');
let config = require('./config.json');


class  AccessData {
  constructor(){
    this._instance;
    this._instanceConexion;
    this.conexion();

  }

  conexion(){
    let connectionString = "postgres://"+config.postgres.user+":"+config.postgres.password+"@"+config.postgres.host+"/"+config.postgres.db;
    let massiveInstance = massive.connectSync({connectionString:connectionString});
    this._instanceConexion = massiveInstance;

  }
   consulta(){

    if(!this._instanceConexion.conversacion){
      return {respuesta:401,data:{}}
      //res.send(401);
    };

    var options = {
      //limit : 10,
      //  order : "id",
      //  offset: 20
    }

    let datosDB = [];


  return  new Promise((resolve, reject) => {
      this._instanceConexion.conversacion.find({},options,(err,doc) => {
        if (err) {
          handleError(res)
        };

        if(doc === null){
          reject(new Error('Hubo un error al obtener los datos'));
          //res.json({});
        }else{
          resolve(doc);
        }
      });

    });

  //  promesa.then(function(vals){
    //    vals.forEach(function(dat){
  //        datosDB.push(dat.body);
  //      });

  //    return {respuesta:200,data:datosDB}
  //    //res.json(datosDB);

//    })


  }
  update(){}
  crear(datos){
  	this._instanceConexion.saveDoc("conversacion",datos,function(err,ret){
  		if(err){
  			handleError(res);
  		}
  	return true;
  	})

  }


  static getInstance(){
    if(!this._instance){
      return this._instance = new AccessData();
    }

    return this._instance;
  }
}


module.exports = AccessData;
