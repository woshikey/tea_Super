<?php
	header("Access-Control-Allow-Origin:*");
    include 'conn.php';
	$id = $_GET['index'];
    $sql = "SELECT url,name FROM menu_pic WHERE id = $id";
    $result = mysql_query($sql);
    $arr = array();
    while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
        $arr[] = $row;
    }
    $json = array("code"=>1,"res_bady"=>$arr);
    echo json_encode($json);
	mysql_close(); 
?>