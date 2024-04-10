<?php

    include_once('isAdmin.php');
    include_once('../auth/check_auth.php');
?>



<div class="container mt-5">
    <h1 style="font-weight: bold; color: blue;">Quản lý Captcha</h1>
    <hr>

    <h2>Khóa key giải captcha (tạm thời là capsolver)</h2>
    <br> 
    
    <div class="form-group">
      <div class="row" id="listToken">
      </div>
      <br>
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-6">
                <button type="button" class="btn btn-primary btn-block mb-2" id="addNew" onClick="addNewToken()">Thêm mới</button>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary btn-block mb-2" id="reloadToken" onClick="reloadToken()">Reload</button>
            </div>
        </div>
    </div>
    </div>
  </div>



  <script>
  </script>