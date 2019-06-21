const nums = [1,2,3,4,5]

// Map gera um novo array a partir de outro
// Map é um for com proposito

let resultado = nums.map(function(elemento){
    return elemento * 2
})
console.log(resultado)


const soma10 = elemento => elemento + 10
const resultado2 = nums.map(soma10)
console.log(resultado2)

const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace(".", ",")}`
const resultado3 = nums.map(soma10).map(paraDinheiro)
console.log(resultado3)
