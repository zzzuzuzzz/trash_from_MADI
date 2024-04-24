var lb_res = document.querySelector('[name="lb_res"]')
var main_num = lb_res.textContent;
var dop_num = "0";
var znak;
var rovn_marker = false;

const btn_1_js = document.getElementById("btn_1")
const btn_2_js = document.getElementById("btn_2")
const btn_3_js = document.getElementById("btn_3")
const btn_4_js = document.getElementById("btn_4")
const btn_5_js = document.getElementById("btn_5")
const btn_6_js = document.getElementById("btn_6")
const btn_7_js = document.getElementById("btn_7")
const btn_8_js = document.getElementById("btn_8")
const btn_9_js = document.getElementById("btn_9")
const btn_10_js = document.getElementById("btn_10")
const btn_sum_js = document.getElementById("btn_sum")
const btn_min_js = document.getElementById("btn_min")
const btn_umn_js = document.getElementById("btn_umn")
const btn_del_js = document.getElementById("btn_del")
const btn_clear_js = document.getElementById("btn_clear")
const btn_proc_js = document.getElementById("btn_proc")
const btn_plus_min_js = document.getElementById("btn_plus_min")
const btn_drob_js = document.getElementById("btn_drob")
const btn_back_js = document.getElementById("btn_back")
const btn_rovn_js = document.getElementById("btn_rovn")

document.addEventListener('DOMContentLoaded', () => btn_1_js.addEventListener('click', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_2_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_3_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_4_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_5_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_6_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_7_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_8_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_9_js.addEventListener('submit', btn_number));
document.addEventListener('DOMContentLoaded', () => btn_10_js.addEventListener('click', btn_10));
document.addEventListener('DOMContentLoaded', () => btn_clear_js.addEventListener('click', btn_clear));
document.addEventListener('DOMContentLoaded', () => btn_plus_min_js.addEventListener('click', btn_plus_min));
document.addEventListener('DOMContentLoaded', () => btn_drob_js.addEventListener('click', btn_drob));
document.addEventListener('DOMContentLoaded', () => btn_back_js.addEventListener('click', btn_back));
document.addEventListener('DOMContentLoaded', () => btn_sum_js.addEventListener('click', btn_sum));
document.addEventListener('DOMContentLoaded', () => btn_min_js.addEventListener('click', btn_min));
document.addEventListener('DOMContentLoaded', () => btn_umn_js.addEventListener('click', btn_umn));
document.addEventListener('DOMContentLoaded', () => btn_del_js.addEventListener('click', btn_del));
document.addEventListener('DOMContentLoaded', () => btn_rovn_js.addEventListener('click', btn_rovn));
document.addEventListener('DOMContentLoaded', () => btn_proc_js.addEventListener('click', btn_proc));





function btn_number() {
    
    if (rovn_marker === false) {
        if ((main_num !== "0") && (main_num !== "-0")) {
            main_num = main_num + String(number)
        }
        if (main_num === "0") {
            main_num = String(number)
        } if (main_num === "-0") {
            main_num = "-" + String(number)
        }
        lb_res.textContent = main_num;
     } // if (rovn_marker === true) {
    //     if (main_num === "-0") {
    //         main_num === "-1"
    //     } else {
    //         main_num = "1"
    //     }
    //     dop_num = "0"
    //     znak = "0"
    //     rovn_marker = false
    // }
    lb_res.textContent = main_num;
}





// function btn_1() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "1"
//         }
//         if (main_num === "0") {
//             main_num = "1"
//         } if (main_num === "-0") {
//             main_num = "-1"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-1"
//         } else {
//             main_num = "1"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_2() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "2"
//         }
//         if (main_num === "0") {
//             main_num = "2"
//         } if (main_num === "-0") {
//             main_num = "-2"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-2"
//         } else {
//             main_num = "2"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_3() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "3"
//         }
//         if (main_num === "0") {
//             main_num = "3"
//         } if (main_num === "-0") {
//             main_num = "-3"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-3"
//         } else {
//             main_num = "3"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_4() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "4"
//         }
//         if (main_num === "0") {
//             main_num = "4"
//         } if (main_num === "-0") {
//             main_num = "-4"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-4"
//         } else {
//             main_num = "4"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_5() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "5"
//         }
//         if (main_num === "0") {
//             main_num = "5"
//         } if (main_num === "-0") {
//             main_num = "-5"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-5"
//         } else {
//             main_num = "5"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_6() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "6"
//         }
//         if (main_num === "0") {
//             main_num = "6"
//         } if (main_num === "-0") {
//             main_num = "-6"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-6"
//         } else {
//             main_num = "6"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_7() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "7"
//         }
//         if (main_num === "0") {
//             main_num = "7"
//         } if (main_num === "-0") {
//             main_num = "-7"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-7"
//         } else {
//             main_num = "7"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_8() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "8"
//         }
//         if (main_num === "0") {
//             main_num = "8"
//         } if (main_num === "-0") {
//             main_num = "-8"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-8"
//         } else {
//             main_num = "8"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_9() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "9"
//         }
//         if (main_num === "0") {
//             main_num = "9"
//         } if (main_num === "-0") {
//             main_num = "-9"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "-9"
//         } else {
//             main_num = "9"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_10() {
//     if (rovn_marker === false) {
//         if ((main_num !== "0") && (main_num !== "-0")) {
//             main_num = main_num + "0"
//         }
//         if (main_num === "0") {
//             main_num = "0"
//         } if (main_num === "-0") {
//             main_num = "-0"
//         }
//         lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         if (main_num === "-0") {
//             main_num === "0"
//         } else {
//             main_num = "0"
//         }
//         dop_num = "0"
//         znak = "0"
//         rovn_marker = false
//     }
//     lb_res.textContent = main_num;
// }
// function btn_clear() {
//     main_num = "0";
//     lb_res.textContent = "0";
//     dop_num = "0";
//     znak = "0";
//     rovn_marker = false
// }
// function btn_plus_min() {
//     var num = Number(main_num);
//     if (rovn_marker === false) {
//         num = Number(main_num);
//         if (num !== 0) {
//             num = -num;
//             main_num = String(num);
//         }
//         if ((main_num === "-0") || (main_num === "0")) {
//             main_num = nolik;
//             nolik = "0"
//         }
//         if ((main_num === "0.") || (main_num === "-0.")) {
//             main_num = nolik_minus;
//             nolik_minus = "0."
//         }
//             lb_res.textContent = main_num;
//     } if (rovn_marker === true) {
//         main_num = dop_num
//         dop_num = "0"
//         num = Number(main_num);
//         if (num !== 0) {
//             num = -num;
//             main_num = String(num);
//         } if (main_num === "-0") {
//             main_num = "0"
//         } else main_num = "-0"
//         lb_res.textContent = main_num;
//         rovn_marker = false
//     }
// }
// function btn_drob() {
//     var drob = "."
//     if (main_num.indexOf(".") === -1) {
//         main_num = main_num + drob
//     } else {
//         return main_num
//     }
//     lb_res.textContent = main_num
// }
// function btn_back() {
//     if (main_num.length === 1 || (main_num.length === 2 && main_num[0] === "-") || (main_num.length === 3 && main_num[0] === "-" && main_num[2] === ".")) {
//         main_num = "0"
//     } else  {
//         main_num = main_num.slice(0, -1)
//     }
//     lb_res.textContent = main_num
// }
// function btn_sum() {
//     if (rovn_marker === true) {
//         znak = "+"
//         main_num = "0"
//         lb_res.textContent = main_num
//         rovn_marker = false
//     } if (rovn_marker === false) {
//         if (dop_num === "0") {
//             dop_num = main_num
//             znak = "+"
//             main_num = "0"
//             lb_res.textContent = main_num
//         } else {
//             znak = "+"
//             main_num = "0"
//             lb_res.textContent = main_num
//         }
//     }
// }
// function btn_min() {
//     if (rovn_marker === true) {
//         znak = "-"
//         main_num = "0"
//         lb_res.textContent = main_num
//         rovn_marker = false
//     } if (rovn_marker === false) {
//         if (dop_num === "0") {
//             dop_num = main_num
//             znak = "-"
//             main_num = "0"
//             lb_res.textContent = main_num
//         } else {
//             znak = "-"
//             main_num = "0"
//             lb_res.textContent = main_num
//         }
//     }
// }
// function btn_del() {
//     if (rovn_marker === true) {
//         znak = "/"
//         main_num = "0"
//         lb_res.textContent = main_num
//         rovn_marker = false
//     } if (rovn_marker === false) {
//         if (dop_num === "0") {
//             dop_num = main_num
//             znak = "/"
//             main_num = "0"
//             lb_res.textContent = main_num
//         } else {
//             znak = "/"
//             main_num = "0"
//             lb_res.textContent = main_num
//         }
//     }
// }
// function btn_umn() {
//     if (rovn_marker === true) {
//         znak = "*"
//         main_num = "0"
//         lb_res.textContent = main_num
//         rovn_marker = false
//     } if (rovn_marker === false) {
//         if (dop_num === "0") {
//             dop_num = main_num
//             znak = "*"
//             main_num = "0"
//             lb_res.textContent = main_num
//         } else {
//             znak = "*"
//             main_num = "0"
//             lb_res.textContent = main_num
//         }
//     }
// }
// function btn_rovn() {
//     var num_1 = Number(main_num)
//     var num_2 = Number(dop_num)
//     if (znak === "+") {
//         num_res = num_2 + num_1
//         num_res = num_res.toFixed(15)
//         num_res = Number(num_res)
//         main_num = String(num_1)
//         lb_res.textContent = dop_num
//         rovn_marker = true;
//     }
//     if (znak === "-") {
//         num_res = num_2 - num_1
//         num_res = num_res.toFixed(15)
//         num_res = Number(num_res)
//         main_num = String(num_1)
//         lb_res.textContent = dop_num
//         rovn_marker = true;
//     }
//     if (znak === "/") {
//         if (num_1 === 0) {
//             lb_res.textContent = ("Ошибка: деление на ноль!")
//             dop_num = "0"
//             main_num = "0"
//             znak = "0"
//         } else {
//             num_res = num_2 / num_1
//             num_res = num_res.toFixed(15)
//             num_res = Number(num_res)
//             dop_num = String(num_res)
//             main_num = String(num_1)
//             lb_res.textContent = dop_num
//             rovn_marker = true;
//         }
//     }
//     if (znak === "*") {
//         num_res = num_2 * num_1
//         num_res = num_res.toFixed(15)
//         num_res = Number(num_res)
//         dop_num = String(num_res)
//         main_num = String(num_1)
//         lb_res.textContent = dop_num
//         rovn_marker = true;
//     }
// }
// function btn_proc() {
//     var num_1 = Number(main_num)
//     var num_2 = Number(dop_num)
//     var num_res;
//     if (znak === "+") {
//         num_res = num_2 + ((num_2/100)*num_1)
//         num_res = num_res.toFixed(15)
//         num_res = Number(num_res)
//         dop_num = String(num_res)
//         main_num = String(num_1)
//         lb_res.textContent = dop_num
//     }
//     if (znak === "-") {
//         num_res = num_2 - ((num_2/100)*num_1)
//         num_res = num_res.toFixed(15)
//         num_res = Number(num_res)
//         dop_num = String(num_res)
//         main_num = String(num_1)
//         lb_res.textContent = dop_num
//     }
//     if (znak === "/") {
//         if (num_1 === 0) {
//             lb_res.textContent = ("Ошибка: деление на ноль!")
//             dop_num = "0"
//             main_num = "0"
//             znak = "0"
//         } else {
//             num_res = num_2 / ((num_2/100)*num_1)
//             num_res = num_res.toFixed(15)
//             num_res = Number(num_res)
//             dop_num = String(num_res)
//             main_num = String(num_1)
//             lb_res.textContent = dop_num
//         }
//     }
//     if (znak === "*") {
//         num_res = num_2 * ((num_2/100)*num_1)
//         num_res = num_res.toFixed(15)
//         num_res = Number(num_res)
//         dop_num = String(num_res)
//         main_num = String(num_1)
//         lb_res.textContent = dop_num
//     }
// }