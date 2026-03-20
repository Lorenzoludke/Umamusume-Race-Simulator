document.getElementById("saldo").textContent = saldo

function exit() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "/index.html"
    }
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