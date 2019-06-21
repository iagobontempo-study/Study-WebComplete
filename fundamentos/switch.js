const imprimirResultado = function (nota){
    switch (Math.floor(nota)) {
        case 10: console.log("Parabens você tirou " + nota + "!!!")
    }
}

imprimirResultado(10)

function imprime(nota){
    switch (Math.floor(nota)) {
        case 10: console.log("Parabens você tirou nota " + nota + "!!!")
        case 9: console.log("Poderia melhorar, você tirou nota " + nota + "!!")
    }
}

imprime(9)
