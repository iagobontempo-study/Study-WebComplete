const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

const chineses = funcionario => funcionario.pais === "China"
const mulheres = funcionario => funcionario.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

//  Afuncao menor salario acima, é a mesma da de baixo.
//
//  const menorSalario2 = (func, funcAtual) => {
//      if (func.salario < funcAtual.salario) {
//          return func
//      } else {
//          return funcAtual
//      }
//  }

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // Procurar e retornar mulher chinesa com menor salario
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario2)
    console.log(func)
})
