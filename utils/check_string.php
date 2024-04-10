<?php




    function checkXSS ($string) {
        $string = str_replace("<", "&lt;", $string);
        $string = str_replace(">", "&gt;", $string);
        return $string;
    }


    function checkSQL ($string) {
        $string = str_replace("'", "\'", $string);
        $string = str_replace('"', '\"', $string);
        return $string;
    }


    function checkString ($string) {
        $string = checkXSS($string);
        $string = checkSQL($string);
        return $string;
    }


    
    

?>