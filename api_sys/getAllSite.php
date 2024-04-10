<?php
    include_once('../helper/siteClaimHelper.php');
    echo "\n";

    $sites = getAllSite();
    if ($sites) {
        echo json_encode(array(
            "status" => "success",
            "message" => $sites
        ));
    } else {
        echo json_encode(array(
            "status" => "fail",
            "message" => "Get all site failed"
        ));
    }