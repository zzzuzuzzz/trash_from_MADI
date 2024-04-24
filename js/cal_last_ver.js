document.addEventListener("DOMContentLoaded", ready);

function ready() {

    let mainNumber = "";
    let moreNumber = "";
    let sign = "";
    let exactlyMarker = false;
    let percentMarker = false;

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const actions = ['+', '-', '*', '/', '%', '+/-'];

    let lbResult = document.querySelector(".lbResult");

    function exactlyFunction () {
        switch (sign) {
            case '+':
                mainNumber = (+mainNumber) + (+moreNumber);
                mainNumber = Number(mainNumber.toFixed(15))
                break;
            case '-':
                mainNumber = mainNumber - moreNumber;
                mainNumber = Number(mainNumber.toFixed(15))
                break;
            case '*':
                mainNumber = mainNumber * moreNumber;
                mainNumber = Number(mainNumber.toFixed(15))
                break;
            case '/':
                if (moreNumber === '0') {
                    lbResult.textContent = 'Ошибка - делить на ноль нельзя!';
                    mainNumber = '';
                    moreNumber = '';
                    sign = '';
                    return;
                }
                mainNumber = mainNumber / moreNumber;
                mainNumber = Number(mainNumber.toFixed(15))
                break;
        }
        lbResult.textContent = mainNumber;
    }
    function exactlyFunctionPercentMarker () {
        switch (sign) {
            case '+':
                mainNumber = (+mainNumber) + (mainNumber/100*(+moreNumber));
                break;
            case '-':
                mainNumber = mainNumber - (mainNumber/100*moreNumber);
                break;
            case '*':
                mainNumber = mainNumber * (mainNumber/100*moreNumber);
                break;
            case '/':
                if (moreNumber === '0') {
                    lbResult.textContent = 'Ошибка - делить на ноль нельзя!';
                    mainNumber = '';
                    moreNumber = '';
                    sign = '';
                    return;
                }
                mainNumber = mainNumber / (mainNumber/100*moreNumber);
                break;
        }
        mainNumber = Number(mainNumber.toFixed(15))
    }

    document.addEventListener('keydown' || 'click', function (event) {
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
                if (!moreNumber && !sign) {
                    // если нажмается .
                    if (key_res === '.') {
                        // если нажимается . когда mainNumber = 0
                        if (!mainNumber /*|| mainNumber === '0' */) {
                            mainNumber = '0.'
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = mainNumber;
                            // если . есть в mainNumber
                        } else if (mainNumber.includes(".")) {
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            // если . нет в mainNumber
                        } else {
                            mainNumber = mainNumber + key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = mainNumber;
                        }
                        // если нажимается 0
                    } else if (key_res === '0') {
                        // если 0 после какого то другого числа
                        if (mainNumber !== '0') {
                            if (mainNumber === '-0') {
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            } else {
                                mainNumber = mainNumber + key_res;
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                                lbResult.textContent = mainNumber;
                            }
                            // если mainNumber пустой
                        } else {
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                        // добавление чисел на экран
                    } else if (key_res !== '%') {
                        // добавление чисел на экран после нажатия на ноль
                        if (mainNumber === '0') {
                            mainNumber = key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = mainNumber;
                        } else if (mainNumber === '-0') {
                            mainNumber = - key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = mainNumber;
                            // простое добавление чисел
                        } else {
                            mainNumber = mainNumber + key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = mainNumber;
                        }
                    }


                    // нажатие после функции ровно
                } else if (mainNumber && moreNumber && exactlyMarker) {
                    // если начинается новое действие (sign &&)
                    if (key_res !== '.') {
                        moreNumber = '';
                        mainNumber = key_res
                        exactlyMarker = false;
                        percentMarker = false;
                        sign = '';
                        lbResult.textContent = mainNumber;
                        console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                    } else  {
                        mainNumber = String(mainNumber)
                        if (mainNumber.includes('.')) {
                            exactlyMarker = false;
                            percentMarker = false;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        } else {
                            mainNumber = mainNumber + key_res;
                            moreNumber = '';
                            exactlyMarker = false;
                            percentMarker = false;
                            sign = '';
                            lbResult.textContent = mainNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                    }
                    // нажатие после установки знака
                } else if (sign) {
                    // если нажмается .
                    if (key_res === '.') {
                        // если нажимается . когда moreNumber = 0
                        if (!moreNumber) {
                            moreNumber = '0.'
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = moreNumber;
                            // если . есть в mainNumber
                        } else if (moreNumber.includes(".")) {
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = moreNumber;
                            // если . нет в mainNumber
                        } else {
                            moreNumber = moreNumber + key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = moreNumber;
                        }
                        // если нажимается 0
                    } else if (key_res === '0') {
                        // если 0 после какого то другого числа
                        if (moreNumber !== '0' && moreNumber !== '-0') {
                            moreNumber = moreNumber + key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = moreNumber;
                            // если mainNumber пустой
                        } else {
                            moreNumber = '0'
                            lbResult.textContent = moreNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                        // добавление чисел на экран
                    } else {
                        // добавление чисел на экран после нажатия на ноль
                        if (moreNumber === '0') {
                            moreNumber = key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = moreNumber;
                            // простое добавление чисел
                        } else if (moreNumber === '-0') {
                            moreNumber = - key_res;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            lbResult.textContent = moreNumber;
                        } else {
                            moreNumber = moreNumber + key_res;
                            exactlyMarker = false;
                            percentMarker = false;
                            lbResult.textContent = moreNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                    }
                }

            }
            // обработка нажатий знаков
            if (actions_res) {
                // если знак после действий ровно
                if (exactlyMarker) {
                    if (key_res !== '%' && key_res !== '+/-') {
                        // if (mainNumber && moreNumber) {
                        exactlyFunction();
                        sign = key_res;
                        moreNumber = '';
                        lbResult.textContent = sign;
                        console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        // +/- функция
                    } else if (key_res === '+/-') {
                        // if (moreNumber === '') {
                        if (mainNumber === '-0') {
                            mainNumber = '0'
                            lbResult.textContent = mainNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        } else if (mainNumber === '0' || mainNumber === '') {
                            mainNumber = '-0';
                            lbResult.textContent = mainNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        } else if (mainNumber === '0.') {
                            mainNumber = '-0.'
                            lbResult.textContent = mainNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        } else if (mainNumber === '-0.') {
                            mainNumber = '0.'
                            lbResult.textContent = mainNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        } else if (mainNumber !== '') {
                            mainNumber = - mainNumber;
                            lbResult.textContent = mainNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                        // } else {
                        //     moreNumber = - moreNumber;
                        //     lbResult.textContent = moreNumber;
                        //     console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        // }
                    }
                } else {
                    // если знак  не %
                    if (key_res !== '%' && key_res !== '+/-') {
                        if (mainNumber && moreNumber) {
                            exactlyFunction();
                            sign = key_res;
                            moreNumber = '';
                            lbResult.textContent = sign;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        } else {
                            sign = key_res;
                            lbResult.textContent = sign;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                        // Если %
                    } else if (key_res === '%') {
                        percentMarker = true
                        if (!moreNumber) {
                            if (mainNumber.includes('%')) {
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            } else {
                                lbResult.textContent = mainNumber + '%';
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            }
                        } else {
                            lbResult.textContent = moreNumber + '%';
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                        // +/- функция
                    } else if (key_res === '+/-') {
                        if (!moreNumber && !sign) {
                            if (mainNumber === '-0') {
                                mainNumber = '0'
                                lbResult.textContent = mainNumber;
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            } else if (mainNumber === '0' || mainNumber === '') {
                                mainNumber = '-0';
                                lbResult.textContent = mainNumber;
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            } else if (mainNumber === '0.') {
                                mainNumber = '-0.'
                                lbResult.textContent = mainNumber;
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            } else if (mainNumber === '-0.') {
                                mainNumber = '0.'
                                lbResult.textContent = mainNumber;
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            } else if (mainNumber !== '') {
                                mainNumber = - mainNumber;
                                lbResult.textContent = mainNumber;
                                console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                            }
                        } else {
                            moreNumber = - moreNumber;
                            lbResult.textContent = moreNumber;
                            console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                        }
                    }
                }
            }

            // обработка функции равно
            if (key_enter) {
                // если был выбрана только одна переменная
                if (!moreNumber) moreNumber = mainNumber;
                // если не была нажата кнопка процента
                if (!percentMarker) {
                    exactlyFunction()
                    exactlyMarker = true;
                    console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                    // если была нажата кнопка процентов
                } else  {
                    exactlyFunctionPercentMarker();
                    exactlyMarker = true;
                    percentMarker = false;
                    lbResult.textContent = mainNumber;
                    console.log(mainNumber, sign, moreNumber, exactlyMarker, percentMarker);
                }
            }
        }
    })
}