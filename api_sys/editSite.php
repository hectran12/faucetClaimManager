<?php
    include_once('../helper/siteClaimHelper.php');
    echo "\n";


    $issetCheck = isset($_POST["id"]) && isset($_POST["site_name"]) && isset($_POST["site_address"]) && isset($_POST["coin_claim"]) && isset($_POST["status"]) && isset($_POST["id_tool"]);

    if ($issetCheck) {
        $id = $_POST["id"];
        $site_name = $_POST["site_name"];
        $site_address = $_POST["site_address"];
        $coin_claim = $_POST["coin_claim"];
        $status = $_POST["status"];
        $id_tool = $_POST["id_tool"];
        $result = editSite($id, $id_tool, $site_name, $site_address, $coin_claim, $status);
        if ($result) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Edit site successfully"
            ));
        } else {
            echo json_encode(array(
                "status" => "fail",
                "message" => "Edit site failed"
            ));
        }
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Missing params"
        ));
    }

