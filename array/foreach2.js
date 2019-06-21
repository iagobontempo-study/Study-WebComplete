// CRIANDO UM FOREACH GENERICO (exemplo)
// tudo que for generico devera ser colocado no prototype da funcao
// assim dando acesso completo a funcao


Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
