window.onload = function() {
    const intro = document.querySelector('.intro');
    const content = document.querySelector('.content-section');
    const hero = document.querySelector('.hero-section');

    // Mostrar el contenido después de un tiempo
    setTimeout(() => {
        intro.classList.add('fade-out'); // Añadir la clase para desvanecer

        // Espera a que el desvanecimiento termine para ocultar la introducción
        setTimeout(() => {
            intro.style.display = 'none'; // Ocultar la sección de introducción
            hero.style.display = 'flex'; // Mostrar la sección de bienvenida
            content.style.display = 'block'; // Mostrar el contenido
        }, 1000); // Coincide con la duración de la transición
    }, 2000); // Tiempo antes de que comience a desvanecerse (2 segundos)
};

  