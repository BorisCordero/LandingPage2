// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar');

    // Efecto al hacer scroll: El menú se vuelve un poco más transparente o cambia de sombra
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }
    });

    // Opcional: Resaltar el enlace de la página actual
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = '#3498db';
        }
    });
});