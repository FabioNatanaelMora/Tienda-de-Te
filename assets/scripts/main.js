// Cargar header y footer dinámicamente
document.addEventListener("DOMContentLoaded", function () {
    // Header
    fetch("templates/header.html")
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el header");
            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el header:", error));

    // Footer
    fetch("templates/footer.html")
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el footer");
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el footer:", error));

    // Inicializar carrusel si existe
    inicializarCarrusel();
});

function inicializarCarrusel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (!slides.length || !prevBtn || !nextBtn) return; // No hay carrusel

    let currentIndex = 0;

    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        mostrarSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        mostrarSlide(currentIndex);
    });

    mostrarSlide(currentIndex);
}
