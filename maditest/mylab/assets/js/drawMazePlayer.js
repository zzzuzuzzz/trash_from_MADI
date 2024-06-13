let columnsSize = 11;
let rowsSize = 11;
let fieldSize = 15;
let padding = 15;

let player = {};
player.X = 0;
player.Y = -1;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const map = generateMaze(columnsSize, rowsSize);

console.log(map)
let shiftX = 0;
let shiftY = 0;

function init () {
    canvas.width = padding * 2 + columnsSize * fieldSize;
    canvas.height = padding * 2 + rowsSize * fieldSize;

    context.fillStyle = 'black';
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();

    context.fillStyle = 'white';
    context.beginPath();
    context.rect(padding, padding, canvas.width - padding * 2, canvas.height - padding * 2);
    context.fill();
}


function getField (x, y) {
    if (x >= 0 && x < columnsSize && y >= 0 && y < rowsSize) {
        return map[y][x];
    }
}

function drawMap () {
    for (let x = 0; x < columnsSize; x++) {
        for (let y = 0; y < rowsSize; y++) {
            if (map[y][x] === '▉') {
                context.fillStyle = 'black';
                context.beginPath();
                context.rect(padding + x * fieldSize, padding + y * fieldSize, fieldSize, fieldSize);
                context.fill();
            }
        }
    }
}

function drawExit() {
    context.fillStyle = 'white';
    context.beginPath();
    context.rect(padding, 0, fieldSize, padding);
    context.fill();

    if (columnsSize % 2 === 0) {shiftX = fieldSize}
    if (rowsSize % 2 === 0) {shiftY = fieldSize}

    context.rect((columnsSize - 1) * fieldSize + padding - shiftX, rowsSize * fieldSize + padding - shiftY, fieldSize, padding + shiftY);
    context.fill();

}



function drawPlayer() {
    console.log(123)
    context.fillStyle = 'blue';
    context.beginPath();
    context.rect(padding + player.X * fieldSize, padding + player.Y * fieldSize, fieldSize, fieldSize);
    context.fill();
}



function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let numberLife = Number(getCookie('lifeNumber'))






function dead() {
    if (numberLife !== 1) {
        document.getElementsByClassName('lifeIMG')[numberLife - 1].src = 'assets/img/heartEmpty.svg'
        numberLife--
    } else {
        document.getElementsByClassName('lifeIMG')[0].src = 'assets/img/heartEmpty.svg'
        alert("ВЫ ПРОИГРАЛИ!!!")
        cancelAnimationFrame(lp);
    }

}




document.addEventListener('keydown', function(e) {

    switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            context.fillStyle = 'red';
            context.beginPath();
            context.rect(padding + player.X * fieldSize, padding + player.Y * fieldSize, fieldSize, fieldSize);
            context.fill();
            break
    }

    switch (e.key) {
        case 'ArrowUp':
            if (((player.Y - 1) >= 0) && (getField(player.X, player.Y - 1) != '▉')) {
                player.Y -= 1;
                drawPlayer();
            } else {
                dead()
            }
            break
        case 'ArrowDown':
            if ( ((player.Y + 1) <= rowsSize - 1) && (getField(player.X, player.Y + 1) != '▉') ) {
                player.Y += 1;
                drawPlayer();
            } else if (player.Y == (rowsSize - 1)) {
                player.Y += 1;
                drawPlayer();
            } else {
                dead()
            }
            break
        case 'ArrowLeft':
            if ( ((player.X - 1) >=0) && (getField(player.X - 1, player.Y) != '▉') ) {
                player.X -= 1;
                drawPlayer();
            } else {
                dead()
            }
            break
        case 'ArrowRight':
            if ( ((player.X + 1) <= columnsSize - 1) && (getField(player.X + 1, player.Y) != '▉') ) {
                player.X += 1;
                drawPlayer();
            } else {
                dead()
            }
            break
    }
});




function loop() {
    lp = requestAnimationFrame(loop);
    if ((player.X == columnsSize - 1 - ((columnsSize + 1) % 2)) && (player.Y == (rowsSize - 1 -((rowsSize + 1) % 2)) + 1)) {
        cancelAnimationFrame(lp);
        setTimeout(() => alert("ВЫ ПОБЕДИЛИ!!!"), 500)
    }
}
drawPlayer();
init();
drawMap();
drawExit();
lp = requestAnimationFrame(loop);