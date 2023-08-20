const { Router } = require("express");
const router = Router();

let marketProducts = [
  {
    id: 1,
    name: "Ferrari 4 puertas",
    color: "red",
    price: 150,
    stock: 25,
  },
  {
    id: 2,
    name: "Lamborgini diablo",
    color: "yellow",
    price: 100,
    stock: 5,
  },
  {
    id: 3,
    name: "Chevrolet Camaro",
    color: "yellow",
    price: 200,
    stock: 10,
  },
];

router.get("/", (req, res) => {
  try {
    // filtrar por query los colores
    let color = req.query.color;
    let maxPrice = req.query.price;
    let stock = req.query.stock;
    /* find: la busqueda se detiene en el primero que encuentra
        filter: filtra por el resultado buscado
        */
    if (color) {
      let productFound = marketProducts.filter((car) => car.color === color);
      res.status(200).json(productFound);
    } else if (maxPrice) {
      let productFound = marketProducts.filter((car) => car.price <= maxPrice);
      res.status(200).json(productFound);
    } else if (stock) {
      let productFound = marketProducts.filter((car) => car.stock >= stock);
      res.status(200).json(productFound);
    } else {
      res.status(200).json(marketProducts);
    }
  } catch (error) {
    res.status(404).json("No se encuntra con las caracteristicas buscadas");
  }
});

router.get("/:id", (req, res) => {
  try {
    // filtrar por id
    let id = Number(req.params.id);
    let productFound = marketProducts.find((car) => car.id === id);
    res.status(200).json(productFound);
  } catch (error) {
    res.status(404).json("No se encuntra el id buscado");
  }
});

router.post("/", (req, res) => {
  try {
    let newProduct = req.body;
    marketProducts.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router