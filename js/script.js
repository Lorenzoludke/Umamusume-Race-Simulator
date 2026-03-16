const saldoText = document.getElementById("saldo")

let valores = []
let total = 0

saldoText.textContent += saldo

// Gerar valores aleatórios para as odds dos cavalos ------------------

for (let i = 0; i < 12; i++) {
    let v = Math.random()
    valores.push(v)
    total += v
}

for (let i = 0; i < 12; i++) {

    let chance = ((valores[i] / total) * 100).toFixed(1)

    document.getElementById("odd"+(i+1)).textContent = chance + "%"

}

// Função para redirecionar para a página de saldo ------------------

function saldoConfig() {
    window.location.href = "/pages/saldo.html"
}

// Função para redirecionar para a página de aposta ------------------

function Apostar() {
    window.location.href = "/pages/aposta.html"
}