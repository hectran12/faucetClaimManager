<?php
    include_once('../helper/taskHelper.php');
    echo "\n";

    if(isset($_GET["id"])) {
        $id = $_GET["id"];
        $result = deleteTask($id);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Delete task successfully"
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Delete task failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Delete task failed"
        ));
    }