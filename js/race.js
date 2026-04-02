// =======================
// CONFIG INICIAL
// =======================

const altura = 90;
let tempoTotal = 30000;
let inicio = Date.now();

const saldoText = document.getElementById("saldo");
saldoText.textContent = saldo;

// pega odds salvas
let odds = JSON.parse(localStorage.getItem("odds")) || {};

// =======================
// DADOS DAS MUSUMES
// =======================

const musumes = [
    { id: "m1", nome: "Rice Shower", perfil: "/img/rice_shower.jpg", progresso: 0 },
    { id: "m2", nome: "Agnes Tachyon", perfil: "/img/agnes_tachyon.jpg", progresso: 0 },
    { id: "m3", nome: "Manhattan Cafe", perfil: "/img/manhattan_cafe.jpg", progresso: 0 },
    { id: "m4", nome: "Mejiro McQueen", perfil: "/img/mejiro_mcqueen.jpg", progresso: 0 },
    { id: "m5", nome: "Vodka", perfil: "/img/vodka.jpg", progresso: 0 },
    { id: "m6", nome: "Tokai Teio", perfil: "/img/tokai_teio.jpg", progresso: 0 },
    { id: "m7", nome: "Special Week", perfil: "/img/special_week.jpg", progresso: 0 },
    { id: "m8", nome: "Silence Suzuka", perfil: "/img/silence_suzuka.jpg", progresso: 0 },
    { id: "m9", nome: "Oguri Cap", perfil: "/img/oguri_cap.jpg", progresso: 0 },
    { id: "m10", nome: "Gold Ship", perfil: "/img/gold_ship.jpg", progresso: 0 },
    { id: "m11", nome: "Daiwa Scarlet", perfil: "/img/daiwa_scarlet.jpg", progresso: 0 },
    { id: "m12", nome: "Narita Brian", perfil: "/img/narita_brian.jpg", progresso: 0 }
];

// =======================
// INICIALIZAÇÃO VISUAL
// =======================

musumes.forEach((m, index) => {
    const el = document.getElementById(m.id);

    el.querySelector(".nome").textContent = m.nome;
    el.querySelector(".avatar").src = m.perfil;

    el.style.transform = `translateY(${index * altura}px)`;
});

// =======================
// CALCULAR GANHO
// =======================

function calcularGanho(m, lider) {
    let chance = odds[m.nome] || 0;

    let base = 5 + Math.random() * 3;
    let bonus = Math.random() * (chance * 0.5);

    let diferenca = lider.progresso - m.progresso;
    let catchup = diferenca * 0.05;

    return base + bonus + catchup;
}

// =======================
// DEFINIÇÃO DE LEADERBOARD
// =======================

// 1. cria valores únicos (1 a 12)
let valores = [];
for (let i = 1; i <= musumes.length; i++) {
    valores.push(i);
}

// 2. embaralha
for (let i = valores.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [valores[i], valores[j]] = [valores[j], valores[i]];
}

// 3. aplica nas musumes
musumes.forEach((m, i) => {
    m.progresso = valores[i];
});

// 4. ordena e aplica visual
musumes.sort((a, b) => b.progresso - a.progresso);

musumes.forEach((m, index) => {
    const el = document.getElementById(m.id);

    el.style.transform = `translateY(${index * altura}px)`;
    el.querySelector(".posicao").textContent = (index + 1) + "º";
});

// =======================
// FUNÇÃO DA CORRIDA
// =======================

let ordemAnterior = musumes.map(m => m.id);

function atualizarCorrida() {
    let tempoPassado = Date.now() - inicio;

    const lider = musumes.reduce((maior, atual) => {
        return atual.progresso > maior.progresso ? atual : maior;
    });

    // =======================
    // MOVIMENTO
    // =======================

    musumes.forEach((m) => {
    m.progresso += calcularGanho(m, lider);
    });

    // =======================
    // ORDENA NORMAL
    // =======================
    musumes.sort((a, b) => b.progresso - a.progresso);

    // =======================
    // LIMITA ULTRAPASSAGEM (máx 1 posição)
    // =======================
    let posAnterior = {};
    ordemAnterior.forEach((id, index) => {
        posAnterior[id] = index;
    });

    for (let i = 0; i < musumes.length; i++) {
        let m = musumes[i];
        let antes = posAnterior[m.id];

        if (antes - i > 1) {
            let novaPos = antes - 1;

            musumes.splice(i, 1);
            musumes.splice(novaPos, 0, m);
        }
    }

    // =======================
    // ATUALIZA VISUAL
    // =======================
    musumes.forEach((m, index) => {
        const el = document.getElementById(m.id);

        el.style.transform = `translateY(${index * altura}px)`;
        el.querySelector(".posicao").textContent = (index + 1) + "º";
    });

    // 👉 PARTE 3 (fica AQUI no final)
    ordemAnterior = musumes.map(m => m.id);

    // =======================
    // FIM
    // =======================
    if (tempoPassado >= tempoTotal) {
        clearInterval(loop);
        alert("🏆 Vencedora: " + musumes[0].nome);

        window.location.href = "results.html";
        setTimeout(() =>  {
            window.location.href = "results.html";
        }, 3000)
    }
}

// =======================
// LOOP
// =======================

let loop = setInterval(atualizarCorrida, 1000);