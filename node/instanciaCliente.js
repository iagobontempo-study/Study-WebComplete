const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")() // Por conta de ser uma funcão nescessita colocar + 1 ()
const contadorD = require("./instanciaNova")() // Por conta de ser uma funcão nescessita colocar + 1 ()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // ATENCAO POIS ELE O NODE FAZ CACHE

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
console.log(contadorC.valor)


