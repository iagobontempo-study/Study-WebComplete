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

// Apenas para testar o ParDeBarreia sendo contruida
// const b = new ParDeBarreiras(700, 200, 400) //b = objeto criado a partir da funcao contrutora
// document.querySelector('[wm-flappy]').appendChild(b.elemento) // b.elemento é nescessario para colocar o objeto dentro da DOM

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [ //Cria o inicio das barreiras
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando elemento sair da area do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio 
                && par.getX() < meio
            if (cruzouOMeio) {
                notificarPonto()
            }
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false
    
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'
    
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0 ) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

// TESTE PASSARO
// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar(),
//     passaro.animar()
// }, 20)

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)
    
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        //LOOP do Jogo
        const temporizador = setInterval(()=> {
            barreiras.animar()
            passaro.animar()
        }, 20)
    }
}

new FlappyBird().start()
