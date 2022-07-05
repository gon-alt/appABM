const router = require('express').Router()

const productsController = require('../controllers/products')
const Product = require('../models/products')


//dar de alta productos en la base de datos
router.post('/', productsController.createProducts)


//obtener productos de la base de datos
 router.get('/', productsController.getProducts)

 //eliminar productos de la base de datos
 router.delete("/:id", productsController.deleteProducts)

 //modificar productos de la base de datos
 router.patch("/:id", productsController.patchProducts)


 module.exports = router