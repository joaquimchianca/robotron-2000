const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const botoes = document.querySelectorAll("[data-selecao]")
const proximo = document.querySelector("#proximo")
const anterior = document.querySelector("#anterior")
let iteraRobos = 0
let atualizacao = true
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const cores = [ "img/robotron.png",
                "img/robotron-amarelo.png",
                "img/robotron-branco.png",
                "img/robotron-preto.png",
                "img/robotron-rosa.png",
                "img/robotron-vermelho.png"]


controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        atualizacao = true
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.controle, evento.target.parentNode.dataset.peca)
    })
})

proximo.addEventListener("click", (evento) => {
    let imagem = document.querySelector("#imagem")
    if( iteraRobos == 5 ){
        iteraRobos = 0
    } else {
        iteraRobos++
    }
    
    imagem.src = cores[iteraRobos]

})

anterior.addEventListener("click", (evento) => {
    let imagem = document.querySelector("#imagem")
    if( iteraRobos == 0 ){
        iteraRobos = 5
    } else {
        iteraRobos--
    }
    
    imagem.src = cores[iteraRobos]

})



function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if (operacao == "-") {
        if (peca.value == parseInt("0")) {
            alert("Impossivel colocar atributo negativo!")
            atualizacao = false
        } else {
            peca.value = parseInt(peca.value) - 1
        }

    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(operacao, peca) {
    estatisticas.forEach((elemento) => {
        if (atualizacao === false) {
            return
        }
        if (operacao == "-") {
            elemento.innerText = parseInt(elemento.textContent) - parseInt(pecas[peca][elemento.dataset.estatistica])
        } else {
            elemento.innerText = parseInt(elemento.textContent) + parseInt(pecas[peca][elemento.dataset.estatistica])
        }
    })


}