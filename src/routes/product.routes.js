const { Router } = require("express");
const router = Router();
const { Product, Category } = require("../db");

// filtrado por query
router.get("/", async (req, res) => {
  try {
    // Obtener todos los productos de color rojo findAll({where: {color:'red'}})
    let allProducts = await Product.findAll({include:{model:Category}});
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json("No se encuentran los productos");
  }
});

router.post("/", async (req, res) => {
  /* Para visualizar los metodos que se tienen se utiliza
  Product.prototype */
  try {
    let {newProduct, category} = req.body;

    // Crear prodcutos si no existen
    let [newCategory] = await Category.findOrCreate({
      where: { title: category },
    });

    /* let newCategory = await Category.findOne({
      where: { title: category },
    }); */
  
    // Crear el producto
    const product = await Product.create(newProduct);
    // agregar la categoria
    await newCategory.addProduct(product);

    res.status(200).json("Producto creado correctamente");
  } catch (error) {
    res.status(400).json("Error al crear el producto");
  }
});

module.exports = router;
