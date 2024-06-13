<?php

$path = 'img/AV.jpg';

setcookie('img', $path, time() + 60 * 60 * 24 * 30 * 12, '/');
echo "ОЛО";

header('Location: ../../game.php');
