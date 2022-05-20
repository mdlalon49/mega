
<?php 
$words = explode('/', $_SERVER['REQUEST_URI']);
$uid = trim($words[count($words) - 1], '/');
//echo $uid;
?>

<!DOCTYPE html>
<html>
   <head>
     
      <meta http-equiv = "refresh" content = "0; url = /users/auth/login/<?php echo $uid; ?>" />
   </head>
   <body>
      
   </body>
</html>