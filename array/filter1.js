const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 14.99, fragil: true},
    {nome: "Copo de Plastico", preco: 18.99 , fragil: true}
]

// apenas para retornar um array zerado
console.log(produtos.filter(function(p){
    return false
}))


const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil === true

console.log(produtos.filter(caro).filter(fragil))