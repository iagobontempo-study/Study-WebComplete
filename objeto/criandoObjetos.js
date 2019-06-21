// usando a notacao literal 
const obj = {

}
console.log(obj)

// usando Object em JS
const obj2 = new Object()

// funcoes contrutoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
console.log(p1.getPrecoComDesconto())

// funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("Joao", 7890.00, 4)
console.log(f1.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

//Uma funcao famose que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)