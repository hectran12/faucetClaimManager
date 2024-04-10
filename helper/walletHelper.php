<?php

    include_once('../pages/isAdmin.php');
    include_once('../sql/conn.php');



    // CREATE TABLE wallets (
    //     id INT AUTO_INCREMENT,
    //     name TEXT,
    //     value TEXT,
    //     type_current BOOLEAN,
    //     dateAdd TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //     PRIMARY KEY (id)
    // );



    function addNewWallet ($name_wallet, $value_wallet, $type_current) {
        global $conn;
        $sql = "INSERT INTO wallets (name, value, type_current) VALUES ('$name_wallet', '$value_wallet', $type_current)";
        $result = $conn->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }


    function editValueWallet($id, $name, $value) {
        global $conn;
        $sql = "UPDATE wallets SET name = '$name', value = '$value' WHERE id = $id";
        $result = $conn->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }


    function removeWallet ($id) {
        global $conn;
        $sql = "DELETE FROM wallets WHERE id = $id";
        $result = $conn->query($sql);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }


    function getListWallets () {
        global $conn;
        $sql = "SELECT * FROM wallets";
        $result = $conn->query($sql);
        $data = array();
        if ($result->rowCount() > 0){
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                $data[] = $row;
            }
        }
        return $data;
    }

?>