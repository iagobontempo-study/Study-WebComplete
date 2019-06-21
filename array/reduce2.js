const alunos = [
    { nome: "Joao", nota: 8.5, bolsista: false},
    { nome: "Maria", nota: 7.3, bolsista: false},
    { nome: "Pedro", nota: 8.2, bolsista: true},
    { nome: "Ana", nota: 5.8, bolsista: true}
]

//const todosBolsistas = (resultado, bolsista) => resultado && bolsista

const desafio1Resultado = alunos.map(aluno => aluno.bolsista).reduce(function (acumulador, atual){
    return acumulador && atual
})
console.log("Todos alunos são bolsistas? \n" + desafio1Resultado)

const desafio2Resultado = alunos.map(aluno => aluno.bolsista).reduce(function (acumulador, atual){
    if (acumulador + atual > 0){
        return true
    }
    return false
})
console.log("Algum aluno é bolsista? \n" + desafio2Resultado)