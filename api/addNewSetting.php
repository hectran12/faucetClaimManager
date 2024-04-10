<?php
    include_once('../helper/settingHelper.php');
    echo "\n";

    if(isset($_POST["name"]) && isset($_POST["value"])) {
        $name = $_POST["name"];
        $value = $_POST["value"];
        $result = addNewSetting($name, $value);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Add setting successfully"
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Add setting failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Missing name or value"
        ));
    }

?>