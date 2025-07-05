document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const forestBackground = document.getElementById('forest-background');

    let characterSpeed = 5; // Velocidade de movimento do boneco
    let backgroundPosition = 0; // Posição atual do fundo
    let facingRight = true; // Direção para onde o boneco está olhando

    const characterImages = {
        idle: 'boneco_parado.png',
        walk1: 'boneco_andando1.png',
        walk2: 'boneco_andando2.png'
        // Adicione mais frames se tiver um spritesheet
    };

    let animationFrame = 0;
    let animationInterval;

    // Função para iniciar a animação de caminhada
    function startWalkAnimation() {
        if (animationInterval) return; // Já está animando
        animationInterval = setInterval(() => {
            animationFrame = (animationFrame + 1) % 2; // Alterna entre 0 e 1
            character.src = animationFrame === 0 ? characterImages.walk1 : characterImages.walk2;
        }, 150); // Mude este valor para ajustar a velocidade da animação
    }

    // Função para parar a animação de caminhada
    function stopWalkAnimation() {
        clearInterval(animationInterval);
        animationInterval = null;
        character.src = characterImages.idle; // Volta para a imagem parado
    }

    // Controle de movimento
    let keys = {}; // Objeto para controlar quais teclas estão pressionadas

    document.addEventListener('keydown', (e) => {
        keys[e.key] = true;
        updateCharacterMovement();
        if (!animationInterval) {
            startWalkAnimation();
        }
    });

    document.addEventListener('keyup', (e) => {
        keys[e.key] = false;
        updateCharacterMovement();
        // Se nenhuma tecla de movimento está pressionada, para a animação
        if (!keys['ArrowLeft'] && !keys['ArrowRight'] && !keys['a'] && !keys['d']) {
            stopWalkAnimation();
        }
    });

    function updateCharacterMovement() {
        let moving = false;
        if (keys['ArrowLeft'] || keys['a']) {
            backgroundPosition += characterSpeed;
            if (backgroundPosition > 0) backgroundPosition = 0; // Limita para não ir muito para a direita
            facingRight = false;
            moving = true;
        }
        if (keys['ArrowRight'] || keys['d']) {
            backgroundPosition -= characterSpeed;
            // Você pode adicionar um limite para o cenário aqui se quiser ter um "fim" da floresta
            facingRight = true;
            moving = true;
        }

        forestBackground.style.left = backgroundPosition + 'px';

        // Virar o boneco
        if (facingRight) {
            character.style.transform = 'translateX(-50%) scaleX(1)'; // Virado para a direita
        } else {
            character.style.transform = 'translateX(-50%) scaleX(-1)'; // Virado para a esquerda
        }
    }
});
