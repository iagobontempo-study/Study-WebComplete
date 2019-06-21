const pessoa = {
    nome: "Rebecca",
    idade: 2,
    peso: 2
}

console.log(pessoa) //Pega objeto
console.log(Object.keys(pessoa)) //Pega as chaves do objeto
console.log(Object.values(pessoa)) //Mostra valores do objeto
console.log(Object.entries(pessoa)) // mostra entradas keys e valores em array do objeto

Object.defineProperty(pessoa, "dataDeNascimento", { // define propriedade
    enumerable: true,                               // define se e enumeravel na lista de KEYS
    writable: false,                                // define se pode ser sobreescrita
    value: "01/01/2017"                               // define valor
})
console.log(pessoa)

// Object Assign (une atributos de objetos)
const destino = {a:1}
const ob1 = {b:5}
const ob2 = {c:8, d:9}
const obj = Object.assign(destino, ob1, ob2)
console.log(obj)

Object.freeze(obj) // congela o objeto

