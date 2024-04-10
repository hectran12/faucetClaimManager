<?php

    include_once('../pages/isAdmin.php');
    include_once('../sql/conn.php');


    // table constructor
    // CREATE TABLE listtokensolvecaptcha (
    //     id INT AUTO_INCREMENT,
    //     token TEXT,
    //     status BOOLEAN,
    //     dateAdd TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    //     PRIMARY KEY (id)
    // );
    


    function editValueToken ($id, $token) {
        global $conn;
        $sql = "UPDATE listtokensolvecaptcha SET token='$token' WHERE id='$id'";
        $result = $conn->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }
    

    function getAllTokens () {
        global $conn;
        $sql = "SELECT * FROM listtokensolvecaptcha";
        $result = $conn->query($sql);
        $data = array();
        if ($result->rowCount() > 0){
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                $data[] = $row;
            }
        }
        return $data;
    }


    function addToken ($token) {
        global $conn;
        $sql = "INSERT INTO listtokensolvecaptcha (token, status) VALUES ('$token', 1)";
        $result = $conn->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }


    function deleteToken ($token) {
        global $conn;
        $sql = "DELETE FROM listtokensolvecaptcha WHERE token='$token'";
        $result = $conn->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    
    
    }



    function deleteTokenById ($id) {
        global $conn;
        $sql = "DELETE FROM listtokensolvecaptcha WHERE id='$id'";
        $result = $conn->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    
    
    }


?>  