<?php
    include_once('../helper/taskHelper.php');
    echo "\n";

    $issetCheck = isset($_GET["serverId"]) && isset($_GET["taskInfo"]);

    if ($issetCheck) {
        $serverId = $_GET["serverId"];
        $taskInfo = $_GET["taskInfo"];
        $result = createNewTask($taskInfo, $serverId);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Add task successfully"
            ));

        } elseif ($result == null) {
            echo json_encode(array(
                'status' => 'success',
                'message' => 'Task already exists'
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Add task failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Add task failed"
        ));
    }

?>