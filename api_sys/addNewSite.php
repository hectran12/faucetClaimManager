<?php
    include_once('../helper/siteClaimHelper.php');
    echo "\n";

    $issetCheck = isset($_POST["site_name"]) && isset($_POST["site_address"]) && isset($_POST["coin_claim"]) && isset($_POST["status"]);

    if ($issetCheck) {
        $site_name = $_POST["site_name"];
        $site_address = $_POST["site_address"];
        $coin_claim = $_POST["coin_claim"];
        $status = $_POST["status"];
        $result = addNewSite($site_name, $site_address, $coin_claim, $status);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Add site successfully"
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Add site failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Missing params"
        ));
    }

?>