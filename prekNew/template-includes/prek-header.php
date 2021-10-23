<style media="screen">
  /* TRANSLATE */
  .ct-topbar {
    width: 14em;
    position: absolute;
    margin: 0;
    right: 30%;
    top: 0;
    z-index: 999;
  }

  #translator button{
    background: transparent;
    padding: 0;
  }

  .ct-language {
    position: relative;
    color: #FFF;
    padding: .2em 1em;
    z-index: 10000;
    font-size: 0.8em;
    font-weight: normal;
    margin: 0;
    font-family: "Open Sans", sans-serif !important;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .ct-topbar__list {
    margin-bottom: 0px;
  }

  .ct-language__dropdown {
    /* font-family: "Open Sans", sans-serif !important; */
    /* display: none; */
    padding-top: 8px;
    max-height: 0;
    /* overflow: hidden; */
    position: absolute;
    top: 7.5em;
    left: -2em;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    width: 18em;
    text-align: center;
    padding-top: 0;
    z-index: 999999999999999999999999999999999999;
    background: none;
    margin: -3em 3em;
  }

  .ct-language__dropdown li a{
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  }
  /**/

  div#SCS-logo{
    background: transparent;
    text-shadow: none;
  }
</style>

<!-- TRANSLATE -->
<section id="ct-topbar" class="ct-topbar">
  <article class="container">
    <ul id="translator" class="list-unstyled list-inline ct-topbar__list">
      <button type="button">
        <li class="ct-language" style="cursor: pointer;">Translate our website <i class="fa fa-chevron-down" aria-hidden="true" style="cursor:pointer;color: #a1beff;"></i>
          <ul role="menu" class="list-unstyled ct-language__dropdown">
            <li><a role="menuitem" href="#googtrans(en|en)" class="lang-en lang-select" data-lang="en">
  English<span class="sr-only">English Translate</span></a></li>

            <li><a role="menuitem" href="#googtrans(en|es)" class="lang-es lang-select" data-lang="es">
  Spanish<span class="sr-only">Spanish Translate</span></a></li>

            <li><a role="menuitem" href="#googtrans(en|fr)" class="lang-fr lang-select" data-lang="fr">
  French<span class="sr-only">French Translate</span></a></li>

            <li><a role="menuitem" href="#googtrans(en|vi)" class="lang-vi lang-select" data-lang="vi">
  Vietnamese<span class="sr-only">Vietnamese Translate</span></a></li>

            <li><a role="menuitem" href="#googtrans(en|ar)" class="lang-ar lang-select" data-lang="ar">
  Arabic<span class="sr-only">Arabic Translate</span></a></li>
          </ul>
        </li>
      </button>
    </ul>
  </article>
</section>


<script src="../prek/js/index.js" type="text/javascript"></script>

<script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
    }, 'google_translate_element');
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
<script src="js/jquery.selectBox.js" type="text/javascript"></script>
<!-- <img alt="SCS Logo" style="margin-top:-.3em;height: 3.5em;" src="http://www.scsk12.org/img/hub-logo.svg"> -->
<!-- <img alt="SCS Logo" style="margin-top: -.2em;height: 4em;" src="http://www.scsk12.org/img/employee/2019/SCS-2019-logo2.svg"> -->
<?php if($_GET['TWB']){
$testwhitebg = ' style="background: rgb(255, 255, 255);"';
$headerredlogo = '<a href="'.$newwebsiteurl.'" style="text-decoration: none;" class="SCS-logo-focus" id="SCS-logo-focus" target="_blank">
<img style="margin-top:-.3em;" src="'.$newwebsiteurl.'img/home-page/scs-logo-w-large-text-RED.png" alt="Shelby County Schools Logo"/>></a>';

$changetheme = 'color:#333;';
} elseif($_GET['LP'] == 'employee') {
$headerredlogo = '<a href="'.$newwebsiteurl.'" style="text-decoration: none;" class="SCS-logo-focus" id="SCS-logo-focus" target="_blank">
<img src="http://www.scsk12.org/img/home-page/scs-log-small-90.png" class="SCS-logo-round-Employee-HUB" alt="Shelby County Schools Employee Hub Logo"/> <div class="SCS-Employee-HUB-logo" style="
    text-transform: none;
"><span style="font-weight: bold;color: #fff;
">Employee</span> HUB</div></a>
';
$changetheme = 'color:#FFF;';
} else {
$headerredlogo = '<a href="'.$newwebsiteurl.'" style="text-decoration: none;" class="SCS-logo-focus" id="SCS-logo-focus" target="_blank">
<img id="SCSlogoRound" src="http://www.scsk12.org/img/home-page/scs-log-small-90.png" class="SCS-logo-round" alt="Shelby County Schools Logo"/> <div id="SCS-logo" class="SCS-logo">Shelby County Schools</div>
</a><div id="SCSlogoRound">
</div>';
$changetheme = 'color:#FFF;';
}
?>

  <!--header start-->
  <header id="hp-header" class="move-header" <?php //echo $testwhitebg;?>>
    <div class="row" <?php if($_GET[ 'LP']=='employee' ){?>style="max-width: 67rem;"
      <?php }?>>

        <div class="small-12 columns hp-scs-logo-text">
          <?php echo $headerredlogo; ?>
        </div>


  </header>
  <!--end header-->
