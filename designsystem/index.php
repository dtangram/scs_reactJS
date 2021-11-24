<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en" prefix="og: http://ogp.me/ns#">
<!--<![endif]-->
  <head>
    <meta property="og:title" content="SCS Design System" />
    <meta name="image" property="og:image" content="http://www.scsk12.org/designsystem/img/designSysHeroImg.jpg" />
    <meta name="author" content="Douglas T. Angram" />
    <meta property="og:description" content="Student in front of computers" />
    <meta property="og:url" content="http://www.scsk12.org/designsystem/img/" />

    <title>SCS Design System</title>
    <?php include("../template-includes/db-connection.php");?>
    <?php include("includes/department-id.php");?>
    <?php include("../template-includes/meta-title.php");?>
    <?php include("../css/css-pack.php"); ?>
    <?php include("../js/jquery-head.php");?>

    <style media="screen">
      html, body{
        background: #FFF;
        height: 100%;
        /* max-height: 4150px; */
        margin: 0;
        padding: 0;
        position: relative !important;
        overflow: hidden;
        width: 100%;
      }

      .goog-te-banner-frame {
        margin-top: 0em !important;
      }

      iframe{
        background: #FFF;
        border: 0;
        height: 100%;
        /* max-height: 4150px; */
        max-width: 2050px;
        overflow-y: scroll;
        width: 100%;
      }

      /* this will hide the scrollbar in webkit based browsers - safari, chrome, etc */
      iframe::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }
    </style>

    <link rel="stylesheet" href="css/miniCSS.css" />
  </head>

  <body>
    <!-- GOOGLE TRANSLATE -->
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
    <!-- <script src="js/jquery.selectBox.js" type="text/javascript"></script> -->
    <!---->
    <iframe src="http://www.scsk12.org/designsystem/reactjs/build/index.html#/"></iframe>

    <!--start footer-->

    <!--end footer-->

    <!--start jquerys-->
    <?php include("../template-includes/jquerys.php");?>
    <!--end jquerys-->

    <script type="text/javascript">
      jQuery(() =>
      {
        jQuery('a[href*=#]:not([href=#])').click(() =>
        {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
          {
            var target = jQuery(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length)
            {
              jQuery('html,body').animate({scrollTop: target.offset().top}, 2000);
              return false;
            }
          }
        });
      });

      const iframe = document.querySelector('iframe');
      const doc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;

      const anchors = doc.getElementsByTagName('a');
      for (let i = 0; i < anchors.length; i++) {
        anchors[i].target = '_parent';
      }
    </script>
  </body>
</html>
