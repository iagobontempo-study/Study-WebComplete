//Object.preventExtensions - nao é possivel adicionar + atributos ou funcoes
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 99,
    tag: "promo"
})
console.log("Extensivel: "+ Object.isExtensible(produto))

produto.nome = "Borracha"
produto.local = "Papelaria"
delete produto.tag

console.log(produto)

//Object.seal - nao é possivel deletar nem adicionar + atributos ou funcoes
const pessoa = { nome: "Juliana", idade: 35}
Object.seal(pessoa)

console.log("Selado:", Object.isSealed(pessoa))
pessoa.nome = "Iago"
pessoa.sobrenome = "Bontempo"
delete pessoa.idade

console.log(pessoa)

//Object.freeze - nao pode adicionar, deletar. os valores nao podem ser mudados
