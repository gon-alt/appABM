//libreria para mongoDB
const mongoose = require('mongoose')

//coneccion BD
const dbConnect = (app) => {

mongoose

    .connect(
        `mongodb+srv://gonza:${process.env.MONGO_DB_PASS}@cluster0.f8dpn.mongodb.net/appABM?retryWrites=true&w=majority`)

    .then((result) => {
        const PORT = process.env.PORT
        app.listen(PORT, ()=>{
            console.log(`servidor esuchando en el puerto ${PORT}`)
        })
        console.log('coneccion exitosa con la BBDD')    
    })   

    .catch((console.error()))
}



 module.exports = dbConnect