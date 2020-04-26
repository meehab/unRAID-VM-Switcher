<?php
$cfg = $_GET["cfg"];
$data = $_GET["data"];

if ($cfg) {
	
	exec("echo \"$data\" >/boot/config/plugins/VMSwitcher/".$cfg."xml", $output, $myreturn );
	if ($myreturn !== "0") {
		echo $cfg."xml created succesfully.\n";
	} else {
		echo "FAILED\n";
		echo "Return: $myreturn\n";
		print_r($output);
	}
}
?>
