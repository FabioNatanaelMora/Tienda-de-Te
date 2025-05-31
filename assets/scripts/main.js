document.addEventListener("DOMContentLoaded", () => {

    fetch(`/assets/templates/header.html`)
        .then(res => {
            if (!res.ok) throw new Error("No se pudo cargar el header");
            return res.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(e => console.error(e));

    fetch(`/assets/templates/footer.html`)
        .then(res => {
            if (!res.ok) throw new Error("No se pudo cargar el footer");
            return res.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(e => console.error(e));

    inicializarCarrusel();
});

function inicializarCarrusel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (!slides.length || !prevBtn || !nextBtn) return;

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
