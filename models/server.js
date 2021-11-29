const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Middlewares (se ejecutan cuando levante el servidro)
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    //CORS (seguridad de la app)
    this.app.use(cors());

    //lectura del parseo a JSON del body cuando usa POST, PUT, DELETE
    this.app.use(express.json());

    //Public directory (declare use mean is a middleware)
    this.app.use(express.static("public"));
  }
  //
  routes() {
    //Llamo con un middleware el archivo routes para uusario, declaro la ruta '/api/usuarios/
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
