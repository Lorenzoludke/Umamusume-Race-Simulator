const musumes = document.querySelectorAll(".musume");
const nomes = document.querySelectorAll(".nome");
const positions = document.querySelectorAll(".remove");
const multipliers = document.querySelectorAll(".times");
const priceQT = document.querySelector("#priceQt");

let multiplier = 1;

//========================
//Adiciona no pódio
//========================

musumes.forEach(musume => {
    musume.addEventListener("click", () => {
        const musumeName = musume.getAttribute("data-musume");

        if (getPodio().includes(musumeName)) {
            showToast("Essa musume já está no pódio");
            return;
        }

        let posicao = getPodio().indexOf(null);

        if (posicao === -1) {
            showToast("Pódio já está completo");
            return;
        }

        escolherMusume(musumeName, posicao);
        addPrice(10);

        atualizarUI();
    });
});

//=====================
//Atualiza o Pódio
//=====================

function atualizarUI() {
    const podio = getPodio();

    nomes.forEach((el, i) => {
        el.textContent = podio[i];
    });

    let basePrice = Number(localStorage.getItem("price")) || 0;
    priceQT.textContent = basePrice * multiplier;
}

//================
//Retira Pódio
//================

positions.forEach(remove => {
    remove.addEventListener("click", () => {
        const musumePodio = Number(remove.getAttribute("data-position"));

        if (podio[musumePodio] === null) {
            showToast("Não há musumes nessa posição");
            return;
        } else {
            podio[musumePodio] = null;
            removePrice(10);
        }

        atualizarUI();
    });
});

//============================
//Aplica Multiplicadores
//============================

multipliers.forEach(el => {
    el.addEventListener("click", () => {
        const multiplierTimes = Number(el.getAttribute("data-times"));

        if (multiplierTimes === multiplier) {
            multiplier = 1;
            el.classList.remove("active");  
        } else {
             multiplier = multiplierTimes;

             multipliers.forEach(m => m.classList.remove("active"));

             el.classList.add("active");
        }

        atualizarUI();
    });
})

function goBackIndex() {
    window.location.href = "/index.html";
}

function finishBet() {
    if (!podio.some(item => item !== null)) {
    showToast("Você precisa selecionar pelo menos uma musume");
    return;
    }

    window.location.href = "race.html";
}

limparPodio();
resetPrice();