


onmessage = function (newPathX, newPathY, time, spaceWidth, spaceHeight, SPEED, lastShipPositionX, lastShipPositionY, shipPositionsWidth, shipPositionsHeight) {
    setTimeout(() => {
        let newShipPositionX = lastShipPositionX + newPathX;//Новоя позиция по оси Х
        let newShipPositionY = lastShipPositionY + newPathY;//Новоя позиция по оси Y

        //Пока новая позиция выходит за пределы поля по оси Х
        while (newShipPositionX < 0 || newShipPositionX > spaceWidth - shipPositionsWidth) {
            newPathX = newRandomPath(); // генерируй новый путь
            newShipPositionX = lastShipPositionX + newPathX; // и прибавляй этот путь к старой позиции по оси Х
        }

        //Тоже самое только для оси Y
        while (newShipPositionY < 0 || newShipPositionY > spaceHeight - shipPositionsHeight) {
            newPathY = newRandomPath();
            newShipPositionY = lastShipPositionY + newPathY;
        }
        //Поверни изображение на какое-то кол-во градусов
        // shipIMG.style.transform = `rotate(${rotateTo(newPathX, newPathY)}deg)`;

        // ship.style.left = `${newShipPositionX}px`; //Присваиваю новую позицию по оси Х
        // ship.style.top = `${newShipPositionY}px`; //Присваиваю новую позицию по оси Y

        lastShipPositionX = newShipPositionX; //Старой позиции присваиваю новую (обновляю старую) по оси X
        lastShipPositionY = newShipPositionY; //Старой позиции присваиваю новую (обновляю старую) по оси Y

        //Обновляю позиции корабля
        // shipPositions = ship.getBoundingClientRect();

    }, time);


    function newRandomPath() {
        let newPath = [-SPEED, 0, SPEED];
        return newPath[Math.floor(Math.random() * 3)]; //Возвразаю рандомно элемент массива newPath
        //Math.random() случайно возвращает число в промежутке от 0 включительно до 1 не включительно [0,1)
        //Маth.random() * 3 - данное выражение позволяет созадать новый числовой промежуток [0,3]
        //Math.floor округляет в меньшую сторону
        //Math.floor(Math.random() * 3) - случайно вернет одно из трех чисел 0, 1, 2
    }
}
function post(newPathX, newPathY, time, spaceWidth, spaceHeight, lastShipPositionX, lastShipPositionY, shipPositionsWidth, shipPositionsHeight) {
    postMessage([newPathX, newPathY, time, spaceWidth, spaceHeight, lastShipPositionX, lastShipPositionY, shipPositionsWidth, shipPositionsHeight])
}
