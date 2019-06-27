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

app.listen(8080, () => console.log('Executando...'))