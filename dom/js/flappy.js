//Função para criar um novo elemento
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

//Função para criar barreira, metodo construtor para instancia cada barreira
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px` //Funcao para mudar o tamanho da altura
}

// Apenas para testar a barreia sendo contruida
// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true) //Instanciando 
    this.inferior = new Barreira(false) //Instanciando 

    this.elemento.appendChild(this.superior.elemento) // Adicionando ao elemento
    this.elemento.appendChild(this.inferior.elemento) // Adicionando ao elemento

    // Usando this, a funcão passa a ser vista fora da função /publico
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x) // Posição que a barreira vai aparecer
}

const b = new ParDeBarreiras(700, 200, 400) //b = objeto criado a partir da funcao contrutora
document.querySelector('[wm-flappy]').appendChild(b.elemento) // b.elemento é nescessario para colocar o objeto dentro da DOM