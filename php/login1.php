<?php
	header("Access-Control-Allow-Origin:*");
    include 'conn.php';
	$username = $_POST['username'];
	$sql="SELECT count(*) as totalData FROM user WHERE username='$username'";
	$result = mysql_query($sql);
	$dataTotal = mysql_fetch_assoc($result);
	if($dataTotal['totalData']!=0){
		echo '{"code":1}';
	}else{
		echo '{"code":0}';
	}
	mysql_close();
?>