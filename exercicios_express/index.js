const express = require('express')
const app = express()

app.get("/opa", (req, res) => {
   res.json([
       {id: 1, name: 'ana', position: 1},
       {id: 3, name: 'bia', position: 5},
       {id: 7, name: 'carlos', position: 3}
    ])
   
    // Retornar json
    // res.json({
    //     name: "ípad 32gb",
    //     price: 1599.99,
    //     discount: 0.12
    // })

    // Retornar html
    // res.send('<button>Estou bem!</button>')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})
