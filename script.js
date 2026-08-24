// ==========================================
// RESURGENCE 100 — DUOS CHAMPIONSHIP
// SCRIPT PRINCIPAL
// ==========================================


// ==========================================
// CONTADOR REGRESSIVO
// ==========================================

// Data oficial do campeonato:
// 20 de setembro de 2026 às 17:00
const championshipDate = new Date("2026-09-20T17:00:00-03:00");


// Cria o elemento do contador
const countdownContainer = document.createElement("div");

countdownContainer.id = "countdown";

countdownContainer.innerHTML = `
    <div class="countdown-title">
        CONTAGEM REGRESSIVA
    </div>

    <div class="countdown-grid">

        <div class="countdown-box">
            <strong id="days">00</strong>
            <span>DIAS</span>
        </div>

        <div class="countdown-box">
            <strong id="hours">00</strong>
            <span>HORAS</span>
        </div>

        <div class="countdown-box">
            <strong id="minutes">00</strong>
            <span>MIN</span>
        </div>

        <div class="countdown-box">
            <strong id="seconds">00</strong>
            <span>SEG</span>
        </div>

    </div>
`;


// Coloca o contador depois das informações do evento
const heroContent = document.querySelector(".hero-content");

const buttons = document.querySelector(".buttons");

heroContent.insertBefore(countdownContainer, buttons);


// Atualiza o contador
function updateCountdown() {

    const now = new Date().getTime();

    const distance = championshipDate.getTime() - now;


    // Se o campeonato já começou
    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.querySelector(".countdown-title").textContent =
            "🔥 CAMPEONATO EM ANDAMENTO 🔥";

        return;
    }


    // Calcula tempo
    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    // Atualiza tela
    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Atualiza imediatamente
updateCountdown();


// Atualiza a cada segundo
setInterval(updateCountdown, 1000);



// ==========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==========================================

const animatedElements = document.querySelectorAll(
    ".info-card, .proof-card, .kills-card, .score-table, .leaderboard"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});



// ==========================================
// EFEITO NO MENU
// ==========================================

const navLinks = document.querySelectorAll(".navbar nav a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});



// ==========================================
// ANIMAÇÃO DO TÍTULO
// ==========================================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(30px)";

    setTimeout(() => {

        heroTitle.style.transition =
            "opacity 1s ease, transform 1s ease";

        heroTitle.style.opacity = "1";

        heroTitle.style.transform = "translateY(0)";

    }, 200);

}



// ==========================================
// LOG DO SITE
// ==========================================

console.log(
    "🏆 Resurgence 100 — Duos Championship carregado!"
);

console.log(
    "🎯 Objetivo: 100 pontos + 1 vitória"
);

console.log(
    "💀 Cada kill vale 2 pontos"
);

console.log(
    "📅 Campeonato: 20/09/2026 às 17:00"
);
