const winnerText = document.querySelector(".winner");
const winnerImg = document.querySelector(".winnerAvatar");

const perfil = document.querySelectorAll(".avatar");
const nome = document.querySelectorAll(".nome");

const lugar = document.querySelectorAll(".lugar");
const ganhosTxt = document.querySelector(".ganhos");

// winner

winnerText.textContent += podioRace[0];
winnerImg.src = podioRaceImg[0];

// leaderboards Avatar

for (let i = 0; i < 3; i++) {
    let x = i + 3;

    // corrida
    if (podioRace[i] === null) {
        lugar[i].style.display = "none";
        lugar[i].style.display = "none";
    } else {
        nome[i].textContent = podioRace[i];
        perfil[i].src = podioRaceImg[i];
    }

    // aposta
    if (podio[i] === null) {
        lugar[x].style.display = "none";
        lugar[x].style.display = "none";
    } else {
        nome[x].textContent = podio[i];
        perfil[x].src = podioImg[i];
    }
}

function voltarAposta() {
    window.location.href = "aposta.html";
    limparRace();
}

ganhosTxt.textContent += ganhos;

carregaSaldo();