let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // para testar se um valor é verdadeiro ou falso

let nome = ""
console.log(nome || "Desconhecido") // neste caso, se o valor for de nome for nulo, ele ira escrever desconhecido

let nome2 = "TESTE"
console.log(nome2 || "Desconhecido")