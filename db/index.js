//libreria para mongoDB
const mongoose = require('mongoose')

//coneccion BD
const dbConnect = (app) => {

mongoose

    .connect(
        `mongodb://gonza:${process.env.MONGO_DB_PASS}@mongus:27017/appABM?authSource=admin`)

    .then((result) => {
        const PORT = process.env.PORT
        app.listen(PORT, ()=>{
            console.log(`servidor esuchando en puerto ${PORT}`)
        })
        console.log('coneccion exitosa con Mongo DB')    
    })   

    .catch((console.error()))
}



 module.exports = dbConnect
