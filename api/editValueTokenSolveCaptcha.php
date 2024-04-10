<?php
    include_once('../helper/tokenHelper.php');
    echo "\n";

    if(isset($_POST["id"]) && isset($_POST["token"])) {
        $id = $_POST["id"];
        $token = $_POST["token"];
        $result = editValueToken($id, $token);
        if($result) {
            echo json_encode(array("status" => "success", "message" => "Token edited"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Token not edited"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Token not edited"));
    }
    
?>