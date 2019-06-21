const alunos = [
    { nome: "Joao", nota: 8.5, bolsista: false},
    { nome: "Maria", nota: 7.3, bolsista: true},
    { nome: "Pedro", nota: 8.2, bolsista: false},
    { nome: "Joao", nota: 5.8, bolsista: true}
]

const resultado = alunos.map(aluno => aluno.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
