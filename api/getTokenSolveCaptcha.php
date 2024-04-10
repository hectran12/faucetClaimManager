<?php
    include_once('../helper/tokenHelper.php');

    $data = getAllTokens();
    echo "\n";
    outJsonContent('success', $data);


?>