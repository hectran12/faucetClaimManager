
<?php
    include_once('../helper/settingHelper.php');
    echo "\n";
    if(isset($_POST['id']) && isset($_POST['name']) && isset($_POST['value'])) {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $value = $_POST['value'];
        $result = editSetting($id, $name, $value);
        if ($result) {
            echo json_encode(array('status' => 'success', 'message' => 'Edit setting successfully'));
        } else {
            echo json_encode(array('status' => 'error', 'message' => 'Edit setting failed'));
        }
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Edit setting failed'));
    }