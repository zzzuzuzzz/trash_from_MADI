function ready() {
    let popup = document.getElementById('popup'),
        popupToggle = document.getElementById('pop-up_button_1'),
        popupToggle2 = document.getElementById('pop-up_button_2'),
        popupToggle3 = document.getElementById('pop-up_button_3'),
        popupClose = document.querySelector('.close');

    popupToggle.onclick = function () {
        popup.style.display = 'block';
    };
    popupToggle2.onclick = function () {
        popup.style.display = 'block';
    };
    popupToggle3.onclick = function () {
        popup.style.display = 'block';
    };

    popupClose.onclick = function () {
        popup.style.display = 'none';
    };

    window.onclick = function (e) {
        if (e.target === popup) {
            popup.style.display = 'none'
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);





