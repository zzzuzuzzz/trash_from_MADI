const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
var submitBtn = document.getElementById('submit')

//console.log(typeof sum)
document.addEventListener("DOMContentLoaded", ready);

function ready() {
    document.addEventListener("submit" ,submitBtn)
    submitBtn.onclick = function ready () {
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
        alert(sum)
    }
}

// function submit () {
//     var sum = Number(input1.value) + Number(input2.value)
//     resultElement.textContent = sum
//     alert(sum)
// }