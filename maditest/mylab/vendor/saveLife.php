<?php

$select = $_POST['select'];

$errorFields = [];

if ($select === '') {
    $errorFields[] = 'select';
}

if (!empty($errorFields)) {
    $response = [
        "status" => false,
        "type" => 1,
        "message" => "Вы ничего не выбрали",
    ];
    echo json_encode($response);
    die();
} else {
    setcookie('life', $select, time() + 60 * 60 * 24 * 30 * 12, '/');

    $response = [
        "status" => true
    ];

    echo json_encode($response);
}
