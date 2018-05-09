<?php
require_once ('connect.php');
$query = "SELECT COIN, TIME FROM requests";
$result = @mysqli_query($dbc,$query);
$items = mysqli_fetch_all($result);
echo json_encode($items);