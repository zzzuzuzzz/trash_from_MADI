let numberLife = 3
let inpValue = 1;
let inp = document.getElementById('inputLifeNumber')
let liveDiv = document.querySelector('.lifeNumber')
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const enemyHeight = canvas.height/2;
const enemyWidth = canvas.width/4;
let x = canvas.width / 2;
let y = canvas.height - enemyHeight;
// let dxPath;
// let dyPath;
let dx = 1;
let dy = 1;
const paddleHeight = 50;
const paddleWidth = 50;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = (canvas.height - paddleHeight) / 2;
let paddleOldX;
let paddleOldY;
let paddleSpeedX = 3;
let paddleSpeedY = 3;
let rightPressed = false;
let leftPressed = false;
let topPressed = false;
let bottomPressed = false;
let spacePressed = false;
let spacePressedView = false;
let shotNumber = 0;
let rangeValue = document.getElementById('range')
let rangeValueTwo = document.getElementById('rangeTwo')
let interval;
let tumbler = false
let tumblerTwo = false
const worker = new Worker('worker.js')
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

for (let numberLifeFor = numberLife; numberLifeFor >0; numberLifeFor--) {

    let imgFull = document.createElement('img')
    imgFull.src = "assets/img/heartFull.svg"
    imgFull.className = 'lifeIMG';

    liveDiv.append(imgFull);
}


function life(e) {
    e.target.value = e.target.value.replace(/\D+/g, "")
    let all = document.getElementsByClassName('lifeIMG');
    if (inp.value !== '') {
        inpValue = Number(inp.value)
    } else {
        return;
    }
    if (inpValue > 9) {
        inpValue = 9
    }
    if (numberLife > inpValue) {
        inpValue = numberLife - inpValue
        numberLife = inpValue
        for (inpValue; inpValue !== 0; inpValue--) {
            all[inpValue - 1].remove()
        }
    } else if (numberLife < inpValue) {
        inpValue =  inpValue - numberLife
        numberLife = inpValue + numberLife
        for (inpValue; inpValue !== 0; inpValue--) {

            let imgFull = document.createElement('img')
            imgFull.src = "assets/img/heartFull.svg"
            imgFull.className = 'lifeIMG';

            liveDiv.append(imgFull);
        }
    }
    console.log(numberLife)
}

function lifeNull() {
    inp.value = numberLife
}

inp.addEventListener('input', life)
inp.addEventListener('change', lifeNull)


document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
document.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
    const relativeY = e.clientY - canvas.offsetTop;
    if (relativeY > 0 && relativeY < canvas.height) {
        paddleY = relativeY - paddleHeight / 2;
    }
}


function keyDownHandler(e) {
    if (e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "ArrowLeft") {
        leftPressed = true;
    } else if (e.key == "ArrowUp") {
        topPressed = true;
    } else if (e.key == "ArrowDown") {
        bottomPressed = true;
    } else if (e.key == " ") {
        spacePressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "ArrowLeft") {
        leftPressed = false;
    } else if (e.key == "ArrowUp") {
        topPressed = false;
    } else if (e.key == "ArrowDown") {
        bottomPressed = false;
    } else if (e.key == " ") {
        spacePressed = false;
        spacePressedView = false;
    }
}



function shot() {
    const paddleCenterX = paddleX +  paddleWidth/2;
    const paddleCenterY = paddleY +  paddleHeight/2;
    if (x < paddleCenterX && x + enemyWidth > paddleCenterX && y < paddleCenterY && y + enemyHeight > paddleCenterY) {
        spacePressedView = true;
        if (numberLife !== 1) {
            document.getElementsByClassName('lifeIMG')[numberLife - 1].src = 'assets/img/heartEmpty.svg'
            numberLife--
        } else {
            document.getElementsByClassName('lifeIMG')[0].src = 'assets/img/heartEmpty.svg'
            alert("ВЫ ВЫЙГРАЛИ!!!")
            document.location.reload();
        }
    }
    shotNumber ++;
    document.getElementById('shot').textContent = 'Количсетво сделаных выстрелов: ' + shotNumber;

}
let imgEnemy = new Image();
imgEnemy.src = "photo/ila.jpg";
function drawBall() {
    // ctx.beginPath();
    // ctx.rect(x + (enemyWidth/2), y - (enemyHeight/2), enemyWidth, enemyHeight);
    // ctx.fillStyle = "rgba(221,0,0,0)";
    paddleOldX = paddleX
    paddleOldY = paddleY
    ctx.drawImage(imgEnemy, x, y, enemyWidth, enemyHeight);
    // ctx.fill();
    // ctx.closePath();
}

let img = new Image();
img.src = "photo/blaster.png";
let imgJS = new Image();
imgJS.src = "photo/js.png";
function drawPaddle() {
    paddleOldX = paddleX
    paddleOldY = paddleY
    if (spacePressedView === true) {
        // ctx.beginPath();
        // ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
        // ctx.fillStyle = "rgba(221,0,0,0)";
        ctx.drawImage(imgJS, paddleX, paddleY, paddleWidth, paddleHeight);
        // ctx.fill();
        // ctx.closePath();
    } else {
        // ctx.beginPath();
        // ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
        // ctx.fillStyle = "rgba(221,0,0,0)";
        ctx.drawImage(img, paddleX, paddleY, paddleWidth, paddleHeight);
        // ctx.fill();
        // ctx.closePath();
    }
}

function draw() {
    if (tumbler) {
        ctx.clearRect(x, y, enemyWidth, enemyHeight);
        ctx.clearRect(paddleOldX, paddleOldY, paddleWidth, paddleHeight);
    }

    // collisionDetection();

    if (x + dx > canvas.width - enemyWidth || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy > canvas.height - enemyHeight || y + dy < 0) {
        dy = -dy;
    }

    if (rightPressed) {
        paddleX += paddleSpeedX;
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    } else if (leftPressed) {
        paddleX -= paddleSpeedX;
        if (paddleX < 0) {
            paddleX = 0;
        }
    } else if (topPressed) {
        if (paddleY !== 0) {
            paddleY -= paddleSpeedY;
        }
    } else if (bottomPressed) {
        if (canvas.height - paddleY !== 50) {
            paddleY += paddleSpeedY;
        }
    }

    x += dx;
    y += dy;
    drawBall();
    drawPaddle();
    tumbler = true
}
function startGame() {
    document.querySelector('.lifeNumber').classList.remove('none');
    tumblerTwo = true
    interval = setInterval(draw, 10);
}
function stopGame() {
    clearInterval(interval);
    tumblerTwo = false
    worker.postMessage([dx, dy, tumblerTwo])
}

document.getElementById("runButton").addEventListener("click", startGame);
document.getElementById("stopButton").addEventListener("click", stopGame);

function shotik (e) {
    if (e.key === ' ') {
        shot()
    }
}
document.addEventListener('keydown', shotik)





function postPath(dx, dy) {
    worker.postMessage([dx, dy, tumbler])
}



function firstBespolezniFunc() {
    const speed = rangeValue.value * 0.2;
    dx = speed;
    dy = -(speed);
    // dxPath = speed * 0.2;
    // dyPath = -(speed * 0.2);
    postPath(dx, dy)
}
rangeValue.addEventListener('change', firstBespolezniFunc)
function secondBespolezniFunc() {
    const speed = +rangeValueTwo.value;
    switch (speed) {
        case 1:
            paddleSpeedX = 1;
            paddleSpeedY = 1;
            break
        case 2:
            paddleSpeedX = 2;
            paddleSpeedY = 2;
            break
        case 3:
            paddleSpeedX = 3;
            paddleSpeedY = 3;
            break
        case 4:
            paddleSpeedX = 4;
            paddleSpeedY = 4;
            break
        case 5:
            paddleSpeedX = 5;
            paddleSpeedY = 5;
            break
    }
}
rangeValueTwo.addEventListener('change', secondBespolezniFunc)





worker.onmessage = function (e) {
    dx = e.data[0];
    dy = e.data[1];
    // dxPath = e.data[2];
    // dyPath = e.data[3]
}