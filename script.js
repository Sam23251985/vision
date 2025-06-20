document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    });
});

// --- LÓGICA PARA EL CARRUSEL DE LA SECCIÓN "FEATURES" ---

document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.carousel-track');
    // Si no encontramos el carrusel en la página, no hacemos nada.
    if (!track) return;

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-arrow');
    const prevButton = document.querySelector('.prev-arrow');

    // Asumimos que queremos mostrar 2 slides a la vez
    const slidesPerPage = 2;
    if (slides.length <= slidesPerPage) {
        // Si no hay suficientes slides para necesitar botones, los ocultamos.
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
        return;
    }

    let currentIndex = 0;
    const slideCount = slides.length;
    
    // El índice máximo al que podemos llegar
    const maxIndex = slideCount - slidesPerPage;

    const updateCarousel = () => {
        const slideWidth = slides[0].offsetWidth; // Usamos offsetWidth que incluye padding
        const moveAmount = -currentIndex * slideWidth;
        track.style.transform = `translateX(${moveAmount}px)`;

        // Habilitar o deshabilitar botones
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === maxIndex;

        // Añadimos/quitamos la clase para el estilo visual de deshabilitado
        prevButton.classList.toggle('is-hidden', currentIndex === 0);
        nextButton.classList.toggle('is-hidden', currentIndex === maxIndex);
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Inicializamos el carrusel al cargar la página
    updateCarousel();
});

const contactForm = document.querySelector('.contact-form');
const notification = document.getElementById('notificacion');

// 2. Escuchamos el evento 'submit' en el formulario.
contactForm.addEventListener('submit', function(event) {
    // 3. Prevenimos el comportamiento por defecto del formulario (que es recargar la página).
    event.preventDefault(); 
    
    // 4. Mostramos la notificación añadiendo la clase 'show'.
    notification.classList.add('show');
    
    // 5. Opcional pero recomendado: Limpiamos el formulario.
    contactForm.reset();
    
    // 6. Ocultamos la notificación automáticamente después de 4 segundos.
    setTimeout(function() {
        notification.classList.remove('show');
    }, 4000); // 4000 milisegundos = 4 segundos
});