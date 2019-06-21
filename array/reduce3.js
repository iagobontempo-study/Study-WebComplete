const soma = function(acumulador, atual){
    console.log("Resultado:", acumulador, "+", atual)
    return acumulador + atual
}
const nums = [1,2,3,4,5,6]
console.log(nums.reduce(soma))