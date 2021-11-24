<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en" prefix="og: http://ogp.me/ns#">
<!--<![endif]-->
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YWWM2GKH68"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-YWWM2GKH68');
    </script>
    <!--END GOOGLE ANALYTICS -->

    <meta property="og:title" content="SCS Spanish Hub" />
    <meta name="image" property="og:image" content="http://www.scsk12.org/espanolNew/img/espanolImg2.jpg" />
    <meta name="author" content="Douglas T. Angram" />
    <meta property="og:description" content="Hispanic students" />
    <meta property="og:url" content="http://www.scsk12.org/espanolNew/img/" />

    <title>SCS Español</title>
    <?php include("../template-includes/db-connection.php");?>
    <?php include("includes/department-id.php");?>
    <?php include("../template-includes/meta-title.php");?>
    <?php include("../css/css-pack.php"); ?>
    <?php include("../js/jquery-head.php");?>

    <style media="screen">
      /* html, body{
        background: #FFF;
        height: 100%;
        margin: 0;
        padding: 0;
        position: relative !important;
        overflow: hidden;
        width: 100%;
      } */

      a {
        font-weight: bold;
      }

      main{
        position: relative;
      }

      iframe{
        background: #FFF;
        border: 0;
        height: 3400px;
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

      footer{
        bottom: 0;
      }

      footer .connect-with-us-row > section > section:nth-child(1){
        padding: 0;
      }

      footer .connect-with-us-row > section > section h3{
        text-align: left;
      }

      footer p{
        font-size: 0.7em;
        color: #FFF;
        padding: 5px 0 0 !important;
        text-align: center;
        padding: 1em;
      }

      .bottom p{
        margin-bottom: 0;
      }

      @media only screen and (max-width: 1010px){
        .template-page-style {
          padding: 0 1em;
        }
      }

      @media only screen and (max-width: 980px){
        .template-page-style {
          padding: 0;
        }
      }

      @media only screen and (min-width: 768px) and (max-width: 938px){
        iframe{
          height: 4800px;
        }
      }

      @media only screen and (max-width: 767px){
        iframe{
          height: 5180px;
        }
      }

      @media only screen and (max-width: 525px){
        iframe{
          height: 5320px;
        }
      }
    </style>

    <script type="text/javascript">
      <!--
      function FP_jumpMenu(el,frm,sel) {//v1.0
       var href=el.options[el.selectedIndex].value; if(sel) el.selectedIndex=0;
       if('_new'==frm) open(href); else eval(frm+".location='"+href+"'");
      }
      // -->
    </script>

    <!--CONNECT WITH US -->
    <script type="text/javascript">
      function MM_swapImgRestore() { //v3.0
      var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
      }
      function MM_preloadImages() { //v3.0
      var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
      var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
      if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
      }

      function MM_findObj(n, d) { //v4.01
      var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
      d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
      if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
      for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x=d.getElementById(n); return x;
      }

      function MM_swapImage() { //v3.0
      var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
      if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
      }
    </script>
    <!-- Go to www.addthis.com/dashboard to customize your tools -->

    <!-- GOOGLE ANALYTICS -->
    <!-- <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-45216310-1', 'auto');
      ga('send', 'pageview');
    </script> -->
    <!--END GOOGLE ANALYTICS -->
  </head>

  <body>
    <!--header start-->
    <?php include("../template-includes/header.php");?>
    <!--end header-->

    <!-- Top Bar -->
    <?php include("../template-includes/nav.php");?>
    <!--end Top Bar-->

    <!--start container-->
    <main role="main" id="container contain-to-grid" style="position: relative">
      <!--start middle row-->
      <article id="resizer" class="row">
        <section class="large-12 medium-12 small-12 columns template-page-style">
          <?php include("../template-includes/breadcrumbs.php");?>

          <div class="scroll-top-wrapper ">
            <span class="scroll-top-inner">
              <i class="fa fa-chevron-up"></i>
            </span>
          </div>

          <iframe src="http://www.scsk12.org/espanolNew/reactjs/build/"></iframe>
        </section>
      </article>

      <!--start footer-->
      <footer>
        <article class="connect-with-us-row">
          <section class="row hp-social">
            <!-- CONNECT WITH US -->
            <section class="large-4 columns">
              <h3>CONNECT WITH US</h3>
            </section>

            <article class="large-4 medium-12 columns">
              <ul class="tt-wrapper small-block-grid-7">
                <li>
                  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5507080617217237" async="async"></script>
                </li>

                <li>
                  <a class="hp-social-icon" href="https://www.facebook.com/SCSK12Espanol/" target="_blank" class="hp-social-icon" onMouseOver="MM_swapImage('facebook','','<?php echo $newwebsiteurl;?>img/icons/silo/facebook i s b2.png',1)" onMouseOut="MM_swapImgRestore()">
                    <img id="facebook" alt="Facebook icon" src="<?php echo $newwebsiteurl;?>img/icons/silo/facebook i s w.png"><span>Facebook</span>
                  </a>
                </li>

                <li>
                  <a class="hp-social-icon" href="https://twitter.com/SCSK12Espanol?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3ASCSK12Espanol&ref_url=http%3A%2F%2Fwww.scsk12.org%2Fespanol%2FindexTest.php" target="_blank" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('twitter','','<?php echo $newwebsiteurl;?>img/icons/silo/twitter i s w b2.png',1)">
                    <img id="twitter" alt="Twitter icon" src="<?php echo $newwebsiteurl;?>img/icons/silo/twitter i s w.png"><span>Twitter</span>
                  </a>
                </li>

                <li>
                  <a class="hp-social-icon" href="https://youtube.com/playlist?list=PLLFMsstY630Ezz9qQS5zOnzm5wQrJq0sK" target="_blank" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('youtube','','<?php echo $newwebsiteurl;?>img/icons/silo/youtube i s w r2',1)">
                    <img id="youtube" alt="YouTube icon" src="<?php echo $newwebsiteurl;?>img/icons/silo/youtube i s w.png"><span>YouTube</span>
                  </a>
                </li>
              </ul>
            </article>

            <article class="large-4 columns">
              <h3 style="font-weight: bold;font-size: 1em;color: #FFF;text-align: center;margin-top: .5em"><span style="font-weight: normal;font-size: 1em;color: #FFF;text-align: center;text-transform:capitalize;margin-top: .5em">
              <!--<a class="TCC-btn-hp" href="#" onclick="window.open('http://209.95.34.65:2199/player/915585f1357f9b5','radioplayer','resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes,toolbar=no'); return false;"><span class="glyphicon glyphicon-headphones"> </span> Listen Live</a>-->
              </span> <a class="TCC-btn-hp" href="http://voiceofscs.com" target="_blank"><span style="
              width: .1em;
              height: 1.2em;
              margin: .2em .5em 0 .5em;
              padding: 0;
              display: inline-block;"> </span><span class="glyphicon glyphicon-film"> </span> C19TV</a> <span style="
              width: .1em;
              height: 1.2em;
              margin: .2em .5em 0 .5em;
              padding: 0;
              display: inline-block;"> </span> <a class="TCC-btn-hp" href="http://voiceofscs.com/listen/" target="_blank"><span class="glyphicon glyphicon-music"></span> 88.5FM</a></h3>
            </article>
          </section>
        </article>
        <!--END CONNECT WITH US -->


        <article class="top">
          <section class="row footer-graphic">
            <article class="medium-4 columns">
              <p style="color: #FFF;
              padding: 1.1em;"><span style="font: bold 17px/1.2 'Open Sans', sans-serif;text-shadow: 1px 1px rgba(0,0,0,0.5);">Shelby County Schools</span> <br>
              <span class="fi-marker"></span> 160 S. Hollywood St.<br>
              Memphis, TN 38112 <br>
              Main: <span class="fi-telephone"></span> (901) 416-5300<br />
              Email: <a href="mailto:scshelp@scsk12.org"><i class="fa fa-envelope" aria-hidden="true" style="color:#FFF;"></i>
              <span style="color:#FFF;">scshelp@scsk12.org</span></a></p>
            </article>

            <figure class="medium-3 columns"> <img src="<?php echo $newwebsiteurl;?>img/home-page/scs-log-small.png" width="120" height="127" alt="Homepage icon"/></figure>
          </section>
        </article>

        <section class="bottom">
          <p>Shelby County Schools offers educational and employment opportunities without regard to race, color, religion, sex, creed, age, disability, national origin, or genetic information.</p>
        </section>
      </footer>

      <!-- Go to www.addthis.com/dashboard to customize your tools -->
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5507080617217237"></script>



      <!--end footer-->
      <?php

        mysql_close($conn);
        mysql_close($dbconn);

      ?>
      <!--end footer-->
    </main>

    <!--end container & resizer -->

    <!-- <script src="js/index.js" type="text/javascript"></script> -->

    <!--start jquerys-->
    <?php include("../template-includes/jquerys.php");?>
    <!--end jquerys-->

    <script>
      $(function(){
        $(document).on( 'scroll', function(){
          if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
          } else {
            $('.scroll-top-wrapper').removeClass('show');
          }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
      });

      function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
      }
    </script>

    <script type="text/javascript">
      const iframe = document.querySelector('iframe');
      const doc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;

      const anchors = doc.getElementsByTagName('a');
      for (let i = 0; i < anchors.length; i++) {
        anchors[i].target = '_parent';
      }
    </script>
  </body>
</html>
