const bodyParser = require('body-parser')
const express = require('express')

const app = express() //express instanciado

//Middlewares 
app.use(express.static('.')) // esta servindo conteudo statico no caso a pasta "." (em que o server esta)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer') // Multer é utilizado para enviar aquivos

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // Dentro de express tem certas formas de receber dados do frontend
    // 1 - req.body
    // 2 - req.query - usaria app.get('/parOuImpar'...) - na url ficaria localhost:8080/parOuImpar?numero=1 
    // 3 - req.params - usaria app.get('/parOuImpar/:numero'...) - na url ficaria localhost:8080/parOuImpar/1 
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))