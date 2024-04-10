
<?php

    include_once('../pages/isAdmin.php');
    include_once('../sql/conn.php');

    function addNewSetting ($name, $value) {
        global $conn;
        $sql = "INSERT INTO settings (name, value) VALUES ('$name', '$value')";
        $result = $conn->query($sql);
        return $result; 
    }


    function editSetting ($id, $name, $value) {
        global $conn;
        $sql = "UPDATE settings SET name = '$name', value = '$value' WHERE id = $id";
        $result = $conn->query($sql);
        return $result;
    }


    function removeSetting ($id) {
        global $conn;
        $sql = "DELETE FROM settings WHERE id = $id";
        $result = $conn->query($sql);
        return $result;
    }


    function getAllSettings () {
        global $conn;
        $sql = "SELECT * FROM settings";
        $result = $conn->query($sql);
        $settings = array();
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                $settings[] = $row;
            }
        }
        return $settings;
    }


?>  

