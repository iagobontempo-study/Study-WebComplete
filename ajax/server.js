const bodyParser = require('body-parser')
const express = require('express')

const app = express() //express instanciado

//Middlewares 
app.use(express.static('.')) // esta servindo conteudo statico no caso a pasta "." (em que o server esta)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(8080, () => console.log('Executando...'))