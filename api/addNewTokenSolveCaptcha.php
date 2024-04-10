<?php
    include_once('../helper/tokenHelper.php');
    echo "\n";
    if(isset($_POST["token"])) {
        $token = $_POST["token"];
        $result = addToken($token);
        if($result) {
            echo json_encode(array("status" => "success", "message" => "Token added"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Token not added"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Token not added"));
    }


?>