<?php include($_SERVER['DOCUMENT_ROOT'] ."../template-includes/variables.php");?>
<?php if(!$hideforcalendarcms){ ?>
<!--ZURB FOUNDATION 5-->
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>css/foundation.css" />
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>/foundation-icons/foundation-icons.css" />
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>js/foundation/app.js" />
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>css/ExpandingSearchBar/css/component.css" />
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>css/fonts.css" />

<!--BOOTSTRAP-->
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>bootstrap/icons/css/bootstrap.min.css">
<script type="text/javascript" href="<?php echo $newwebsiteurl;?>bootstrap/icons/js/bootstrap.min.js"></script>

<!--GOOGLE FONTS-->
<link href="//fonts.googleapis.com/css?family=Lato:400,100italic,100,300italic,300,400italic,700italic,700,900italic,900|Adamina:400" rel="stylesheet" type="text/css">
<link href="//fonts.googleapis.com/css?family=Open+Sans:300italic,300,400italic,400,600italic,600,700italic,700,800italic,800" rel="stylesheet" type="text/css">

<link href="https://fonts.googleapis.com/css?family=Oswald:600&display=swap" rel="stylesheet">
<!--JQUERY TOOL TIPS-->
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>jquery/CSS3tooltips/css/tooltip.css" />
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>css/jquery-ui.css">

<?php if ($slickSlider = true) { ?>
<!--SLICK SLIDER CAROUSEL-->
<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
<?php
}
?>

<?php if(!$hideme){ ?>
<!--FONT AWESOME-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- ANIMATE CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />

<!-- Jquery -->
<?php
}
if(!$hideJquery || !$hideme || !$hideforcalendarcms){ ?>
<!-- <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<!-- <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script> -->
<?php }
}
?>
<?php if(!$hideforcalendarcms){ ?>
<!--JQUERY HOVER -->
<link rel="stylesheet" type="text/css" href="<?php echo $newwebsiteurl;?>jquery/OriginalHoverEffects/css/style6.css" />

<!-- CUSTOM SCSS AND CSS -->
<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>css/application.css" />
<?php } ?>

<link rel="stylesheet" href="<?php echo $newwebsiteurl;?>css/hp-css.css" />
<link rel="stylesheet" type="text/css" media="print" href="<?php echo $newwebsiteurl;?>css/application.css" />

<?php
$user_agent     =   $_SERVER['HTTP_USER_AGENT'];

function getOS()
{
global $user_agent;

$os_platform    =   "Unknown OS Platform";

$os_array       =   array(
'/windows nt 10/i'     =>  'Windows 10',
'/windows nt 6.3/i'     =>  'Windows 8.1',
'/windows nt 6.2/i'     =>  'Windows 8',
'/windows nt 6.1/i'     =>  'Windows 7',
'/windows nt 6.0/i'     =>  'Windows Vista',
'/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
'/windows nt 5.1/i'     =>  'Windows XP',
'/windows xp/i'         =>  'Windows XP',
'/windows nt 5.0/i'     =>  'Windows 2000',
'/windows me/i'         =>  'Windows ME',
'/win98/i'              =>  'Windows 98',
'/win95/i'              =>  'Windows 95',
'/win16/i'              =>  'Windows 3.11',
'/macintosh|mac os x/i' =>  'Mac OS X',
'/mac_powerpc/i'        =>  'Mac OS 9',
'/linux/i'              =>  'Linux',
'/ubuntu/i'             =>  'Ubuntu',
'/iphone/i'             =>  'iPhone',
'/ipod/i'               =>  'iPod',
'/ipad/i'               =>  'iPad',
'/android/i'            =>  'Android',
'/blackberry/i'         =>  'BlackBerry',
'/webos/i'              =>  'Mobile'
);

foreach ($os_array as $regex => $value) {
if (preg_match($regex, $user_agent)) {
$os_platform    =   $value;
}
}

return $os_platform;
}

function getBrowser()
{
global $user_agent;

$browser        =   "Unknown Browser";

$browser_array  =   array(
'/msie/i'       =>  'Internet Explorer',
'/firefox/i'    =>  'Firefox',
'/safari/i'     =>  'Safari',
'/chrome/i'     =>  'Chrome',
'/edge/i'       =>  'Edge',
'/opera/i'      =>  'Opera',
'/netscape/i'   =>  'Netscape',
'/maxthon/i'    =>  'Maxthon',
'/konqueror/i'  =>  'Konqueror',
'/mobile/i'     =>  'Handheld Browser'
);

foreach ($browser_array as $regex => $value) {
if (preg_match($regex, $user_agent)) {
$browser    =   $value;
}
}

return $browser;
}


$user_os        =   getOS();
$user_browser   =   getBrowser();

$device_details =   "<strong>Browser: </strong>".$user_browser."<br /><strong>Operating System: </strong>".$user_os."";

if ($_GET['tb']) {
print_r($device_details);
}

?>

<!-- WINDOWS 7/8 USERS USING IE FIXES LOGO ISSUE -->
<?php if ($user_os == 'Windows 7' && $user_browser == 'Internet Explorer' || $user_os == 'Windows 8' && $user_browser == 'Internet Explorer' || $user_browser == 'Unknown Browser') {
?>
<style type="text/css">
.hp-scs-logo-text {
margin-top: -3.5em;
}
</style>
<?php
}

?>

<?php
// echo $baseURL;
//if($baseURL == 'D:\WebDocsMac\schools') {?>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-animate.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-route.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-sanitize.js"></script>

<!-- Waypoints -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.4/waypoints.min.js"></script> -->
<!-- Waypoints -->

<!-- CKEDITOR 5 -->
<link rel="stylesheet" href="/css/ckeditor5.css">
