<?php
    include_once('../helper/settingHelper.php');
    echo "\n";
    if (isset($_POST["id"])) {
        $id = $_POST["id"];
        $result = removeSetting($id);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Remove setting successfully"
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Remove setting failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Missing id"
        ));
    }
?>
