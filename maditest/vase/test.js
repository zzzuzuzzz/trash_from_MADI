document.querySelector('.button').onclick = function () {
    let timerik = 1000
    let sec = 0
    let abc = 0
    let vase = ''
    let vaseBigWat = 0
    let vaseLitWat = 0
    let vaseLitVol = Number(document.getElementById('litInput').value)
    let vaseBigVol = Number(document.getElementById('bigInput').value)
    let result = Number(document.getElementById('resInput').value)
    let lbResult = document.getElementById('lbResult')
    let watInLit = document.getElementById("watInLit");
    let watInBig = document.getElementById("watInBig");
    let little = document.querySelector('.little')

    watInLit.style.bottom = '-200px'
    watInBig.style.bottom = '-200px'
    function al(vase) {
        if (vase === 'big') {
            alert("ОТВЕТ: В большом кувшине " + result + " литров")
        } else if (vase === 'lit') {
            alert("ОТВЕТ: В большом кувшине " + result + " литров")
        }
    }
    function alNeg() {
        alert("Невозможно получить результат")
    }

    let int = 0
    if (vaseBigVol < vaseLitVol) {
        vaseBigVol = vaseBigVol + vaseLitVol;
        vaseLitVol = vaseBigVol - vaseLitVol;
        vaseBigVol = vaseBigVol - vaseLitVol;
    }

    let timeSum = ((vaseLitVol/(vaseBigVol/100)) * 2)

    setTimeout(() => {
        little.style.height = timeSum + 'px'
        watInLit.style.bottom = -(little.offsetHeight) + 'px'
        watInLit.style.height = timeSum + 'px'
        little.style.marginTop = 100 + (100 - timeSum) + 'px'
    }, timerik)
    timerik += 2000
    sec += 2000

    function watch(el, abc) {
        if (abc === '-200px') {
            el.style.bottom = -timeSum + 'px'
        } else {
            el.style.bottom = abc + "px"
        }
    }

    lbResult.textContent = '&hellip;'
    while (vaseBigWat !== result || vaseLitWat !== result) {
        vaseLitWat = vaseLitWat + vaseLitVol;
        setTimeout(watch.bind(null, watInLit, 0), timerik)
        timerik += 2000
        sec += 2000
        vaseBigWat = vaseBigWat + vaseLitWat;

        if (vaseBigWat > vaseBigVol) {

            vaseLitWat = vaseBigWat - vaseBigVol;
            vaseBigWat = vaseBigVol;
            abc = (100/vaseLitVol * vaseLitWat) - 100
            setTimeout(watch, timerik, watInLit, abc)
            setTimeout(watch.bind(null, watInBig, 0), timerik)
            timerik += 2000
            sec += 2000

            if (vaseLitWat === result) {
                vase = "lit"
                setTimeout(() => lbResult.textContent = result, sec)
                setTimeout(al.bind(null, vase), sec + 1000)
                break
            } else {
                vaseBigWat = 0;
                setTimeout(watch.bind(null, watInBig, -200), timerik)
                timerik += 2000
                sec += 2000


                if (vaseBigWat === 0 && vaseLitWat === 0) {
                    setTimeout(() => lbResult.textContent = 'Невозможно получить результат', sec)
                    setTimeout(alNeg, sec + 100)
                    break
                } else {
                    vaseBigWat = vaseBigWat + vaseLitWat
                    vaseLitWat = 0
                    abc = (200/vaseBigVol * vaseBigWat) - 200
                    setTimeout(watch.bind(null, watInBig, abc), timerik)
                    setTimeout(watch.bind(null, watInLit, "-200px"), timerik)
                    timerik += 2000
                    sec += 2000


                    if (vaseBigWat === result) {
                        vase = "big"
                        setTimeout(() => lbResult.textContent = result, sec)
                        setTimeout(al.bind(null, vase), sec + 1000)
                        setTimeout(al, sec + 1000)

                        break
                    } else {
                        if (int > 100) {
                            break
                        } else {
                            int++
                        }
                    }
                }
            }
        } else {
            vaseLitWat = 0;
            abc = (200/vaseBigVol * vaseBigWat) - 200
            setTimeout(watch.bind(null, watInBig, abc), timerik)
            setTimeout(watch.bind(null, watInLit, "-200px"), timerik)
            timerik += 2000
            sec += 2000


            if (vaseBigWat === vaseBigVol) {
                vaseBigWat = 0;
                setTimeout(watch.bind(null, watInBig, -200), timerik)
                timerik += 2000
                sec += 2000


                if (vaseBigWat === 0 && vaseLitWat === 0) {
                    setTimeout(() => lbResult.textContent = 'Невозможно получить результат', sec)
                    setTimeout(alNeg, sec + 100)
                    break
                } else {
                    vaseBigWat = vaseBigWat + vaseLitWat
                    vaseLitWat = 0
                    setTimeout(watch.bind(null, watInLit, "-200px"), timerik)
                    timerik += 2000
                    sec += 2000


                    if (vaseBigWat === result) {
                        vase = "big"
                        setTimeout(() => lbResult.textContent = result, sec)
                        setTimeout(al.bind(null, vase), sec + 1000)
                        setTimeout(al, sec + 1000)

                        break
                    } else {
                        if (int > 100) {
                            break
                        } else {
                            int++
                        }
                    }
                }
            } else {
                if (vaseBigWat === result) {
                    vase = "big"
                    setTimeout(() => lbResult.textContent = result, sec)
                    setTimeout(al.bind(null, vase), sec + 1000)
                    setTimeout(al, sec + 1000)

                    break
                } else {
                    if (int > 100) {
                        break
                    } else {
                        int++
                    }
                }
            }
        }
    }
}