<?php

$path = 'img/JunJS.png';

setcookie('img', $path, time() + 60 * 60 * 24 * 30 * 12, '/');

header('Location: ../game.php');
