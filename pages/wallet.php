<?php

    include_once('isAdmin.php');
    include_once('../auth/check_auth.php');
?>


<div class="container mt-5">
<h1 style="font-weight: bold; color: blue;">Quản lý ví claim</h1>
    <hr>
    <h2>Danh sách ví hiện tại</h2>
    <br>
    <div class="form-group">
      <div class="row" id="currentWallet">
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
                <button type="button" class="btn btn-primary btn-block mb-2" id="addCurrentWallet" onClick="addNewWallet('0')">Thêm ví</button>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary btn-block mb-2" id="reloadCurrentWallet" onClick="reloadWallet()">Reload ví</button>
            </div>
        </div>
    </div>


    <hr>
    <h2>Danh sách ví ref</h2>
    <br>
    <div class="form-group">
      <div class="row" id="refWallet">
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
                <button type="button" class="btn btn-primary btn-block mb-2" id="addRefWallet" onClick="addNewWallet('1')">Thêm ref</button>
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary btn-block mb-2" id="reloadRefWallet" onClick="reloadWallet()">Reload ref</button>
            </div>
        </div>
    </div>
</div>




  <script>
  </script>