const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const botao = document.getElementById("botao")
const resultadoIMC = document.getElementById("resultado-imc")
const resultadoTexto = document.getElementById("resultado-texto")
const conteinerResultado = document.getElementById("container-resultado")

function calcularIMC() {
    const imc = peso.value / (altura.value * altura.value)
    resultadoIMC.textContent = imc.toFixed(2)

    let texto = ""
    if (imc < 18.5) {
        texto = "Você está abaixo do peso!"
    }

    if (imc >= 18.5 && imc <= 24.9) {
        texto = "Você esta no peso ideal!"
    }

    if (imc >= 25 && imc <= 29.9) {
        texto = "Você esta com sobrepeso!"
    }

    if (imc >= 30) {
        texto = "Você esta obeso!"
    }

    resultadoTexto.textContent = texto

    conteinerResultado.classList.remove("hidden")
    
    
}

botao.addEventListener("click", calcularIMC)