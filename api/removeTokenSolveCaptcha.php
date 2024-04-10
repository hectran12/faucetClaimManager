<?php
    include_once('../helper/tokenHelper.php');
    echo "\n";
    if(isset($_GET["id"])) {
        $id = $_GET["id"];
        $result = deleteTokenById($id);
        if($result) {
            echo json_encode(array("status" => "success", "message" => "Token deleted"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Token not deleted"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Token not deleted"));
    }


?>