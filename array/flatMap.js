const escola = [{
    nome: "Turma M1",
    alunos: [
        { nome: "Gustavo", nota: 8.1 },
        { nome: "Ana", nota: 9.3 }
    ]},
    {
    nome: "Turma M2",
    alunos: [
        {nome: "Rebecca", nota: 5.5},
        {nome: "Paulo", nota: 5.9}
    ]
    }
]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasTurma)
console.log(nota1)

console.log([].concat([ 8.1, 9.3 ], [ 5.5, 5.9 ]))

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)

console.log(escola)