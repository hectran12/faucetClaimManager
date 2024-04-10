<?php
    include_once('../helper/tokenHelper.php');
    echo "\n";
    if(isset($_POST["token"])) {
        $token = $_POST["token"];
        $info = checkInfoCapSolver($token);
        if($info) {
            echo json_encode(array("status" => "success", "message" => $info));
        } else {
            echo json_encode(array("status" => "error", "message" => "Token not found"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Parameter not found"));
    }



    function checkInfoCapSolver ($token) {
        $url = 'https://api.capsolver.com/getBalance';
        $data = array("clientKey" => $token);
        $data_string = json_encode($data);
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json'
        ));
        $result = curl_exec($ch);
        $result = json_decode($result, true);
    
        if ($result["errorId"] == 0) {
            return $result;
        } else {
            return false;
        }
    }

?>