document.getElementById("saldo").textContent = saldo

function goBackIndex() {
    window.history.back();
}

function addCoins() {
    const list = document.querySelectorAll(".addCoins p")

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
            let value = Number(this.dataset.value)
            addSaldo(value)

            document.getElementById("saldo").textContent = saldo
        })
    }
}

addCoins();