
<?php

    include_once('../pages/isAdmin.php');
    include_once('../sql/conn.php');


    // CREATE TABLE servers (
    //     id TEXT,
    //     serverIP TEXT,
    //     info TEXT,
    //     serverOS TEXT,
    //     currentWork TEXT,
    //     lastModifyDate TEXT,
    //     isRunning BOOLEAN,
    //     logs TEXT
    // );


    function checkExistServer ($id) {
        global $conn;
        $sql = "SELECT * FROM servers WHERE id = '$id'";
        $result = $conn->query($sql);
        if ($result->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }



    function getAllServers () {
        global $conn;
        $sql = "SELECT * FROM servers";
        $result = $conn->query($sql);
        $allServers = array();
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            array_push($allServers, $row);
        }
        return $allServers;
    }

    
    function addNewOrUpdateServer ($id, $serverIP, $info, $serverOS, $currentWork, $lastModifyDate, $isRunning, $logs) {
        global $conn;
        if (checkExistServer($id)) {
            $sql = "UPDATE servers SET ";
            if ($serverIP != null) {
                $sql = $sql . "serverIP = '$serverIP', ";
            }
            if ($info != null) {
                $sql = $sql . "info = '$info', ";
            }
            if ($serverOS != null) {
                $sql = $sql . "serverOS = '$serverOS', ";
            }
            if ($currentWork != null) {
                $sql = $sql . "currentWork = '$currentWork', ";
            }
            if ($lastModifyDate != null) {
                $sql = $sql . "lastModifyDate = '$lastModifyDate', ";
            }
            if ($isRunning != null) {
                $sql = $sql . "isRunning = $isRunning, ";
            }
            if ($logs != null) {
                $sql = $sql . "logs = '$logs', ";
            }
            $sql = substr($sql, 0, -2);
            $sql = $sql . " WHERE id = '$id'";
            
        } else {
            $sql = "INSERT INTO servers (id, serverIP, info, serverOS, currentWork, lastModifyDate, isRunning, logs) VALUES ('$id', '$serverIP', '$info', '$serverOS', '$currentWork', '$lastModifyDate', $isRunning, '$logs')";
        }
        $result = $conn->query($sql);
        return $result;
    }


    function addNewLog ($id, $log) {
        global $conn;
        if(checkExistServer($id)) {
            $sql = "SELECT logs FROM servers WHERE id = '$id'";
            $result = $conn->query($sql);
            $row = $result->fetch(PDO::FETCH_ASSOC);
            $logs = $row['logs'];
            $logs = $logs . "\n" . $log;
            $sql = "UPDATE servers SET logs = '$logs' WHERE id = '$id'";
            $result = $conn->query($sql);
            return $result;
        } else {
            return false;
        }
    }

