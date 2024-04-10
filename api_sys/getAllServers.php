<?php
    include_once('../helper/serverHelper.php');
    echo "\n";

    $allServers = getAllServers();
    if ($allServers) {
        echo json_encode(array(
            "status" => "success",
            "message" => "Get all servers successfully",
            "data" => $allServers
        ));
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Get all servers failed"
        ));
    }