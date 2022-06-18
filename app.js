

//declaramos dependencias
const express = require('express') 

require('dotenv').config()

// la constante app se iguala a express con sus dep
const app = express()
//obtenermos de app req y res
app.get('/', (req, res) => {

    console.log("peticion recibida")
    res.send('#holaMundo!')
})

const PORT = process.env.PORT

//referenciamos puerto a variable de entorno
app.listen(PORT, () => {
        console.log({PORT})

    })