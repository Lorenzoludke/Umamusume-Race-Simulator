const musumes = document.querySelectorAll(".musume");
const nomes = document.querySelectorAll(".nome");
const positions = document.querySelectorAll(".remove")

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
}

//================
//Retira Pódio
//================

positions.forEach(remove => {
    remove.addEventListener("click", () => {
        const musumePodio = Number(remove.getAttribute("data-position"));

        if (podio[musumePodio] === null) {
            showToast("Não há musumes nessa posição");
        } else {
            podio[musumePodio] = null;
        }

        atualizarUI();
    });
});

function goBackIndex() {
    window.location.href = "../index.html";
}

limparPodio();