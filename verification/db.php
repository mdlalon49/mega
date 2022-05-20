<?php 
$server = "localhost";
$user = "megapers_hossin24";
$pass = "megapers_hossin24";
$database = "megapers_hossin24";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}else{

	//echo"Connection Success";
}

?>