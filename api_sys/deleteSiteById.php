<?php
    include_once('../helper/siteClaimHelper.php');
    echo "\n";

    if(isset($_GET["id"])) {
        $id = $_GET["id"];
        $result = deleteSiteById($id);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Delete site successfully"
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Delete site failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Missing params"
        ));
    }


?>