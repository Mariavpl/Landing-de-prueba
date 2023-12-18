const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.menu.container .navbar');

// Agregar un event listener al botón de hamburguesa para controlar la visibilidad del menú
menuToggle.addEventListener('change', function() {
    // Si el checkbox está marcado, añadir la clase 'active' al menú; de lo contrario, quitarla
    if (this.checked) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});