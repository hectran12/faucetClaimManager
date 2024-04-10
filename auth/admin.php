<?php

    include_once('../utils/another.php');
    include_once('../sql/conn.php');
  
    class admin {
        public $cookies;

        public function __construct($cookies = '') {
            $this->cookies = $cookies;
        }

        public function setCookieUser () {
            setcookie('user', '', time() - 3600);
            $newCookie = randomStr();
            setcookie('user', $newCookie, time() + 3600);
            $this->cookie = $newCookie;

            return $newCookie;
        }

        public function saveCookieToDB () {
            global $conn;

            // db constructor
            // cookies (
            //     type_user TEXT,
            //     cookie TEXT
            // );
      
            // check value type_user = admin

            $sql = "SELECT * FROM cookies WHERE type_user = 'admin'";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            // if null to insert
            if ($result == null) {
                $sql = "INSERT INTO cookies (type_user, cookie) VALUES ('admin', :cookie)";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':cookie', $this->cookie);
                $stmt->execute();
            } else {
                $sql = "UPDATE cookies SET cookie = :cookie WHERE type_user = 'admin'";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':cookie', $this->cookie);
                $stmt->execute();
            }
            return $this->cookie;

        }


        public function changeCookieAdmin () {
            global $conn;

            $sql = "UPDATE cookies SET cookie = :cookie WHERE type_user = 'admin'";
            $cookie = randomStr();
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':cookie', $cookie);
            $stmt->execute();

            return $cookie;
        }

        public function vaildCookie () {
            global $conn;

            $sql = "SELECT * FROM cookies WHERE type_user = 'admin'";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result['cookie'] == $this->cookies) {
                return true;
            } else {
                return false;
            }
        }
        
    }




?>