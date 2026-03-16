let saldo = Number(localStorage.getItem("saldo")) || 100
localStorage.setItem("saldo", saldo)

function addSaldo(a) {
    saldo += a
    localStorage.setItem("saldo", saldo)
}

function removeSaldo(a) {
    saldo -= a
    localStorage.setItem("saldo", saldo)
}