const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

// PARA CADA ELEMENTO DO ARRAY A FUNCAO SERA CHAMADA
// nesta funcão, primeiro parametro (sera o conteudo que esta dentro do array)
// segundo parametro (sera o indice)
// terceiro seria o array inteiro
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome} `)
})

aprovados.forEach(nome => console.log(nome))

// Foi armazenado em uma constante uma funcao, que pega o aprovado e imprimi ele.
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
