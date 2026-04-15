// =====================
// ESTADO GLOBAL
// =====================

let saldo = Number(localStorage.getItem("saldo")) || 100;
let podio = JSON.parse(localStorage.getItem("podio")) || [null, null, null];
let podioImg = JSON.parse(localStorage.getItem("podioImg")) || [null, null, null];
let podioRace = JSON.parse(localStorage.getItem("podioRace")) || [null, null, null];
let podioRaceImg = JSON.parse(localStorage.getItem("podioRaceImg")) || [null, null, null];
let price = Number(localStorage.getItem("price")) || 0;
let multiplier = Number(localStorage.getItem("multiplier")) || 1;
let ganhos = Number(localStorage.getItem("ganhos")) || 0;

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
    localStorage.setItem("podioImg", JSON.stringify(podioImg));
}

function escolherMusume(nome, perfil, posicao) {
    if (podio.includes(nome)) {
        showToast("Essa musume já está no pódio");
        return;
    }

    podio[posicao] = nome;
    podioImg[posicao] = perfil;
    salvarPodio();
}

function limparPodio() {
    podio = [null, null, null];
    podioImg = [null, null, null];
    salvarPodio();
}

// =====================
// PODIO RACE
// =====================

function salvarRace() {
    localStorage.setItem("podioRace", JSON.stringify(podioRace));
    localStorage.setItem("podioRaceImg", JSON.stringify(podioRaceImg));
}

function pegarRace(nome, perfil, posicao) {
    podioRace[posicao] = nome;
    podioRaceImg[posicao] = perfil;
    salvarRace();
}

function limparRace() {
    podioRace = [null, null, null];
    podioRaceImg = [null, null, null];
    ganhos = 0;
    salvarRace();
    salvarGanhos();
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
// GANHOS
// =====================

function addGanhos(valor) {
    ganhos += valor;
    salvarGanhos();
}

function salvarGanhos() {
    localStorage.setItem("ganhos", ganhos);
}

function limparGanhos() {
    ganhos = 0;
    salvarGanhos();
}

// =====================
// UTIL
// =====================

function getSaldo() {
    return saldo;
}

function carregaSaldo() {
    const saldoText = document.getElementById("saldo");
    saldoText.textContent = saldo;
}

function saldoConfig() {
    window.location.href = "/pages/saldo.html";
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