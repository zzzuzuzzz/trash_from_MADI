let main_num = "";
let dop_num = "";
let znak = "";
let rovn_marker = false;
let proc = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const actions = ['+', '-', '*', '/', '%', '+/-'];

const lb_res = document.querySelector(".lb_res");

// функция clear
function AC() {
    main_num = '';
    dop_num = '';
    znak = '';
    rovn_marker = false;
    proc = false;
    lb_res.textContent = 0;
}
document.querySelector(".btn_clear").onclick = AC;


// онклик на кнопки
document.querySelector('.buttons').onclick = (event) => {
    if (event.target.classList.contains('btn_clear')) return;

    lb_res.textContent = '';
    // вывод в бтн значение из кнопки
    const btn = event.target.textContent;

    // обработка нажатий цифр
    if (numbers.includes(btn)) {

        // первое нажатие
        if (dop_num === '' && znak === '') {
            // если нажмается .
            if (btn === '.') {
                // если нажимается . когда main_num = 0
                if (main_num === '' || main_num === '0') {
                    main_num = main_num = '0.'
                    lb_res.textContent = main_num;
                // если . есть в main_num
                } else if (main_num.indexOf(".") !== -1) {
                    main_num = main_num;
                    lb_res.textContent = main_num;
                // если . нет в main_num
                } else {
                    main_num = main_num + btn;
                    lb_res.textContent = main_num;
                }
            // если нажимается 0
            } else if (btn === '0') {
                // если 0 после какого то другого числа
                if (main_num.length > 1 || main_num !== '0') {
                    main_num = main_num + btn;
                    lb_res.textContent = main_num;
                // если main_num пустой
                } else {
                    main_num = '0'
                    lb_res.textContent = main_num;
                }
            // добавление чисел на экран
            } else {
                // добавление чисел на экран после нажатия на ноль
                if (main_num === '0') {
                    main_num = btn;
                    lb_res.textContent = main_num;
                // простое добавление чисел
                } else if (main_num === '-0') {
                    main_num = - btn;
                    lb_res.textContent = main_num;
                } else {
                    main_num = main_num + btn;
                    lb_res.textContent = main_num;
                }
            }


            // нажатие после функции ровно
        } else if (main_num !== '' && dop_num !== '' && rovn_marker === true) {
            // если начинается новое действие
            if (znak !== '') {
                dop_num = '';
                main_num = btn
                rovn_marker = false;
                proc = false;
                znak = '';
                lb_res.textContent = main_num;
                // если был установлен знак
            } else if (znak === '') {
                dop_num = btn;
                rovn_marker = false;
                proc = false;
                lb_res.textContent = dop_num;
            }


        // нажатие после установки знака
        } else if (znak !== '') {
            // если нажмается .
            if (btn === '.') {
                // если нажимается . когда main_num = 0
                if (dop_num === '' || dop_num === '0') {
                    dop_num = dop_num = '0.'
                    lb_res.textContent = dop_num;
                    // если . есть в main_num
                } else if (dop_num.indexOf(".") !== -1) {
                    dop_num = dop_num;
                    lb_res.textContent = dop_num;
                    // если . нет в main_num
                } else {
                    dop_num = dop_num + btn;
                    lb_res.textContent = dop_num;
                }
                // если нажимается 0
            } else if (btn === '0') {
                // если 0 после какого то другого числа
                if (dop_num.length > 1 || dop_num !== '0') {
                    dop_num = dop_num + btn;
                    lb_res.textContent = dop_num;
                    // если main_num пустой
                } else {
                    dop_num = '0'
                    lb_res.textContent = dop_num;
                }
                // добавление чисел на экран
            } else {
                // добавление чисел на экран после нажатия на ноль
                if (dop_num === '0') {
                    dop_num = btn;
                    lb_res.textContent = dop_num;
                    // простое добавление чисел
                } else if (dop_num === '-0') {
                    dop_num = - btn;
                    lb_res.textContent = dop_num;
                } else {
                    dop_num = dop_num + btn;
                    lb_res.textContent = dop_num;
                }
            }
        }
        return;
    }

    // обработка нажатий знаков
    if (actions.includes(btn)) {
        // если знак после действий ровно
        if (rovn_marker === true) {
            dop_num = '';
            // если знак %
            if (btn !== '%' & btn !== '+/-') {
                znak = btn;
                lb_res.textContent = znak;
                // Если не %
            } else if (btn === '%') {
                proc = true
                if (dop_num === '') {
                    lb_res.textContent = main_num + '%';
                } else {
                    lb_res.textContent = dop_num + '%';
                }
            // +/- функция
            } else if (btn === '+/-') {
                if (dop_num === '') {
                    if (main_num === '-0') {
                        main_num = '0'
                        lb_res.textContent = main_num;
                    } else if (main_num === '0' || main_num === '') {
                        main_num = '-0';
                        lb_res.textContent = main_num;
                    } else if (main_num === '0.') {
                        main_num = '-0.'
                        lb_res.textContent = main_num;
                    } else if (main_num === '-0.') {
                        main_num = '0.'
                        lb_res.textContent = main_num;
                    } else if (main_num !== '') {
                        main_num = - main_num;
                        lb_res.textContent = main_num;
                    }
                } else {
                    dop_num = - dop_num;
                    lb_res.textContent = dop_num;
                }
            }
        } if (rovn_marker === false) {
            // если знак %
            if (btn !== '%' && btn !== '+/-') {
                znak = btn;
                lb_res.textContent = znak;
                // Если не %
            } else if (btn === '%') {
                proc = true
                if (dop_num === '') {
                    lb_res.textContent = main_num + '%';
                } else {
                    lb_res.textContent = dop_num + '%';
                }
            // +/- функция
            } else if (btn === '+/-') {
                if (dop_num === '') {
                    if (main_num === '-0') {
                        main_num = '0'
                        lb_res.textContent = main_num;
                    } else if (main_num === '0' || main_num === '') {
                        main_num = '-0';
                        lb_res.textContent = main_num;
                    } else if (main_num === '0.') {
                        main_num = '-0.'
                        lb_res.textContent = main_num;
                    } else if (main_num === '-0.') {
                        main_num = '0.'
                        lb_res.textContent = main_num;
                    } else if (main_num !== '') {
                        main_num = - main_num;
                        lb_res.textContent = main_num;
                    }
                } else {
                    dop_num = - dop_num;
                    lb_res.textContent = dop_num;
                }
            }
        }
        return;
    }

    // обработка функции равно
    if (btn === '=') {
        // если был выбрана только одна переменная
        if (dop_num === '') dop_num = main_num;
        // если не была нажата кнопка процента
        if (proc === false) {
            switch (znak) {
                case '+':
                    main_num = (+main_num) + (+dop_num);
                    main_num = Number(main_num.toFixed(15))
                    break;
                case '-':
                    main_num = main_num - dop_num;
                    main_num = Number(main_num.toFixed(15))
                    break;
                case '*':
                    main_num = main_num * dop_num;
                    main_num = Number(main_num.toFixed(15))
                    break;
                case '/':
                    if (dop_num === '0') {
                        lb_res.textContent = 'Ошибка - делить на ноль нельзя!';
                        main_num = '';
                        dop_num = '';
                        znak = '';
                        return;
                    }
                    main_num = main_num / dop_num;
                    main_num = Number(main_num.toFixed(15))
                    break;
            }
            rovn_marker = true;
            lb_res.textContent = main_num;
        // если была нажата кнопка процентов
        } else if (proc === true) {
            switch (znak) {
                case '+':
                    main_num = (+main_num) + (main_num/100*(+dop_num));
                    main_num = Number(main_num.toFixed(15))
                    break;
                case '-':
                    main_num = main_num - (main_num/100*dop_num);
                    main_num = Number(main_num.toFixed(15))
                    break;
                case '*':
                    main_num = main_num * (main_num/100*dop_num);
                    main_num = Number(main_num.toFixed(15))
                    break;
                case '/':
                    if (dop_num === '0') {
                        lb_res.textContent = 'Ошибка - делить на ноль нельзя!';
                        main_num = '';
                        dop_num = '';
                        znak = '';
                        return;
                    }
                    main_num = main_num / (main_num/100*dop_num);
                    main_num = Number(main_num.toFixed(15))
                    break;
            }
            rovn_marker = true;
            proc = false;
            lb_res.textContent = main_num;
        }
    }
}