document.addEventListener("DOMContentLoaded", function () {

    let resultLabel = document.querySelector(".resultLabel");
    let resultLabelAdd = document.querySelector(".resultLabelAdd");

    (function(){

        let ConvertNumber = function (num) {
            return {
                from : function (baseFrom) {
                    return {
                        to : function (baseTo) {
                            return parseInt(num, baseFrom).toString(baseTo);
                        }
                    };
                }
            };
        };

        // двоичное число в двочное
        ConvertNumber.sys2sys = function (num, baseFrom, baseTo) {
            return ConvertNumber(num).from(baseFrom).to(baseTo);
        };

        // добавляем объект в глобальную область
        this.ConvertNumber = ConvertNumber;

    })(this);

    document.querySelector('.resultButton').onclick = function () {

        let oneMenu = document.querySelector('.oneInputMenu').value;
        let twoMenu = document.querySelector('.twoInputMenu').value;
        let oneInput = document.querySelector('.oneInput').value
        let variable;

        variable = ConvertNumber.sys2sys(oneInput, oneMenu, twoMenu)
        if (isNaN(variable)) {
            console.log('123')
            alert('Вы допустили ошибку. Проверьте системы счислений и вводимое число')
            resultLabel.textContent = `Результат: `
        } else {
                resultLabel.textContent = `Результат: ${variable}`
        }
    }

    document.querySelector('.resultButtonAdd').onclick = com;

    function com () {

        let oneMenu = document.querySelector('.oneInputAdd').value;
        let oneInput = document.querySelector('.oneInputMenuAdd').value
        let a = 1;
        let b = 1;

        if (oneMenu.length > 2 || oneInput.length > 2) {
            while (++a<37) {
                while (++b<37) {
                    if (ConvertNumber.sys2sys(oneMenu, a, 2) === ConvertNumber.sys2sys(oneInput, b, 2)) {
                        resultLabelAdd.textContent = `Первое число в ${a} системе, второе в ${b}`
                        return
                    } else {
                    }
                }
                b = 1
            }
            resultLabelAdd.textContent = 'Мы не смогли подобрать системы счислений'
        } else {
            let xArrayOneEl = Number(oneMenu[0]),
                xArrayTwoEl = Number(oneMenu[1]),
                yArrayOneEl = Number(oneInput[0]),
                yArrayTwoEl = Number(oneInput[1]);

            let xElement = Math.max(...oneMenu),
                yElement = Math.max(...oneInput);

            a = xElement + 1;
            b = yElement;

            while (++b<101) {
                let s = ((((b * yArrayOneEl) + yArrayTwoEl) - xArrayTwoEl) / xArrayOneEl);
                if (!Number.isInteger(s)) {
                    console.log(1)
                } else if (a <= s) {
                    resultLabelAdd.textContent += ` Первое число в ${s} системе, второе в ${b};`;
                }
            }
        }
    }
});
