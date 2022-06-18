//declaramos dependencias
const express = require('express') 
// la constante app se iguala a express con sus dep
const app = express()
//obtenermos de app req y res
app.get('/', (req, res) => {

    console.log("peticion recibida")
    res.send('#holaMundo!')
})
//configuramos puerto y funcion de respuesta
app.listen(4000, function () {
        console.log("servidor escuchando puerto 4000")

    })