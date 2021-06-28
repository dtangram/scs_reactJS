<?php include("variables.php");
$newwebsiteurl = '/';
?>

<div id="ct-topbar" class="ct-topbar">
<div class="container">
<ul id="translator" class="list-unstyled list-inline ct-topbar__list">
<li class="ct-language" style="cursor: pointer;">Translate our website <i class="fa fa-chevron-down" aria-hidden="true" style="cursor:pointer;color: #a1beff;"></i>
<ul role="menu" class="list-unstyled ct-language__dropdown">
<li><a role="menuitem" href="#googtrans(en|en)" class="lang-en lang-select" data-lang="en" tabindex="1">
English<span class="sr-only">English Translate</span></a></li>

<li><a role="menuitem" href="#googtrans(en|es)" class="lang-es lang-select" data-lang="es" tabindex="2">
Spanish<span class="sr-only">Spanish Translate</span></a></li>

<li><a role="menuitem" href="#googtrans(en|fr)" class="lang-fr lang-select" data-lang="fr" tabindex="3">
French<span class="sr-only">French Translate</span></a></li>

<li><a role="menuitem" href="#googtrans(en|vi)" class="lang-vi lang-select" data-lang="vi" tabindex="4">
Vietnamese<span class="sr-only">Vietnamese Translate</span></a></li>

<li><a role="menuitem" href="#googtrans(en|ar)" class="lang-vi lang-select" data-lang="vi" tabindex="5">
Arabic<span class="sr-only">Arabic Translate</span></a></li>
</ul>
</li>
</ul>
</div>
</div>

<script>
$(document).ready(function() {
// Get the input field
var input = document.getElementById("translator");
// hides translator menu after the logo is tabbed into focus
var hideinput = document.getElementById("SCS-logo-focus");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode === 13 || event.keyCode === 9) {
// Cancel the default action, if needed
event.preventDefault();
// Trigger the button element with a click
$('.ct-language__dropdown').addClass('translator-display');
}
});

$(".lang-vi").focusout(function(){
  $(".ct-language__dropdown").removeClass('translator-display');
});

hideinput.addEventListener("keyup", function(event) {
// Number 9 is the "Enter" key on the keyboard
if (event.keyCode === 13 || event.keyCode === 9) {
// Trigger the button element with a click
$(".ct-language__dropdown").removeClass('translator-display');
}
});

});

</script>

<script type="text/javascript">
function googleTranslateElementInit() {
new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
}

function triggerHtmlEvent(element, eventName) {
var event;
if (document.createEvent) {
event = document.createEvent('HTMLEvents');
event.initEvent(eventName, true, true);
element.dispatchEvent(event);
} else {
event = document.createEventObject();
event.eventType = eventName;
element.fireEvent('on' + event.eventType, event);
}
}

jQuery('.lang-select').click(function() {
var theLang = jQuery(this).attr('data-lang');
jQuery('.goog-te-combo').val(theLang);

//alert(jQuery(this).attr('href'));
window.location = jQuery(this).attr('href');
location.reload();
});

</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<div id="top" class="main-nav contain-to-grid fix-nav-scroll">
<nav class="top-bar" data-topbar role="navigation" <?php if($_GET['LP']=='employee'){?>style="max-width: 67rem;"<?php }?>>
<ul class="title-area">
<?php //highlights landing page links red
$LP = $_GET['LP'];
//$hp_nav_active_home = 'style="color: rgb(253, 63, 63) !important;"';
// $hp_nav_active = 'style="color: rgb(253, 63, 63) !important;"';
// DEFAULT
// $hp_nav_active_home = 'style="color: #E90101 !important;"';
// $hp_nav_active_home = 'style="color: #fff !important;"';
// $hp_nav_active = 'style="color: #fff !important;"';
?>
<li class="name <?php //if(!$LP){?>hp-nav-active<?php //}?>"></li>
<!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
<li class="left toggle-topbar"><a href="#"><span style="color:#FFF;
margin-left: -6em;position: absolute;">Menu </span></a></li>

<div id="nav-icon3" class="toggle-topbar">
<span></span>
<span></span>
<span></span>
<span></span>
</div>

<script>
$(document).ready(function(){
$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  $(this).toggleClass('open');
});
});
</script>
</ul>
<section id="hp-nav" class="top-bar-section">
<!-- Right Nav Section -->
<ul class="left" style="padding-top: .3em;">
<?php
if ($_GET['t']) {
echo dirname(__FILE__);
}
?>
<li><a <?php if (!$LP) { echo $hp_nav_active; }?> href="http://www.scsk12.org<?php echo $newwebsiteurl;?>?LP=<?php if ($_GET['TWB']) {
?>&TWB=<?php echo $_GET['TWB'];
}?>" tabindex="7">Home</a></li>
<li><a <?php if ($LP=='schools' ) { echo $hp_nav_active; }?> href="http://www.scsk12.org<?php echo $newwebsiteurl;?>schools?LP=schools<?php if ($_GET['TWB']) {
?>&TWB=<?php echo $_GET['TWB'];
}?>" tabindex="8">Schools</a></li>

<?php if ($sp) { ?>

<li><a <?php if ($LP=='students' ) { echo $hp_nav_active; } ?> href="studentsandparents" rel="relativeanchor" tabindex="9">Students & Parents</a></li>

<?php } else { ?>

<li><a <?php if ($LP=='students' ) { echo $hp_nav_active; } ?> href="<?php echo $newwebsiteurl; ?>#studentsparents" rel="relativeanchor" tabindex="10">Students & Parents</a></li>
<?php } ?>

<li><a <?php if ($LP=='employee' ) { echo $hp_nav_active; }?> href="http://www.scsk12.org<?php echo $newwebsiteurl;?>?LP=employee<?php if ($_GET['TWB']) {
?>&TWB=<?php echo $_GET['TWB'];
}?>" tabindex="11">Employees</a></li>

<li><a href="http://www.scsk12.org/newsroom" tabindex="12">Newsroom</a></li>
<li><a <?php if ($LP=='careers' ) { echo $hp_nav_active; }?> href="http://www.scsk12.org<?php echo $newwebsiteurl;?>choosescs<?php if ($_GET['TWB']) {
?>&TWB=<?php echo $_GET['TWB'];
}?>" tabindex="13">Careers</a></li>

<li class="has-form" style="padding:0;">
<div class="row collapse">
<form id="scsSearchForm" class="hp-search-mb" method="POST" action="<?php echo $newwebsiteurl;?>search/" id="searchform">
<label for="searchform"><span id="search-website" class="search-website">Search Website</span></label>
<input id="searchform" class="hp-search-input"  type="text" onkeyup="showHint(this.value)" name="searchform" placeholder="" onfocus="this.placeholder = ''" onblur="this.placeholder = ''" x-webkit-speech tabindex="14">
<?php if ($_GET['S']) {
echo '<p>Suggestions: <span id="txtHint"></span></p>';
}?>
</form>
</div>
</li>
</ul>
</section>
</nav>
</div>

<script>
$('#search-website').hover(
  function(){ $(this).addClass('hide-search-website') })

$('#searchform').hover(
  function(){ $(this).addClass('display-search-input') }
)
$('#searchform').hover(
  function(){ $(this).removeClass('hp-search-input')
}
)
</script>
