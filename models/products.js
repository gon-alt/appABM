//declaramos dependecia de mongoose
//instancia de base de datos
const mongoose = require('mongoose')

//esquema de productos
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: Number,
},
{timestamps: true }
)

const Product = mongoose.model('Product', productSchema) 

module.exports = Product