<?php
    include_once('../helper/taskHelper.php');
    echo "\n";


    if (isset($_GET["serverId"])) {
        $serverId = $_GET["serverId"];
        $tasks = getTaskByServerId($serverId);
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
    }


?>