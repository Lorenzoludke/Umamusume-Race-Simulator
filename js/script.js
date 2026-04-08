const saldoText = document.getElementById("saldo");

let valores = [];
let total = 0;

saldoText.textContent += saldo;

// Função para redirecionar para a página de saldo ------------------

function saldoConfig() {
    window.location.href = "/pages/saldo.html";
}

// Função para redirecionar para a página de aposta ------------------

function apostar() {
    window.location.href = "/pages/aposta.html";
}