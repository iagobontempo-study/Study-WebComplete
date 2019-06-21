const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ACB",
        numero: 1000
    }
}

const nome = pessoa.nome
const idade = pessoa.idade
const endereco = pessoa.endereco.logradouro
console.log(nome, idade, endereco)

//SEGUNDO MODO DE SE FAZER \/

//const {nome, idade, endereco} = pessoa
//console.log(nome, idade, endereco)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)