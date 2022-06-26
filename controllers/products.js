const Products = require('../models/products') 

//obtener productos de la base de datos
const getProducts =async(req, res) => {

    const products = await Products.find()

    res.status(200).json({ok: true, products, cont: products.length })

 }

 //dar de alta productos en la base de datos
const createProducts = (req, res, next) => {

    const newProduct = new Products(req.body)

    newProduct.save().then((result) => {

        res.status(201).json({ok: true})

    }).catch((err) => console.log(err))
        
 }

 //se exportan las constantes
module.exports = {
    
    getProducts,
    createProducts, 
}