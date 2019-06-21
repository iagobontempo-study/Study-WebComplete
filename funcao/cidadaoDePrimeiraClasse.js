// Funcao literal
function fun1() {

}

// Armazenar em variavel
const fun2 = function () {}

// Armazenar em array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,5))

//Armazenar em atributos de objetos
const obj = {}
obj.falar = function () {return "Opa"}
console.log(obj.falar())

//Passar funcao como parametro
function run(fun){
    fun()
}
run(function (){console.log("Executando...")})

// Pode retornar ou conter outra funcao
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}
soma(5, 8)(4)