const express = require('express')
const app = express()

app.use("/opa", (req, res) => {
    res.send('<button>Estou bem!</button>')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})
