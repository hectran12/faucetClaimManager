<?php

    try {
        $conn = new PDO("mysql:host=$dbHost;dbname=$dbName", $username, $password_db);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        die('Connection failed: ' . $e->getMessage());
    }


?>