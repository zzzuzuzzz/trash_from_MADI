<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Лабиринт</title>
    <link rel="stylesheet" href="../assets/css/game.css">
    <script defer src="../assets/js/generateMaze.js">	</script>
    <script defer src="../assets/js/drawMazePlayer.js"></script>
    <script defer src="../assets/js/save.js"></script>
</head>
<body>

<div class="container">
    <form class="level">
        <label class="lb">Выбрать уровень слоности:</label>
        <select name="select" id="selectLevel">
            <option value="" disabled selected><?php if (strval($_COOKIE['level']) == 'Y') {
                    echo "Легкий";
                } else if (strval($_COOKIE['level']) == 'M') {
                    echo "Средний";
                } else if (strval($_COOKIE['level']) == 'H') {
                    echo "Тяжелый";
                }?></option>
            <option value="Y">Легкий</option>
            <option value="M">Средний</option>
            <option value="H">Тяжелый</option>
        </select>

        <label class="lb">Выбрать колличество жизней:</label>
        <select name="selectLife" id="selectLife">
            <option value="" disabled selected><?php echo strval($_COOKIE['life']) ?></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
    </form>

    <div class="life">
        <div id="lifeOne" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="lifeTwo" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="lifeThree" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="life4" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="life5" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="life6" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="life7" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="life8" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
        <div id="life9" class="none heart">
            <img class=" heartFull" src="../assets/img/heartFull.svg" alt="сердце">
            <img class="none heartEmpty" src="../assets/img/heartEmpty.svg" alt="сердце">
        </div>
    </div>
    <label id="lbInfo"></label>
    <div class="game">
        <img src="../assets/img/boom.gif" alt="Волки" class="boomLeft none">
        <img src="../assets/img/wolf.gif" alt="Волки" class="imgLeft none">
        <canvas></canvas>
    </div>
    <div class="pay none">
        <p>Закончились жизни? - <a href="pay.php">ВОЗЬМИ ЕЩЕ!</a></p>
    </div>
</div>

<script src="../assets/js/jquery-3.7.1.min.js"></script>
<script>
    $('#selectLife').change(function (event) {
        event.preventDefault();

        let select = $(this).val();

        $.ajax({
            url: 'vendor/saveLife.php',
            type: 'POST',
            dataType: 'json',
            data: {
                select: select
            },
            success (data) {

                if (data.status) {
                    document.location.href = 'game.php'
                } else {
                    if (data.type === 1) {
                        alert(data.message)
                    }
                }
            }
        });
    });
</script>
</body>
</html>