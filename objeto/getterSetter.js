const sequencia = {
    _valor: 1, //convencao. isso seria uma variavel "privada" para outros programadores, ou seja usar get e set nela   
    get valor() {
        return this._valor
    },
    set valor(valor) {
        this._valor = valor
    }
}

sequencia.valor = 10
console.log(sequencia.valor)

