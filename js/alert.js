let form;

function ready() {
    form = document.getElementById('cal_form');
    form.addEventListener('submit', getFormValue);
}
document.addEventListener("DOMContentLoaded", ready);

function getFormValue(event) {
    event.preventDefault();
    let left_input = form.querySelector('[name="left_input"]'),
        right_input = form.querySelector('[name="right_input"]');

    const res_1 = Number(left_input.value)
    const res_2 = Number(right_input.value)

    const sum = res_1 + res_2

    alert("Сумма балов: " + sum)

    let lb = document.querySelector('.res_res');
    lb.textContent = sum;
}