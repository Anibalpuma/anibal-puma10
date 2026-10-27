const bgMusic = document.getElementById('bgMusic');

// Verificamos si el archivo se cargó correctamente
bgMusic.addEventListener('canplaythrough', () => {
    console.log("¡El audio se cargó correctamente y está listo para sonar!");
});

bgMusic.addEventListener('error', (e) => {
    console.error("Error: El navegador no pudo cargar 'yellow.mp3'. Revisa que esté en la misma carpeta y bien escrito.", e);
});

// Reproducir al hacer clic
window.addEventListener('click', () => {
    if (bgMusic && bgMusic.paused) {
        bgMusic.play()
            .then(() => console.log("Reproduciendo música..."))
            .catch(error => console.log("El navegador bloqueó la reproducción:", error));
    }
}, { once: true });