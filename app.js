//declaramos dependencias
require('dotenv').config()
const express = require('express') 
const dbConnect = require('./db')
const cors = require('cors')
const path = require('path')

const productRouter = require('./routes/products')

// la constante app se iguala a express con sus dep
const app = express()

dbConnect(app)

app.use(cors({origin: true}))
 
app.use(express.json())

app.use('/api/v1/products',productRouter)
 
app.use(express.static(path.join(__dirname, 'public')))