function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


let dx = 1;
let dy = 1;
let dxPath = 1;
let dyPath = 1
let tumbler = false
let inter;
let runing = false;

onmessage = function (e) {
    dx = e.data[0];
    dy = e.data[1];
    tumbler = e.data[2];
    dxPath = dx;
    dyPath = dy;
    puskilinepusk()
}



function changePath() {
    number = randomInteger(1, 8)
    switch (number) {
        case 1:
            dx = dxPath;
            dy = -dyPath;
            break
        case 2:
            dx = -dxPath;
            dy = dyPath;
            break
        case 3:
            dx = -dxPath;
            dy = -dyPath;
            break
        case 4:
            dx = dxPath;
            dy = dyPath;
            break
        case 5:
            dx = dxPath;
            dy = 0;
            break
        case 6:
            dx = 0;
            dy = -dyPath;
            break
        case 7:
            dx = 0;
            dy = dyPath;
            break
        case 8:
            dx = -dxPath;
            dy = 0;
            break
    }
}

function postMSG() {
    changePath()
    postMessage([dx, dy])
}

function puskilinepusk() {
    if (tumbler && !runing) {
        runing = true
        inter = setInterval(postMSG, 1000)
    } else if (runing) {
        runing = false
        clearInterval(inter)
    }
}

