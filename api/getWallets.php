<?php
    include_once('../helper/walletHelper.php');
    echo "\n";
    $wallets = getListWallets();
    echo json_encode(array(
        "status" => "success",
        "message" => $wallets
    ));


?>