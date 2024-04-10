<?php
    include_once('../helper/walletHelper.php');
    echo "\n";

    if(isset($_POST["id"]) && isset($_POST["name"]) && isset($_POST["value"])) {
        $id = $_POST["id"];
        $name = $_POST["name"];
        $value = $_POST["value"];
        $result = editValueWallet($id, $name, $value);
        if($result) {
            echo json_encode(array("status" => "success", "message" => "Wallet edited"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Wallet not edited"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Wallet not edited"));
    }


?>