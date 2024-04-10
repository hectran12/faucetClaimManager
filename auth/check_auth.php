<?php
    if(!isset($_COOKIE['user'])) {
        die('You are not logged in');
    }
    
    $userCookie = $_COOKIE['user'];
    if ($userCookie == null) {
        die('You are not logged in');
    }

    $objAdmin = new admin($userCookie);
    if ($objAdmin->vaildCookie() == false) {
        die('You are not logged in or your session has expired');
    }

?>