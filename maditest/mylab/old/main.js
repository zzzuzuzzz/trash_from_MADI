let player = document.getElementById('player');
let enemy = document.getElementById('enemy');
let gameArea = document.getElementById('gameArea');
let isPlayerAlive = true;
let score = 0;

function moveEnemy() {
    let top = Math.random() * (gameArea.clientHeight - enemy.clientHeight);
    let left = Math.random() * (gameArea.clientWidth - enemy.clientWidth);

    enemy.style.top = `${top}px`;
    enemy.style.left = `${left}px`;
}


function realTimeMoveEnemy(randomInt) {
    let randomItem = randomInt;
    let speed = 50
    switch (randomItem) {
        case 1:
            enemy.style.top = `${Math.max(0, enemy.offsetTop - speed)}px`;
            break
        case 2:
            enemy.style.left = `${Math.min(gameArea.clientWidth - enemy.clientWidth, enemy.offsetLeft + speed)}px`;
            break
        case 3:
            enemy.style.top = `${Math.min(gameArea.clientHeight - enemy.clientHeight, enemy.offsetTop + speed)}px`;
            break
        case 4:
            enemy.style.left = `${Math.max(0, enemy.offsetLeft - speed)}px`;
            break
    }
}

function isColliding(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

moveEnemy();

gameArea.addEventListener('mousemove', (e) => {
    if (isPlayerAlive) {
        player.style.top = `${e.clientY - gameArea.offsetTop}px`;
        player.style.left = `${e.clientX - gameArea.offsetLeft}px`;
    }
});

gameArea.addEventListener('click', () => {
    if (isPlayerAlive && isColliding(player, enemy)) {
        score++;
        document.title = `Счет: ${score}`;
        moveEnemy();
    }
});

function movePlayer(event) {
    if (!isPlayerAlive) return;

    let playerSpeed = 10;
    switch (event.key) {
        case 'ArrowUp':
            player.style.top = `${Math.max(0, player.offsetTop - playerSpeed)}px`;
            break;
        case 'ArrowDown':
            player.style.top = `${Math.min(gameArea.clientHeight - player.clientHeight, player.offsetTop + playerSpeed)}px`;
            break;
        case 'ArrowLeft':
            player.style.left = `${Math.max(0, player.offsetLeft - playerSpeed)}px`;
            break;
        case 'ArrowRight':
            player.style.left = `${Math.min(gameArea.clientWidth - player.clientWidth, player.offsetLeft + playerSpeed)}px`;
            break;
        case ' ':
            if (isColliding(player, enemy)) {
                score++;
                document.title = `Счет: ${score}`;
                moveEnemy();
            }
    }
}

document.addEventListener('keydown', movePlayer);




const worker = new Worker('worker.js')

worker.onmessage = (message) => {
    realTimeMoveEnemy(message.data)
}

