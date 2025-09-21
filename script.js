document.addEventListener('DOMContentLoaded', () => {
    const initialMessage = document.querySelector('.initial-message');
    const mainContent = document.getElementById('main-content');
    const mainTitle = document.getElementById('main-title');
    const finalMessage = document.getElementById('final-message');

setTimeout(() => {
    finalMessage.classList.remove('hidden');
}, 4500);

    // 1. Mensaje inicial 3s
    setTimeout(() => {
        initialMessage.style.transition = 'opacity 2s ease-in-out';
        initialMessage.style.opacity = '0';



        // 2. Mostrar las flores después
        setTimeout(() => {
            initialMessage.classList.add('hidden');
            mainContent.classList.remove('hidden');

            // ✅ aquí activamos la animación de las flores
            mainContent.classList.add('animate');

            // 3. Mostrar el texto amarillo después de que terminen de crecer las flores
            setTimeout(() => {
                mainTitle.classList.remove('hidden');
            }, 4500);

        }, 2000);
    }, 3000);
});
