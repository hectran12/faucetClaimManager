<?php




    include_once('../config.php');

    include_once('../utils/check_string.php');

    include_once('../utils/result.php');


    include_once ('../auth/admin.php');

    $statusHiddenResponse = false;
    if(isset($_POST['password'])) {
        $password = checkString($_POST['password']);
        
        if($password == $passwordAdmin) {    
            if ($statusHiddenResponse == false) {
                outJsonContent('success', 'You are admin');
            }
        } else {
            if ($statusHiddenResponse == false) outJsonContent('error', 'You are not admin');
            setcookie('user', '', time() - 3600);
            die();
        }
    } else {
        if ($statusHiddenResponse == false) outJsonContent('error', 'Empty password');
        setcookie('user', '', time() - 3600);
        die();
    }
   
?>