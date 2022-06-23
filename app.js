//libreria para mongoDB
const mongoose = require('mongoose')

//declaramos dependencias
const express = require('express') 

//modulo PATH
const path = require('path')
const { nextTick } = require('process')
const { isRegExp } = require('util/types')
const { receiveMessageOnPort } = require('worker_threads')
const { time, timeStamp } = require('console')

require('dotenv').config()

// la constante app se iguala a express con sus dep
const app = express()



//coneccion BD
mongoose
.connect(`mongodb+srv://gonza:${process.env.MONGO_DB_PASS}@cluster0.f8dpn.mongodb.net/appABM?retryWrites=true&w=majority`)
.then((result) => console.log('coneccion exitosa a la BD'))
.catch((console.error()))

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
},
{timestamps: true }
)

const Product = mongoose.model('Product', productSchema, 'Products') 

app.use(express.json())

app.post('/api/v1/products', (req, res, next) => {

    const newProduct = new Product(req.body)

    newProduct.save().then((result) => {

        res.status(201).json({ok: true})

    }).catch((err) => console.log(err))
        
 })

//
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT


//referenciamos puerto a variable de entorno
app.listen(PORT, () => {
        
    console.log(`escuchando puerto: ${PORT}`)

    })