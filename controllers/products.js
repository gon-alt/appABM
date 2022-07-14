const Products = require('../models/products') 

//obtener productos de la base de datos
const getProducts =async(req, res) => {

    const products = await Products.find()

    res.status(200).json(products)

 }
 //eliminar producto
 const deleteProducts = async(req, res) => {
    try {
        await Products.deleteOne({ _id: req.params.id })
        res.status(204).send()
      } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
      }
 }
 

 //dar de alta productos en la base de datos
const createProducts = (req, res, next) => {

    const newProduct = new Products(req.body)

    newProduct.save().then((result) => {

        res.status(201).json({ok: true})

    }).catch((err) => console.log(err))
        
 }

 const putProducts = async (req, res)=>{
  try {
    await Products.findByIdAndUpdate({ _id: req.params.id },req.body)
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
  }
 }

 //se exportan las constantes
module.exports = {
    
    getProducts,
    createProducts, 
    deleteProducts,
    putProducts,
}