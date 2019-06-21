//Colecao dinamica de pares chave / valor
const produto = new Object()
produto.nome = "Cadeira"                // dinamica, criacao de atributos diretamente no objeto
produto["marcaDoProduto"] = "Generica" 
produto.preco = 202

console.log(produto)
delete(produto.preco)
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua dos bobos",
            numero: 056
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19  
    }, {
        nome: "Joao",
        idade: 18
    }],

    calcularValorSeguro: function (){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
