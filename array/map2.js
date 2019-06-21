const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os precos 

const paraObjeto = json => JSON.parse(json) // "json" function return "JSON parse do json"
const apenasPrecos = produto => produto.preco // "produto" function return "o atributo preco"

const resultado = carrinho.map(paraObjeto).map(apenasPrecos)
console.log(resultado)