const dino = document.querySelector('.dino');
const backgroud = document.querySelector('.background')
/*console.log(dino)*/ //Verifica se está funcionando
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) { //https://keycode.info <-verifica os keyCodes de todas as teclas
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        } else {
            //subindo
            position += 20;

            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactos() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;//NUmero aleatorio


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    backgroud.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            backgroud.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //Game Over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {

            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactos, randomTime)
}

createCactos();
document.addEventListener('keyup', handleKeyUp);
    /*console.log('pressionou uma tecla')*/ //Verifica se está funcionando
