<?php

    include_once('isAdmin.php');
    include_once('../auth/check_auth.php');
?>


<h1>Add new site</h1>
<br>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Site name: </span>
  </div>
  <input type="text" class="form-control" placeholder="input site name" id="siteName" aria-label="site name" aria-describedby="basic-addon1">
</div>


<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">URL: </span>
  </div>
  <input type="text" class="form-control" placeholder="input site url" id="urlSite" aria-label="urlSite" aria-describedby="basic-addon1">
</div>



<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">COIN CLAIM: </span>
  </div>
  <input type="text" class="form-control" placeholder="input coin claim" id="coinClaim" aria-label="coinClaim" aria-describedby="basic-addon1">
</div>


<select class="form-select" aria-label="selectProgressTool" id="statusProgressTool">
</select>

<br>
<br>
<button type="button" class="btn btn-dark" id="addNewSite" data-function-site-claim="addNewSite" >ADD</button>





<hr>

<table class="table">
<table class="table table-bordered">
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID_TOOL</th>
      <th scope="col">SITE NAME</th>
      <th scope="col">SITE ADDRESS</th>
      <th scope="col">COIN CLAIM</th>
      <th scope="col">STATUS</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody id="allSites">
    <!-- <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> -->
  </tbody>
</table>