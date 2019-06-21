const fs = require('fs')

const caminho = __dirname + "/arquivo.json"

// Sincrono - (trava o event loop) // NAO RECOMENDADO
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// Assincrono 
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Para arquivos.json é mais facil utilizar direto, sem fazer parse etc...
const config = require('./arquivo.json')
console.log(config.db.host)

//Ler pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta: ')
    console.log(arquivos)
})
