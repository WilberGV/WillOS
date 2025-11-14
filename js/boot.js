const bios = document.getElementById("biosScreen");
const loading = document.getElementById("loadingScreen");
const desktop = document.getElementById("desktop");

let biosText = [
    "RetroOS BIOS v1.0",
    "--------------------------------",
    "Inicializando hardware...",
    "Cargando memoria...",
    "Detectando dispositivos...",
    "Iniciando sistema...",
];

let index = 0;

function showBIOS() {
    if (index < biosText.length) {
        bios.innerHTML += biosText[index] + "<br>";
        index++;
        setTimeout(showBIOS, 700);
    } else {
        setTimeout(() => {
            bios.style.display = "none";
            loading.style.display = "block";
            animateLoading();
        }, 800);
    }
}

function animateLoading() {
    let bar = document.querySelector(".loading-bar-fill");
    let width = 0;

    let interval = setInterval(() => {
        width++;
        bar.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
            loading.style.display = "none";
            desktop.style.display = "block";

            // sonido de arranque
            new Audio("assets/sounds/startup.mp3").play();
        }
    }, 30);
}

showBIOS();
