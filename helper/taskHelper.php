
<?php

    include_once('../pages/isAdmin.php');
    include_once('../sql/conn.php');


    // CREATE TABLE task (
    //     id INT AUTO_INCREMENT,
    //     taskInfo TEXT,
    //     serverId TEXT,
    //     dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //     PRIMARY KEY (id)
    // );

    

    function createNewTask ($taskInfo, $serverId) {
        global $conn;

        // check exist taskInfo with serverId
        $sql = "SELECT * FROM task WHERE taskInfo = '$taskInfo' AND serverId = '$serverId'";
        $result = $conn->query($sql);
        if ($result->rowCount() > 0) {
            return null;
        }

        $sql = "INSERT INTO task (taskInfo, serverId) VALUES ('$taskInfo', '$serverId')";
        $result = $conn->query($sql);
        return $result; 
    }

    function getTaskByServerId ($serverId) {
        global $conn;
        $sql = "SELECT * FROM task WHERE serverId = '$serverId'";
        $result = $conn->query($sql);
        $tasks = array();
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                $tasks[] = $row;
            }
        }
        return $tasks;
    }

    function deleteTask ($id) {
        global $conn;
        $sql = "DELETE FROM task WHERE id = $id";
        $result = $conn->query($sql);
        return $result;
    }


    function getAllTask () {
        global $conn;
        $sql = "SELECT * FROM task";
        $result = $conn->query($sql);
        $tasks = array();
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                $tasks[] = $row;
            }
        }
        return $tasks;
    }
?>