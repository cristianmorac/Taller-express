const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes/index.routes') // todas las rutas

const server = express();

/*---- middleware --- */
// para aceptar json
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));

/* Aceptar peticiones de otros servidores */
server.use(cors());

/* Rutas */
server.use('/',routes);



module.exports = server;