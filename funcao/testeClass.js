class Pessoa {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    imprimirPessoa() {
        console.log(this.nome)
    }
}

const p1 = new Pessoa("Iago", 50)
console.log(p1)

p1.imprimirPessoa()

