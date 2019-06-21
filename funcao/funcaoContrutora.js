function Carro(velocidadeMaxima = 200, delta = 5) {  // Classe & Construtor

    // Atributo privado
    let velocidadeAtual = 0

    // Metodo publico utiliza this.metodo         - > metodos privados usam const metodo
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico //getter
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log("Uno = " + uno.getVelocidadeAtual())
uno.acelerar()
console.log("Uno = " + uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log("Ferrari = " + ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log("Ferrari = " + ferrari.getVelocidadeAtual())

ferrari.acelerar