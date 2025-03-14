function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


// переменные в воркере
let planEnemyX = 1; // скорость и длина шага по Х
let planEnemyY = 1; // скорость и длина шага по Y
let planEnemyXPath = 1; // Направление по Х
let planEnemyYPath = 1 // Направление по Y
let running = false; // признак запущена игра или нет
let inter;


onmessage = function (e)  // Принимаем сообщения от основного кода
{
    planEnemyX = e.data[0];
    planEnemyY = e.data[1];
    running = e.data[2]; // если есть 3 элемент, значит игра запущена
    planEnemyXPath = planEnemyX;
    planEnemyYPath = planEnemyY;
    offOrOnGame()
}



function changePath() // в зависимости от рандома выбирается 1 из 8 направлений
{
    number = randomInteger(1, 8)
    switch (number) {
        case 1:
            planEnemyX = planEnemyXPath;
            planEnemyY = -planEnemyYPath;
            break
        case 2:
            planEnemyX = -planEnemyXPath;
            planEnemyY = planEnemyYPath;
            break
        case 3:
            planEnemyX = -planEnemyXPath;
            planEnemyY = -planEnemyYPath;
            break
        case 4:
            planEnemyX = planEnemyXPath;
            planEnemyY = planEnemyYPath;
            break
        case 5:
            planEnemyX = planEnemyXPath;
            planEnemyY = 0;
            break
        case 6:
            planEnemyX = 0;
            planEnemyY = -planEnemyYPath;
            break
        case 7:
            planEnemyX = 0;
            planEnemyY = planEnemyYPath;
            break
        case 8:
            planEnemyX = -planEnemyXPath;
            planEnemyY = 0;
            break
    }
}

function postMSG() // Функция отправки сообщений в оснвоной код
{
    changePath() // сменили направление на рандомное
    postMessage([planEnemyX, planEnemyY]) // отправили сообщение в основной код
}

function offOrOnGame() // функция смотрит включена игра или нет
{
    if (running) { // если включена, то отправляет каждую секунду рандомное направление в оснвоной код
        inter = setInterval(postMSG, 1000)
    } else { // если включена, то отправляет каждую секунду рандомное направление в оснвоной код
        clearInterval(inter)
    }
}

