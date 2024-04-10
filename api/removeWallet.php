<?php
    include_once('../helper/walletHelper.php');
    echo "\n";
    if(isset($_POST["id"])) {
        $id = $_POST["id"];
        $result = removeWallet($id);
        if($result) {
            echo json_encode(array("status" => "success", "message" => "Wallet deleted"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Wallet not deleted"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Wallet not deleted"));
    }

?>