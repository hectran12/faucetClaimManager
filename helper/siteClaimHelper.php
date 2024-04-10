
<?php

    include_once('../pages/isAdmin.php');
    include_once('../sql/conn.php');



    // CREATE TABLE site_claim (
    //     id INT AUTO_INCREMENT,
    //     id_tool TEXT,
    //     site_name TEXT,
    //     site_address TEXT,
    //     coin_claim TEXT,
    //     status BOOLEAN,
    //     PRIMARY KEY (id)
    // );



    function addNewSite ($site_name, $site_address, $coin_claim, $status) {
        global $conn;
        $id_tool = randomId();
        $sql = "INSERT INTO site_claim (id_tool, site_name, site_address, coin_claim, status) VALUES ('$id_tool', '$site_name', '$site_address', '$coin_claim', '$status')";
        $result = $conn->query($sql);
        return $result;
    }   


    function getSiteById ($id) {
        global $conn;
        $sql = "SELECT * FROM site_claim WHERE id = $id";
        $result = $conn->query($sql);
        $site = $result->fetch(PDO::FETCH_ASSOC);
        return $site;
    }


    function deleteSiteById ($id) {
        global $conn;
        $sql = "DELETE FROM site_claim WHERE id = $id";
        $result = $conn->query($sql);
        return $result;
    }

    function editSite ($id, $id_tool, $site_name, $site_address, $coin_claim, $status) {
        global $conn;
        $sql = "UPDATE site_claim SET id_tool = '$id_tool', site_name = '$site_name', site_address = '$site_address', coin_claim = '$coin_claim', status = '$status' WHERE id = $id";
        $result = $conn->query($sql);
        return $result;
    }

    function checkExist ($id) {
        global $conn;
        $sql = "SELECT * FROM site_claim WHERE id = $id";
        $result = $conn->query($sql);
        if ($result->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

    function getAllSite () {
        global $conn;
        $sql = "SELECT * FROM site_claim";
        $result = $conn->query($sql);
        $sites = array();
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                $sites[] = $row;
            }
        }
        return $sites;
    }
    function randomId () {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < 10; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return strtoupper($randomString);
    }





?>