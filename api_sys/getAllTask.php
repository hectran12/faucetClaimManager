<?php
    include_once('../helper/taskHelper.php');
    echo "\n";

    $tasks = getAllTask();
    if ($tasks) {
        echo json_encode(array(
            "status" => "success",
            "message" => "Get all tasks successfully",
            "data" => $tasks
        ));
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Get all tasks failed"
        ));
    }
?>

