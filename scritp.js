function mostrarSobreMi() {
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("sobre-mi").classList.remove("hidden");
}

function ocultarSobreMi() {
    document.getElementById("sobre-mi").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
}

// Deshabilitar copiar, pegar y cortar
document.addEventListener('copy', (e) => {
    e.preventDefault();
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
});

// Deshabilitar menú contextual (clic derecho)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Logica del modal de descarga de CV
function abrirModal() {
    const modal = document.getElementById("modal-cv");
    modal.classList.remove("hidden");
    // Evita que se pueda hacer scroll al fondo mientras el modal está abierto
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    const modal = document.getElementById("modal-cv");
    modal.classList.add("hidden");
    // Devuelve el scroll normal
    document.body.style.overflow = "auto";
}

// Opcional: Cerrar el modal si el usuario hace clic fuera del cuadro gris
window.onclick = function(event) {
    const modal = document.getElementById("modal-cv");
    if (event.target == modal) {
        cerrarModal();
    }
}