// Esperar a que el documento se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del acordeón FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');

        questionButton.addEventListener('click', () => {
            // Alternar el estado activo del elemento FAQ seleccionado
            item.classList.toggle('active');

            // Cerrar todos los demás elementos FAQ
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Desplazamiento suave para enlaces de navegación
    const navLinks = document.querySelectorAll('nav a[href^="#"], .btn-primary[href^="#"], .btn-secondary[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para la altura del encabezado fijo
                    behavior: 'smooth'
                });
            }
        });
    });
});
