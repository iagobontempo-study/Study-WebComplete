//Cadeia de prototype
Object.prototype.attr0 = "0" //nao faca isso! apenas para teste
const avo = { attr1: "A"}
const pai = { __proto__: avo, attr2: "B"}
const filho = {__proto__: pai, attr3: "C"}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

//Exemplo outro modo de criar prototype sem ser com o uso do atributo __proto__OBJETO-PAI
// Object.setPrototypeOf(ferrari, carro)
// Object.setPrototypeOf(volvo, carro)