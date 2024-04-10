<?php


    
    include_once('isAdmin.php');


    $ad = new admin();
    $ad->setCookieUser();
    $ad->saveCookieToDB();
    $forwarUri = $_SERVER['HTTP_REFERER'];

    header("Location: $forwarUri");
?>