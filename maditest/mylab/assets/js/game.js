function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=')
        acc[name] = value
        return acc
    }, {})
}



let cookie = getCookie().lifeNumber
let number = document.querySelector('.inputLifeNumber')


for (cookie; cookie >0; cookie--) {
    // let div = document.createElement('div')
    // div.classList.add('lifeIMG');

    let imgFull = document.createElement('img')
    imgFull.src = "assets/img/heartFull.svg"
    imgFull.className = 'lifeIMG';

    // div.append(imgFull)
    $('.lifeNumber').append(imgFull);
}


$('.button').click(function () {
    document.cookie = "lifeNumber=" + number.value + "; max-age=3600";
    document.location.reload();
})