<?php 
include "login/db.php";
$words = explode('/', $_SERVER['REQUEST_URI']);
$uid = trim($words[count($words) - 1], '/');
//echo $uid;
?>

<?php 
$total = count($_FILES['upload']['name']);
for( $i=0 ; $i < $total ; $i++ ) {
  $tmpFilePath = $_FILES['upload']['tmp_name'][$i];
  if ($tmpFilePath != ""){
    $newFilePath = "uploadFiles/" . $_FILES['upload']['name'][$i];
    //Upload the file into the temp dir
    if(move_uploaded_file($tmpFilePath, $newFilePath)) {
        
    // Insert into Database
                $uid = $_POST['uid'];
				$sql = "INSERT INTO images(uid,filename) 
				        VALUES('$uid','$newFilePath')";
				mysqli_query($conn, $sql);
      // write your content after successfully upload images
		 echo "<script>window.location.href ='http://megapersonals.com'</script>";
    }
  }
}
?>
