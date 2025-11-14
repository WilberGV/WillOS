function openApp(id, title) {
    let win = document.getElementById(id);
    let taskButtons = document.getElementById("taskButtons");

    win.style.display = "block";

    // Crear botón en la barra de tareas si no existe
    if (!document.getElementById("task-" + id)) {
        let btn = document.createElement("div");
        btn.classList.add("taskItem");
        btn.id = "task-" + id;
        btn.innerText = title;
        btn.onclick = () => win.style.display = "block";
        taskButtons.appendChild(btn);
    }
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}
