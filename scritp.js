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