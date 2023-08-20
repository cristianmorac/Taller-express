const { Router } = require("express");
const router = Router();
const productRoutes = require('./product.routes')
const categoryRoutes = require('./category.routes')

router.use('/product', productRoutes);
router.use('/category', categoryRoutes)



module.exports = router;
