<?php
$cfg = $_GET["cfg"];
$data = $_GET["data"];

if ($cfg) {
	
	exec("echo \"$data\" >/boot/config/plugins/VMSwitcher/".$cfg, $output, $myreturn );
	if ($myreturn !== "0") {
		echo $cfg." created succesfully.\n";
	} else {
		echo "FAILED\n";
		echo "Return: $myreturn\n";
		print_r($output);
	}
}
?>
