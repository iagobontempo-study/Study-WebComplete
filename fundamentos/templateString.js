const nome = "Rebeca"
const concatenacao = "Olá " + nome + " !"
console.log(concatenacao)

const template = `
    Olá
    ${nome}!`
console.log(template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`) 

const up = texto => texto.toUpperCase() // funcao
console.log(`Ei... ${up(`cuidado`)}`)