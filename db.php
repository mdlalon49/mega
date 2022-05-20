<?php
    $servername='localhost';
    $username='megapers_hossin24';
    $password='megapers_hossin24';
    $dbname = "megapers_hossin24";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn){
          die('Could not Connect MySql Server:' .mysql_error());
        }
?>