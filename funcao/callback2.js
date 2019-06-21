const notas = [5.5, 8.9, 7.7, 9.8, 3.2, 9.0]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


//Com callback. nao foi nescessario fazer for 
let notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//com callback & funcao arrow
let notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

