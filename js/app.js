// TERMINAL
function executeCommand() {
    let input = document.getElementById("terminalInput");
    let output = document.getElementById("terminalOutput");

    const cmd = input.value.toLowerCase();
    output.innerHTML += "> " + cmd + "<br>";

    if (cmd === "help") {
        output.innerHTML += "Comandos disponibles: help, info, clear<br>";
    } else if (cmd === "info") {
        output.innerHTML += "RetroOS v1.0 - Sistema Web<br>";
    } else if (cmd === "clear") {
        output.innerHTML = "";
    } else {
        output.innerHTML += "Comando no reconocido<br>";
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
}
