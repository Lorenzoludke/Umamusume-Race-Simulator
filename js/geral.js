// =====================
// ESTADO GLOBAL
// =====================

let saldo = Number(localStorage.getItem("saldo")) || 100;
let podio = JSON.parse(localStorage.getItem("podio")) || [null, null, null];
let price = Number(localStorage.getItem("price")) || 0;
let multiplier = Number(localStorage.getItem("multiplier")) || 1;

// =====================
// SALDO
// =====================

function salvarSaldo() {
    localStorage.setItem("saldo", saldo);
}

function addSaldo(valor) {
    saldo += valor;
    salvarSaldo();
}

function removeSaldo(valor) {
    saldo -= valor;
    salvarSaldo();
}

// =====================
// PODIO
// =====================

function salvarPodio() {
    localStorage.setItem("podio", JSON.stringify(podio));
}

function escolherMusume(nome, posicao) {
    if (podio.includes(nome)) {
        showToast("Essa musume já está no pódio");
        return;
    }

    podio[posicao] = nome;
    salvarPodio();
}

function limparPodio() {
    podio = [null, null, null];
    salvarPodio();
}

// =====================
// PRICE
// =====================

function addPrice(Qt) {
    price += Qt;
    localStorage.setItem("price", price);
}

function removePrice(Qt) {
    price -= Qt;
    localStorage.setItem("price", price);
}

function resetPrice() {
    price = 0;
    localStorage.setItem("price", price);
}

function setPrice(Qt) {
    price = Qt;
    localStorage.setItem("price", price);
}

// =====================
// MULTIPLICADOR
// =====================

function addMultiplier(Qt) {
    multiplier = Qt;
    localStorage.setItem("multiplier", multiplier);
}

function resetMultiplier() {
    multiplier = 1;
    localStorage.setItem("multiplier", multiplier);
}

// =====================
// UTIL
// =====================

function getSaldo() {
    return saldo;
}

function getPodio() {
    return podio;
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
}