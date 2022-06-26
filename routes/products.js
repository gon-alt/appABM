const router = require('express').Router()

const productsController = require('../controllers/products')


//dar de alta productos en la base de datos
router.post('/', productsController.createProducts)


//obtener productos de la base de datos
 router.get('/', productsController.getProducts)

 module.exports = router