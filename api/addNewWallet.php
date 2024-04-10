<?php
    include_once('../helper/walletHelper.php');
    echo "\n";


    if(isset($_POST["name"]) && isset($_POST["value"]) && isset($_POST["type_current"])) {
        $name = $_POST["name"];
        $value = $_POST["value"];
        $type_current = $_POST["type_current"];
        $result = addNewWallet($name, $value, $type_current);
        if($result) {
            echo json_encode(array("status" => "success", "message" => "Wallet added"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Wallet not added"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Wallet not added"));
    }

?>