/* Conexion base de datos */
const { Sequelize } = require("sequelize");
/* Variables de entorno */
require("dotenv").config();

/* Importar modelos */
const ProductModel = require('./models/Product') 
const CategoryModel = require('./models/Category') 

const USER_DB = "root";
const PASS_DB = "root";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "taller-express";
/* Opción 1*/
const sequelize = new Sequelize(
  `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`
);

/*  importar la conexión a cada modelo */
ProductModel(sequelize)
CategoryModel(sequelize)

// test de conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
testConnection();

// sincronizar los modelos
async function syncModels() {
  await sequelize.sync();
  console.log('All models synchronized successfully');
}

syncModels()

/* saber si se conectaron los modelos 
resultado: { Product: Product, Category: Category } */
console.log(sequelize.models);

/* Desestrcuturar para hacer las relaciones */
const { Product, Category } = sequelize.models;

/* Realizar las relaciones */


module.exports = {
    sequelize, ...sequelize.models
}