<?php
    include_once('../helper/settingHelper.php');
    echo "\n";
    $setting = getAllSettings();
    echo json_encode(array(
        "status" => "success",
        "message" => $setting
    ));


?>