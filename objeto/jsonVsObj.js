// Objeto transformado em JSON
const obj = { a: 1, b: 2, c: 3, soma(){return a+b+c} }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a:1, b:2, c:3}"))  NAO!! ATENCAO COM "" e ''
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))  NAO!! ATENCAO COM "" e ''

//Objeto gerado de um JSON
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

console.log(JSON.parse('{ "A":1, "B":"String", "C": true, "D": {}, "E": [] }'))