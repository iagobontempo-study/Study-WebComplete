// Pessoa -> 123(endereco) -> {...}
const pessoa = { nome: "Joao"}
pessoa.nome = "Pedro"
console.log(pessoa)

// Pessoa -> 456 -> {...}
//pessoa = {nome: "Ana"}

Object.freeze(pessoa)

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: "JOAO" })
console.log(pessoaConstante)