<?php
	header("Access-Control-Allow-Origin:*");
	include "conn.php";
	//每页数据多少条
	$dataAmount = $_GET["dataAmount"];
	//点击的页数
	$index = $_GET["index"];
	
	//计算LIMIT第一个参数$startInde
	$startIndex = ($index-1)*$dataAmount;
	$sql = "SELECT * FROM list LIMIT ".$startIndex.",".$dataAmount;
	$result = mysql_query($sql);
	$sqlNum = "SELECT count(*) as totalData FROM list";
	//$dataTotal为资源类型数据,总数据量
	$dataTotal = mysql_query($sqlNum);
	//用mysql_fetch_assoc()转化资源类型数据
	$dataTotal = mysql_fetch_assoc($dataTotal);
	$arr = array();
	while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		$arr[]=$row;
	}
	$json = array("code"=>1,"res_totalNum"=>$dataTotal['totalData'],"res_bady"=>$arr); 
	
	echo json_encode($json);
	mysql_close();
?>


