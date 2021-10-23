
<script src="js/jquery.selectBox.js" type="text/javascript"></script>
<!-- <img alt="SCS Logo" style="margin-top:-.3em;height: 3.5em;" src="http://www.scsk12.org/img/hub-logo.svg"> -->
<!-- <img alt="SCS Logo" style="margin-top: -.2em;height: 4em;" src="http://www.scsk12.org/img/employee/2019/SCS-2019-logo2.svg"> -->
<?php if($_GET['TWB']){
$testwhitebg = ' style="background: rgb(255, 255, 255);"';
$headerredlogo = '<a href="'.$newwebsiteurl.'" style="text-decoration: none;" class="SCS-logo-focus" id="SCS-logo-focus" tabindex="6">
<img style="margin-top:-.3em;" src="'.$newwebsiteurl.'img/home-page/scs-logo-w-large-text-RED.png" alt="Shelby County Schools Logo"/>></a>';

$changetheme = 'color:#333;';
} elseif($_GET['LP'] == 'employee') {
$headerredlogo = '<a href="'.$newwebsiteurl.'" style="text-decoration: none;" class="SCS-logo-focus" id="SCS-logo-focus" tabindex="6">
<img src="http://www.scsk12.org/img/home-page/scs-log-small-90.png" class="SCS-logo-round-Employee-HUB" alt="Shelby County Schools Employee Hub Logo"/> <div class="SCS-Employee-HUB-logo" style="
    text-transform: none;
"><span style="font-weight: bold;color: #fff;
">Employee</span> HUB</div></a>
';
$changetheme = 'color:#FFF;';
} else {
$headerredlogo = '<a href="'.$newwebsiteurl.'" style="text-decoration: none;" class="SCS-logo-focus" id="SCS-logo-focus" tabindex="6">
<img id="SCSlogoRound" src="http://www.scsk12.org/img/home-page/scs-log-small-90.png" class="SCS-logo-round" alt="Shelby County Schools Logo"/> <div id="SCS-logo" class="SCS-logo">Shelby County Schools</div>
</a><div id="SCSlogoRound">
</div>';
$changetheme = 'color:#FFF;';
}
?>

<!--header start-->
<header id="hp-header" class="move-header"<?php //echo $testwhitebg;?>>
<div class="row" <?php if($_GET['LP']=='employee'){?>style="max-width: 67rem;"<?php }?>>

<div class="small-12 columns hp-scs-logo-text">
<?php echo $headerredlogo; ?>
</div>


</header>
<!--end header-->
