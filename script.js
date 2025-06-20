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