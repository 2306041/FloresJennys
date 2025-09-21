document.addEventListener('DOMContentLoaded', () => {
    const initialMessage = document.querySelector('.initial-message');
    const mainContent = document.getElementById('main-content');
    const mainTitle = document.getElementById('main-title');
    const finalMessage = document.getElementById('final-message');
    const audio = document.getElementById('background-music');
    const startButton = document.getElementById('start-button');

    // 🎶 Activar música con fade-in al primer clic
    startButton.addEventListener('click', () => {
        audio.volume = 0;
        audio.play().then(() => {
            let vol = 0;
            const fadeIn = setInterval(() => {
                if (vol < 0.3) {
                    vol += 0.01;
                    audio.volume = vol;
                } else {
                    clearInterval(fadeIn);
                }
            }, 200);
        }).catch(() => {
            console.log("El navegador bloqueó la reproducción automática.");
        });

        startButton.remove(); // elimina el botón invisible
    });

    // 🌌 Crear estrellas dinámicas
    function createStars(count) {
        const container = document.getElementById('stars-container');
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDuration = `${1 + Math.random() * 3}s`;
            star.style.opacity = `${0.2 + Math.random() * 0.8}`;
            container.appendChild(star);
        }
    }

    createStars(150);

    // 🌼 Secuencia emocional
    setTimeout(() => {
        initialMessage.style.transition = 'opacity 2s ease-in-out';
        initialMessage.style.opacity = '0';

        setTimeout(() => {
            initialMessage.classList.add('hidden');
            mainContent.classList.remove('hidden');
            document.getElementById('flower-container').classList.add('animate');

            setTimeout(() => {
                mainTitle.classList.remove('hidden');
                finalMessage.classList.remove('hidden');
            }, 4500);
        }, 2000);
    }, 3000);
});
