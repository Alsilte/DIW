document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');  // Seleccionamos el botón de menú
    const menuLinks = document.querySelector('.menu-links');  // Seleccionamos el contenedor del menú

    // Añadimos un evento de clic al botón de menú
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'show' para mostrar/ocultar el menú
        menuLinks.classList.toggle('show');
    });
});
