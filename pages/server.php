<?php

    include_once('isAdmin.php');
    include_once('../auth/check_auth.php');
?>




<h1 class="mt-5">Danh sách server</h1>
    <div class="row mt-4">
      <div class="col">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Server <box-icon type='solid' name='cloud'></box-icon></th>
                <th>Info <box-icon name='info-circle' type='solid' ></box-icon></th>
                <th>Work <box-icon name='briefcase-alt-2' type='solid' ></box-icon></th>
                <th>Last Update <box-icon name='time' type='solid' ></box-icon></th>
                <th>Status <box-icon name='check-circle' type='solid' ></box-icon></th>
                <th>Action <box-icon name='cog' type='solid' ></box-icon></th>

              </tr>
            </thead>
            <tbody id="listServers">
              <!-- Server 1 -->
                <!-- <tr>
                    <td>1</td>
                    <td>Server 1</td>
                    <td>Server 1</td>
                    <td>Server 1</td>
                    <td>Server 1</td>
                    <td style="color: red">OFF</td>
                    <td>
                        <a href="server.php?server_id=1" class="btn btn-light">InfoRL<box-icon name='info-square' type='solid' ></box-icon></a>
                        <a href="server.php?server_id=1" class="btn btn-light">Off<box-icon name='power-off' ></box-icon></a>
                        <a href="server.php?server_id=1" class="btn btn-light">Run <box-icon name='run' ></box-icon></a>
                    </td>
                </tr> -->
                <!-- Server 2 -->
              <!-- Thêm các dòng khác ở đây nếu cần -->
            </tbody>
          </table>
        </div>

      </div>
    </div>