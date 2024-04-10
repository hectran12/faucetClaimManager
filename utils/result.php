<?php



    function outJsonContent ($status, $message) {
        header('Content-Type: application/json');
        $result = array(
            'status' => $status,
            'message' => $message
        );
        echo json_encode($result);

    }


?>