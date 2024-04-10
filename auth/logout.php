<?php
    include_once('../config.php');
    include_once('admin.php');

    $objAdmin = new admin();
    $objAdmin->changeCookieAdmin();
    // delete cookie user
    setcookie('user', '', time() - 3600);

    header('Location: ../');
?>