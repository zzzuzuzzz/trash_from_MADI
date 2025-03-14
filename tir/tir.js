// ------------ Переменные ---------------------

// Переменные связанные с жизнями
let liveCount; // кол-во жизней
let liveInput = document.getElementById('inputLifeNumber'); //инпут где мы вписываем жизни
let liveDiv = document.querySelector('.lifeNumber'); //див с жизнями
let liveArray; // Массив жизней. Нужно будет в функции shot. Пока пусто, так как мы не выбрали кол-во жизней.

// Свойства элементов игры

// Свойства противника
let enemyHeight = 50; // Высота врага
let enemyWidth = 50; // ширина врага
let enemyImg = new Image();
enemyImg.src = "point.png"; // Картинка врага
let enemyX = 1; // Позиция врага по X (левый верхний угол)
let enemyY = 1; // Позиция врага по Y (левый верхний угол)
let enemySpeed = 5;// скорость врага по умолчанию
let planEnemyX = 1; // Направление движения врага по X, так же является длиной шага (шаг зависит от скорости)
let planEnemyY = 1;// Направление движения врага по Y, так же является длиной шага (шаг зависит от скорости)

// Свойства прицела
let playerHeight = 50; // Высота прицела
let playerWidth = 50; // Ширина прицела
let playerImg = new Image();
playerImg.src = "blaster.png"; // Картинка прицела
let playerX = 1; // Позиция игрока по X (левый верхний угол)
let playerY = 1; // Позиция игрока по Y (левый верхний угол)
let playerSpeed = 3;// скорость игрока, так же длина шага
let playerOldX; // Позиция игрока в прошлом по X (нужно для стирания прошлой позиции)
let playerOldY; // Позиция игрока в прошлом по Y

// Прочие свойства, переменные и настройки
let shotImg = new Image();
shotImg.src = "hole.png"; // Картинка выстрела
let shotView = false; // Признак того, что произошел выстрел
let shotCount = 0;
let shotCountDiv = document.getElementById('shot'); // Счетчик выстрелов на экране
let finalImg = document.getElementById('gameOverScreen')
const canvas = document.getElementById("myCanvas"); //ссылка на канву
canvas.width = canvas.offsetWidth; //ширина канвы
canvas.height = canvas.offsetHeight; //высота канвы
const ctx = canvas.getContext("2d"); // чето там делаю игру 2д типа

let btnStartGame = document.getElementById("runButton");
let btnPauseGame = document.getElementById("stopButton")
let interval; // Признак того, что игра запущена. Содержит в себе интервал в млсек и функцию отрисовки игрока и врага

let rightPressed = false; // тру или фолс что кнопка нажата вправо
let leftPressed = false;// тру или фолс что кнопка нажата влево
let topPressed = false;// тру или фолс что кнопка нажата вверх
let bottomPressed = false;// тру или фолс что кнопка нажата вниз

let enemySpeedInput = document.getElementById('range')// ссылка на ползунок тарелки
let playerSpeedInput = document.getElementById('rangeTwo')// ссылка на ползунок прицела

const worker = new Worker('worker.js') // поключил воркер




// ------------ Логика игры ---------------------

// Отрисовка жизней на экране
function drawLive()
{

    // Проверка, что мы ввели кол-во жизней и оно от 1 до 9
    if (liveInput.value > 9 || liveInput.value < 1 || liveInput.value === '') {
        alert("Количество жизней может быть от 1 до 9");
        liveDiv.innerHTML = '' // Стираем все нарисованные жизни
        return false; // Нужно для проверки, что жизни отрисовались после вызова функции, иначе игра не запуститься
    }

    liveCount = liveInput.value // Сохраняем кол-во жизней если оно есть в инпуте
    liveDiv.innerHTML = '' // Стираем все нарисованные жизни

    // Переменная i нужна для того, что бы пройти цикл столько раз, сколько у нас жизней,
    // но при этом не трогаю саму переменную liveCount
    for (let i = liveCount; i !== 0; i--) {

        let imgFull = document.createElement('img')
        imgFull.src = "heartFull.svg"
        imgFull.className = 'lifeIMG';

        liveDiv.append(imgFull);
    }

    liveArray = document.getElementsByClassName('lifeIMG') // Делаем массив из жизней
    return true;
}


// Функция выстрела
function shot (e)
{

    let playerCenterX = playerX +  playerWidth/2; // Определяем центр прицела по X
    let playerCenterY = playerY +  playerHeight/2; // Определяем центр прицела по Y

    if // Проверка, что попали по врагу
    (
        enemyX < playerCenterX &&
        enemyX + enemyWidth > playerCenterX &&
        enemyY < playerCenterY &&
        enemyY + enemyHeight > playerCenterY
    ) {
        if (liveCount != 1) { // Смотри что жизнь не последняя
            liveArray[liveCount - 1].src = 'heartEmpty.svg'; // Перерисовываем последнюю по списку ПОЛНЫХ сердец
            liveCount-- ; //Уменьшили кол-во жизней
        } else { // Если жизнь последняя
            finalImg.classList.remove('none'); // Удаляем клас "none"
        }
    }

    shotCount ++; // Увеличиваем кол-во выстрелов
    shotCountDiv.textContent = `Количество сделанных выстрелов: ${shotCount}`;  // Записываем кол-во выстрелов

}



// Функция отрисовки прицела
function drawPlayer()
{
    playerOldX = playerX
    playerOldY = playerY
    if (shotView === true) { // если происходит выстрел
        ctx.drawImage(shotImg, playerX, playerY, playerWidth, playerHeight);
    } else { // иначе обычная отрисовка прицела
        ctx.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);
    }
}


// Функция отрисовки врага
function drawEnemy()
{
    ctx.drawImage(enemyImg, enemyX, enemyY, enemyWidth, enemyHeight);
}






// функция когда мышка двигается
function mouseMoveHandler(e)
{
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        playerX = relativeX - playerWidth / 2;
    }
    const relativeY = e.clientY - canvas.offsetTop;
    if (relativeY > 0 && relativeY < canvas.height) {
        playerY = relativeY - playerHeight / 2;
    }
}

// функция когда нажали на какую то кнопку
function keyDownHandler(e)
{
    // свич на проверку какая кнопка была нажата для определения направления
    // и установки признака нажата кнопки в этом направлении
    switch (e.key) {
        case "ArrowRight":
            rightPressed = true;
            break
        case "ArrowLeft":
            leftPressed = true;
            break
        case "ArrowUp":
            topPressed = true;
            break
        case "ArrowDown":
            bottomPressed = true;
            break
        case " ":
            shotView = true
            shot(e)
            break
    }
}



// функция когда отпустили какую нибудь кнопку
function keyUpHandler(e)
{
    // свич на проверку какая кнопка была отпущена для определения направления
    // и установки признака отпуска кнопки в этом направлении
    switch (e.key) {
        case "ArrowRight":
            rightPressed = false;
            break
        case "ArrowLeft":
            leftPressed = false;
            break
        case "ArrowUp":
            topPressed = false;
            break
        case "ArrowDown":
            bottomPressed = false;
            break
        case " ":
            shotView = false
            break
    }
}



document.addEventListener("keydown", keyDownHandler); // Нажали на какую нибудь кнопку
document.addEventListener("keyup", keyUpHandler); // Отпустили какую нибудь кнопку
document.addEventListener("mousemove", mouseMoveHandler); // Двигаем мышкой






function draw()
{
    ctx.clearRect(enemyX, enemyY, enemyWidth, enemyHeight); // стираем врага
    ctx.clearRect(playerOldX, playerOldY, playerWidth, playerHeight); // стираем прицел


    if (enemyX + planEnemyX > canvas.width - enemyWidth || enemyX + planEnemyX < 0) {
        planEnemyX = -planEnemyX; // если впендюрились в стену, то сменим направление сохранив длину шага
    }
    if (enemyY + planEnemyY > canvas.height - enemyHeight || enemyY + planEnemyY < 0) {
        planEnemyY = -planEnemyY; // если впендюрились в стену, то сменим направление сохранив длину шага
    }

    enemyX += planEnemyX; // Меняем координаты врага
    enemyY += planEnemyY; // Меняем координаты врага


    if (rightPressed) { // если двигаемся вправо
        playerX += playerSpeed;
        if (playerX + playerWidth > canvas.width) {
            playerX = canvas.width - playerWidth;
        }
    } else if (leftPressed) { // если двигаемся влево
        playerX -= playerSpeed;
        if (playerX < 0) {
            playerX = 0;
        }
    } else if (topPressed) { // если двигаемся вверх
        if (playerY !== 0) {
            playerY -= playerSpeed;
        }
    } else if (bottomPressed) { // если двигаемся вниз
        if (canvas.height - playerY !== 50) {
            playerY += playerSpeed;
        }
    }

    drawEnemy();
    drawPlayer();
}



// функция смены скорости врага
function changeSpeedEnemy()
{
    enemySpeed = enemySpeedInput.value * 0.2;
    planEnemyX = enemySpeed;
    planEnemyY = enemySpeed;
    worker.postMessage([planEnemyX, planEnemyY, true])
}
enemySpeedInput.addEventListener('change', changeSpeedEnemy)


// функция смены скорости прицела
function changeSpeedPlayer()
{
    playerSpeed = +playerSpeedInput.value;
}
playerSpeedInput.addEventListener('change', changeSpeedPlayer)





worker.onmessage = function (e)// слушаем сообщения от воркера
{
    planEnemyX = e.data[0];
    planEnemyY = e.data[1];
}




// Функция отрисовки врага
function startGame() {
    let start = drawLive(); // вызываем отрисовку сердец
    if (start === false) { // если возникла ошибка при отрисовки сердец
        return;
    }
    interval = setInterval(draw, 10);
    worker.postMessage([planEnemyX, planEnemyY, true]) // отправили сообщение в воркер, что игра началась
}


// Функция отрисовки врага
function stopGame() {
    clearInterval(interval);
    worker.postMessage([planEnemyX, planEnemyY, false]) // отправили сообщение в воркер, что игра остановилась
}

btnStartGame.addEventListener("click", startGame);
btnPauseGame.addEventListener("click", stopGame);

document.getElementById('gameOverScreen').addEventListener('submit', (e) => {
    e.defaultPrevented
    window.location.reload()
})