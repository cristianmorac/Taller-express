const { Router } = require("express");
const router = Router();
const { Category, Product } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allCategory = await Category.findAll({include:{model:Product}});
    res.status(200).json(allCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let newCategory = req.body
    await Category.create(newCategory)
    res.status(200).json('Categoria creada correctamente');
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la categoria' });
  }
});

module.exports = router;
