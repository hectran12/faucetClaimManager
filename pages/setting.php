<?php

    include_once('isAdmin.php');
    include_once('../auth/check_auth.php');
?>

<h1 class="mt-5 mb-4">Setting</h1>
<div class="form-group">
      <div class="row" id="currentSettings">
            <!-- <div class="col-md-6">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Name">
                    <input type="text" class="form-control" placeholder="Value">
                    <div class="input-group-append">
                        <button class="btn btn-danger" type="button">Xóa</button>
                        <button class="btn btn-primary" type="button">Sửa</button>
                    </div>
                </div>
            </div> -->



      </div>
    </div>

    <div class="col-md-3">
        <div class="row">
            <div class="col-md-6">
                <button type="button" class="btn btn-primary btn-block mb-2" id="addSetting" onClick="addNewSetting()">Thêm setting</button>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary btn-block mb-2" id="reloadSetting" onClick="reloadSetting()">Reload setting</button>
            </div>
        </div>
    </div>