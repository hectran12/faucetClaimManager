<?php
    include_once('../helper/siteClaimHelper.php');
    echo "\n";

    if(isset($_GET["id"])) {
        $id = $_GET["id"];
        $result = getSiteById($id);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => $result
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Get site failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Missing params"
        ));
    }

?>