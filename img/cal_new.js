document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let main_num = "";
    let dop_num = "";
    let znak = "";
    let rovn_marker = false;
    let proc = false;

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const actions = ['+', '-', '*', '/', '%', '+/-'];

    let lb_res = document.querySelector(".lb_res");

    function rovn_func () {
        switch (znak) {
            case '+':
                main_num = (+main_num) + (+dop_num);
                main_num = Number(main_num.toFixed(15))
                lb_res.textContent = main_num;
                break;
            case '-':
                main_num = main_num - dop_num;
                main_num = Number(main_num.toFixed(15))
                lb_res.textContent = main_num;
                break;
            case '*':
                main_num = main_num * dop_num;
                main_num = Number(main_num.toFixed(15))
                lb_res.textContent = main_num;
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
                lb_res.textContent = main_num;
                break;
        }
    }
    function rovn_func_proc () {
        switch (znak) {
            case '+':
                main_num = (+main_num) + (main_num/100*(+dop_num));
            case '-':
                main_num = main_num - (main_num/100*dop_num);
                break;
            case '*':
                main_num = main_num * (main_num/100*dop_num);
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
                break;
        }
        main_num = Number(main_num.toFixed(15))
    }

    document.addEventListener('keydown', function (event) {
        console.log(event)
        let key_res = event.key
        let keyCtrl = event.ctrlKey
        let number_res = numbers.includes(key_res)
        let actions_res = actions.includes(key_res)
        let key_enter = key_res === 'Enter' || key_res === '=';
        if (key_res === '-' && keyCtrl) {
            key_res = '+/-'
        }

        if (!number_res && !actions_res && !key_enter) {
            console.log("не тот символ")
        } else {
            // обработка нажатий цифр
            if (number_res) {
                // первое нажатие
                if (!dop_num && !znak) {
                    // если нажмается .
                    if (key_res === '.') {
                        // если нажимается . когда main_num = 0
                        if (!main_num /*|| main_num === '0' */) {
                            main_num = '0.'
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = main_num;
                            // если . есть в main_num
                        } else if (main_num.includes(".")) {
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            // если . нет в main_num
                        } else {
                            main_num = main_num + key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = main_num;
                        }
                        // если нажимается 0
                    } else if (key_res === '0') {
                        // если 0 после какого то другого числа
                        if (main_num !== '0') {
                            if (main_num === '-0') {
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else {
                                main_num = main_num + key_res;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                                lb_res.textContent = main_num;
                            }
                            // если main_num пустой
                        } else {
                            // main_num = '0'
                            // lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                        // добавление чисел на экран
                    } else if (key_res !== '%') {
                        // добавление чисел на экран после нажатия на ноль
                        if (main_num === '0') {
                            main_num = key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = main_num;
                        } else if (main_num === '-0') {
                            main_num = - key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = main_num;
                            // простое добавление чисел
                        } else {
                            main_num = main_num + key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = main_num;
                        }
                    }


                    // нажатие после функции ровно
                } else if (main_num && dop_num && rovn_marker) {
                    // если начинается новое действие (znak &&)
                    if (key_res !== '.') {
                        dop_num = '';
                        main_num = key_res
                        rovn_marker = false;
                        proc = false;
                        znak = '';
                        lb_res.textContent = main_num;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    } else  {
                        main_num = String(main_num)
                        if (main_num.includes('.')) {
                            rovn_marker = false;
                            proc = false;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else {
                            main_num = main_num + key_res;
                            dop_num = '';
                            rovn_marker = false;
                            proc = false;
                            znak = '';
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                    }
                    // } else if (znak !== '') {
                    //     main_num = String(main_num)
                    //     dop_num = dop_num + key_res;
                    //     rovn_marker = false;
                    //     proc = false;
                    //     lb_res.textContent = dop_num;
                    //     console.log(main_num, znak, dop_num, rovn_marker, proc);
                    // }


                    // нажатие после установки знака
                } else if (znak) {
                    // если нажмается .
                    if (key_res === '.') {
                        // если нажимается . когда dop_num = 0
                        if (!dop_num) {
                            dop_num = '0.'
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = dop_num;
                            // если . есть в main_num
                        } else if (dop_num.includes(".")) {
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = dop_num;
                            // если . нет в main_num
                        } else {
                            dop_num = dop_num + key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = dop_num;
                        }
                        // если нажимается 0
                    } else if (key_res === '0') {
                        // если 0 после какого то другого числа
                        if (dop_num !== '0' && dop_num !== '-0') {
                            dop_num = dop_num + key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = dop_num;
                            // если main_num пустой
                        } else {
                            dop_num = '0'
                            lb_res.textContent = dop_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                        // добавление чисел на экран
                    } else {
                        // добавление чисел на экран после нажатия на ноль
                        if (dop_num === '0') {
                            dop_num = key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = dop_num;
                            // простое добавление чисел
                        } else if (dop_num === '-0') {
                            dop_num = - key_res;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                            lb_res.textContent = dop_num;
                        } else {
                            dop_num = dop_num + key_res;
                            rovn_marker = false;
                            proc = false;
                            lb_res.textContent = dop_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                    }
                }

            }

            // if () {
            //     if (dop_num === '') {
            //         if (main_num === '-0') {
            //             main_num = '0'
            //             lb_res.textContent = main_num;
            //             console.log(main_num, znak, dop_num, rovn_marker, proc);
            //         } else if (main_num === '0' || main_num === '') {
            //             main_num = '-0';
            //             lb_res.textContent = main_num;
            //             console.log(main_num, znak, dop_num, rovn_marker, proc);
            //         } else if (main_num === '0.') {
            //             main_num = '-0.'
            //             lb_res.textContent = main_num;
            //             console.log(main_num, znak, dop_num, rovn_marker, proc);
            //         } else if (main_num === '-0.') {
            //             main_num = '0.'
            //             lb_res.textContent = main_num;
            //             console.log(main_num, znak, dop_num, rovn_marker, proc);
            //         } else if (main_num !== '') {
            //             main_num = - main_num;
            //             lb_res.textContent = main_num;
            //             console.log(main_num, znak, dop_num, rovn_marker, proc);
            //         }
            //     } else {
            //         dop_num = - dop_num;
            //         lb_res.textContent = dop_num;
            //         console.log(main_num, znak, dop_num, rovn_marker, proc);
            //     }
            // }

            // обработка нажатий знаков
            if (actions_res) {
                // если знак после действий ровно
                if (rovn_marker) {
                    if (key_res !== '%' && key_res !== '+/-') {
                        // if (main_num && dop_num) {
                            rovn_func();
                            znak = key_res;
                            dop_num = '';
                            lb_res.textContent = znak;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        // } else {
                        //     znak = key_res;
                        //     lb_res.textContent = znak;
                        //     console.log(main_num, znak, dop_num, rovn_marker, proc);
                        // }
                    // }
                    // else if (key_res === '%') {
                    //     proc = true;
                    //     dop_num = '';
                    //     if (dop_num === '') {
                    //         lb_res.textContent = main_num + '%';
                    //         console.log(main_num, znak, dop_num, rovn_marker, proc);
                    //     } else {
                    //         lb_res.textContent = dop_num + '%';
                    //         console.log(main_num, znak, dop_num, rovn_marker, proc);
                    //     }
                        // +/- функция
                    } else if (key_res === '+/-') {
                        // if (dop_num === '') {
                            if (main_num === '-0') {
                                main_num = '0'
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num === '0' || main_num === '') {
                                main_num = '-0';
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num === '0.') {
                                main_num = '-0.'
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num === '-0.') {
                                main_num = '0.'
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num !== '') {
                                main_num = - main_num;
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            }
                        // } else {
                        //     dop_num = - dop_num;
                        //     lb_res.textContent = dop_num;
                        //     console.log(main_num, znak, dop_num, rovn_marker, proc);
                        // }
                    }
                } else {
                    // если знак  не %
                    if (key_res !== '%' && key_res !== '+/-') {
                        if (main_num && dop_num) {
                            rovn_func();
                            znak = key_res;
                            dop_num = '';
                            lb_res.textContent = znak;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else {
                            znak = key_res;
                            lb_res.textContent = znak;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                        // Если %
                    } else if (key_res === '%') {
                        proc = true
                        if (!dop_num) {
                            if (main_num.includes('%')) {
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else {
                                lb_res.textContent = main_num + '%';
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            }
                        } else {
                            lb_res.textContent = dop_num + '%';
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                        // +/- функция
                    } else if (key_res === '+/-') {
                        if (!dop_num && !znak) {
                            if (main_num === '-0') {
                                main_num = '0'
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num === '0' || main_num === '') {
                                main_num = '-0';
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num === '0.') {
                                main_num = '-0.'
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num === '-0.') {
                                main_num = '0.'
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            } else if (main_num !== '') {
                                main_num = - main_num;
                                lb_res.textContent = main_num;
                                console.log(main_num, znak, dop_num, rovn_marker, proc);
                            }
                        } else {
                            dop_num = - dop_num;
                            lb_res.textContent = dop_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                    }
                }
            }

            // обработка функции равно
            if (key_enter) {
                // если был выбрана только одна переменная
                if (!dop_num) dop_num = main_num;
                // если не была нажата кнопка процента
                if (!proc) {
                    rovn_func()
                    rovn_marker = true;
                    console.log(main_num, znak, dop_num, rovn_marker, proc);
                    // если была нажата кнопка процентов
                } else  {
                    rovn_func_proc();
                    rovn_marker = true;
                    proc = false;
                    lb_res.textContent = main_num;
                    console.log(main_num, znak, dop_num, rovn_marker, proc);
                }
            }
        }
    })






















// функция clear
    function AC() {
        main_num = '';
        dop_num = '';
        znak = '';
        rovn_marker = false;
        proc = false;
        lb_res.textContent = 0;
        console.log('btn_clear')
    }
    document.querySelector(".btn_clear").onclick = AC;

// онклик на кнопки
    document.querySelector('.buttons').onclick = (event) => {
        if (event.target.classList.contains('btn_clear')) return;

        lb_res.textContent = '';
        // вывод в бтн значение из кнопки
        const btn = event.target.textContent || key;

        // обработка нажатий цифр
        if (numbers.includes(btn)) {

            // первое нажатие
            if (dop_num === '' && znak === '') {
                // если нажмается .
                if (btn === '.') {
                    // если нажимается . когда main_num = 0
                    if (main_num === '' || main_num === '0') {
                        main_num = main_num = '0.'
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = main_num;
                        // если . есть в main_num
                    } else if (main_num.indexOf(".") !== -1) {
                        main_num = main_num;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = main_num;
                        // если . нет в main_num
                    } else {
                        main_num = main_num + btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = main_num;
                    }
                    // если нажимается 0
                } else if (btn === '0') {
                    // если 0 после какого то другого числа
                    if (main_num.length > 1 || main_num !== '0') {
                        main_num = main_num + btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = main_num;
                        // если main_num пустой
                    } else {
                        main_num = '0'
                        lb_res.textContent = main_num;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    }
                    // добавление чисел на экран
                } else {
                    // добавление чисел на экран после нажатия на ноль
                    if (main_num === '0') {
                        main_num = btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = main_num;
                        // простое добавление чисел
                    } else if (main_num === '-0') {
                        main_num = - btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = main_num;
                    } else {
                        main_num = main_num + btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = main_num;
                    }
                }


                // нажатие после функции ровно
            } else if (main_num !== '' && dop_num !== '' && rovn_marker === true) {
                // если начинается новое действие
                if (znak === '' && btn !== '.') {
                    dop_num = '';
                    main_num = btn
                    rovn_marker = false;
                    proc = false;
                    znak = '';
                    lb_res.textContent = main_num;
                    console.log(main_num, znak, dop_num, rovn_marker, proc);
                    // если был установлен знак
                } else if (btn === '.') {
                    main_num = main_num + btn;
                    dop_num = '';
                    rovn_marker = false;
                    proc = false;
                    znak = '';
                    lb_res.textContent = main_num;
                    console.log(main_num, znak, dop_num, rovn_marker, proc);
                } else if (znak !== '') {
                    dop_num = dop_num + btn;
                    rovn_marker = false;
                    proc = false;
                    lb_res.textContent = dop_num;
                    console.log(main_num, znak, dop_num, rovn_marker, proc);
                }


                // нажатие после установки знака
            } else if (znak !== '') {
                // если нажмается .
                if (btn === '.') {
                    // если нажимается . когда main_num = 0
                    if (dop_num === '' || dop_num === '0') {
                        dop_num = '0.'
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = dop_num;
                        // если . есть в main_num
                    } else if (dop_num.indexOf(".") !== -1) {
                        dop_num = dop_num;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = dop_num;
                        // если . нет в main_num
                    } else {
                        dop_num = dop_num + btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = dop_num;
                    }
                    // если нажимается 0
                } else if (btn === '0') {
                    // если 0 после какого то другого числа
                    if (dop_num.length > 1 || dop_num !== '0') {
                        dop_num = dop_num + btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = dop_num;
                        // если main_num пустой
                    } else {
                        dop_num = '0'
                        lb_res.textContent = dop_num;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    }
                    // добавление чисел на экран
                } else {
                    // добавление чисел на экран после нажатия на ноль
                    if (dop_num === '0') {
                        dop_num = btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = dop_num;
                        // простое добавление чисел
                    } else if (dop_num === '-0') {
                        dop_num = - btn;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                        lb_res.textContent = dop_num;
                    } else {
                        dop_num = dop_num + btn;
                        console. log(main_num, znak, dop_num, rovn_marker, proc);
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
                // если знак не %
                if (btn !== '%' && btn !== '+/-') {
                    if (main_num !== '' && dop_num !== '') {
                        dop_num = '';
                        rovn_func();
                        znak = btn;
                        dop_num = '';
                        lb_res.textContent = znak;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    } else {
                        znak = btn;
                        lb_res.textContent = znak;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    }
                    // Если не %
                } else if (btn === '%') {
                    proc = true;
                    dop_num = '';
                    if (dop_num === '') {
                        lb_res.textContent = main_num + '%';
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    } else {
                        lb_res.textContent = dop_num + '%';
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    }
                    // +/- функция
                } else if (btn === '+/-') {
                    if (dop_num === '') {
                        if (main_num === '-0') {
                            main_num = '0'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '0' || main_num === '') {
                            main_num = '-0';
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '0.') {
                            main_num = '-0.'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '-0.') {
                            main_num = '0.'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num !== '') {
                            main_num = - main_num;
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                    } else {
                        dop_num = - dop_num;
                        lb_res.textContent = dop_num;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    }
                }
            } if (rovn_marker === false) {
                // если знак %
                if (btn !== '%' && btn !== '+/-') {
                    znak = btn;
                    lb_res.textContent = znak;
                    console.log(main_num, znak, dop_num, rovn_marker, proc);
                    // Если не %
                } else if (btn === '%') {
                    proc = true
                    if (dop_num === '') {
                        lb_res.textContent = main_num + '%';
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    } else {
                        lb_res.textContent = dop_num + '%';
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
                    }
                    // +/- функция
                } else if (btn === '+/-') {
                    if (dop_num === '' && znak === '') {
                        if (main_num === '-0') {
                            main_num = '0'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '0' || main_num === '') {
                            main_num = '-0';
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '0.') {
                            main_num = '-0.'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '-0.') {
                            main_num = '0.'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num !== '') {
                            main_num = - main_num;
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                    } else if (dop_num === '' && znak !== '') {
                        if (main_num === '-0') {
                            main_num = '0'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '0' || main_num === '') {
                            main_num = '0'
                            dop_num = '-0';
                            lb_res.textContent = dop_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '0.') {
                            main_num = '-0.'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num === '-0.') {
                            main_num = '0.'
                            lb_res.textContent = main_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        } else if (main_num !== '') {
                            dop_num = "-0";
                            lb_res.textContent = dop_num;
                            console.log(main_num, znak, dop_num, rovn_marker, proc);
                        }
                    } else {
                        dop_num = - dop_num;
                        lb_res.textContent = dop_num;
                        console.log(main_num, znak, dop_num, rovn_marker, proc);
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
                rovn_func();
                rovn_marker = true;
                console.log(main_num, znak, dop_num, rovn_marker, proc);
                // если была нажата кнопка процентов
            } else if (proc === true) {
                rovn_func_proc();
                rovn_marker = true;
                proc = false;
                lb_res.textContent = main_num;
                console.log(main_num, znak, dop_num, rovn_marker, proc);
            }
        }
    }
}