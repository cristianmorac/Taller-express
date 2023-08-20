const express = require("express");
const server = express();
const port = 3000;

// ENDPOINT
server.get("/product", (req, res) => {
  /* QUERY - petición req.qery 
    Se agrega con un ?, si quiero agregar otro quey
    lo agrecon con &
    localhost:4000/api/services/create?limit=1&price=2&order=asc*/
  let query = req.query;
  let order = req.query.order;
  if (order === "asc") {
    console.log("resultados ascendentes");
  } else if (order === "desc") {
    console.log("resultados descendentes");
  } else {
    console.log("resultados desordenados");
  }
  res.send("hello GET!");
});
// req.params es un objeto
// petición de id req.params
server.get("/product/:id", (req, res) => {
  // obtener el id de la url
  let id = req.params.id;
  res.send("hello GET!");
});

// paramteros categoria y producto
server.get("/product/:producto", (req, res) => {
  // obtener el producto
  let producto = req.params.producto;
  res.send(`El prodcuto es ${producto}`); // enviar al body del cliente
});

// paramteros categoria y producto
server.get("/product/:categoria/:producto", (req, res) => {
  // obtener categoria y producto desestructurando
  let { categoria, producto } = req.params;
  res.send(`La categoria es ${categoria} y el producto es ${producto}`);
});

server.post("/product", (req, res) => {
  res.send("hello POST!");
});

server.patch("/product", (req, res) => {
  res.send("hello PATCH!");
});

server.delete("/product", (req, res) => {
  res.send("hello DELETE!");
});

server.listen(port, () => {
  console.log(`server listen on port is ${port}`);
});
