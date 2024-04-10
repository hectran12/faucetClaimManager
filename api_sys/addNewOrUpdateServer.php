<?php
    include_once('../helper/serverHelper.php');
    echo "\n";
    
    $issetCheck = isset($_POST["id"]) && isset($_POST["serverIP"]) && isset($_POST["info"]) && isset($_POST["serverOS"]) && isset($_POST["currentWork"]) && isset($_POST["lastModifyDate"]) && isset($_POST["isRunning"]) && isset($_POST["logs"]);

    if ($issetCheck) {
        $id = $_POST["id"];
        $serverIP = $_POST["serverIP"];
        $info = $_POST["info"];
        $serverOS = $_POST["serverOS"];
        $currentWork = $_POST["currentWork"];
        $lastModifyDate = $_POST["lastModifyDate"];
        $isRunning = $_POST["isRunning"];
        $logs = $_POST["logs"];
        if ($isRunning == 'no_change') {
            $isRunning = null;
        }
        if ($currentWork == "no_change") {
            $currentWork = null;
        }
        $result = addNewOrUpdateServer($id, $serverIP, $info, $serverOS, $currentWork, $lastModifyDate, $isRunning, $logs);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Add server successfully"
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Add server failed"
            ));
        }
    }



?>