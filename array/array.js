let aprovados = new Array("Ana", "Carlos", "Bia")
console.log(aprovados)

console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3] = "Paulo"
console.log(aprovados[3])

aprovados.push("Jurema")
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1] // espaco é deixado vazio
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"] // atribuindo array novamente
console.log(aprovados)
aprovados.splice(1, 1) 

// serve para adicionar elementos por um indice, remover elementos, remover e adicionar ao mesmo tempo
// adicionar elemento ao meio dos indices ja existentes


console.log(aprovados)