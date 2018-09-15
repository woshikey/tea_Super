<?php
	header("Access-Control-Allow-Origin:*");
    include 'conn.php';
	$username = $_POST['username'];
	$password = $_POST['password'];
	$sql = "INSERT INTO user (username,password) VALUES ('$username','$password')";
	$result = mysql_query($sql);
	if($result){
		echo '{"code":1}';
	}else{
		echo '{"code":0}';
	}
	mysql_close();
?>


