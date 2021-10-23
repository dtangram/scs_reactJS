<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
  <head>
    <title>SCS Prek/Head Start</title>
    <?php include("../template-includes/db-connection.php");?>
    <?php include("includes/department-id.php");?>
    <?php include("../template-includes/meta-title.php");?>
    <?php include("../css/css-pack.php"); ?>
    <?php include("../js/jquery-head.php");?>

    <link href='https://fonts.googleapis.com/css?family=Lato:400,400italic,700,700italic' rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,400italic,700' rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css" />

    <style media="screen">
      /* @-webkit-keyframes popupH3 {
        0% {
          opacity: 0;
          margin-top: -100px; }
        100% {
          opacity: 1;
          margin-top: 350px; } }
      @-moz-keyframes popupH3 {
        0% {
          opacity: 0;
          margin-top: -100px; }
        100% {
          opacity: 1;
          margin-top: 350px; } }
      @-o-keyframes popupH3 {
        0% {
          opacity: 0;
          margin-top: -100px; }
        100% {
          opacity: 1;
          margin-top: 350px; } }
      @keyframes popupH3 {
        0% {
          opacity: 0;
          margin-top: -100px; }
        100% {
          opacity: 1;
          margin-top: 350px; } }



      @-webkit-keyframes popupClose {
        0% {
          display: none;
          opacity: 0;
          margin-top: -200px; }
        100% {
          display: block;
          opacity: 1;
          margin-top: 275px; } }
      @-moz-keyframes popupClose {
        0% {
          display: none;
          opacity: 0;
          margin-top: -200px; }
        100% {
          display: block;
          opacity: 1;
          margin-top: 275px; } }
      @-o-keyframes popupClose {
        0% {
          display: none;
          opacity: 0;
          margin-top: -200px; }
        100% {
          display: block;
          opacity: 1;
          margin-top: 275px; } }
      @keyframes popupClose {
        0% {
          display: none;
          opacity: 0;
          margin-top: -200px; }
        100% {
          display: block;
          opacity: 1;
          margin-top: 275px; } }

      .popup{
        background-color: rgba(0, 0, 0, 0.7);
        height: 4780px;
        position: fixed;
        text-align: center;
        top: 0;
        width: 100%;
        z-index: 2000;
      }

      .prekPopupH3{
        background: #234590;
        border: 3px solid #E90101;
        color: #FFF;
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 50px;
        margin: 350px auto 0;
        opacity: 1;
        padding: 30px 3%;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        width: 60%;
      }

      .btnHide, .h3Hide{
        display: none;
        opacity: 0;
      }

      .popupCloseBTN{
        background: transparent;
        color: #FFF;
        font-size: 1rem;
        font-weight: bold;
        margin-top: 275px;
        opacity: 1;
        position: absolute;
        right: 22%;
      }

      .popup > button:hover{
        text-decoration: underline;
      }

      .popupAnimation{
        position: relative;
        -webkit-animation: popupH3 1s ease-out;
        -moz-animation: popupH3 1s ease-out;
        -o-animation: popupH3 1s ease-out;
        animation: popupH3 1s ease-out;
        -webkit-transform-origin:center bottom;
        transform-origin:center bottom;
      }

      .popupCloseAnimation{
        -webkit-animation: popupClose 1s ease-out;
        -moz-animation: popupClose 1s ease-out;
        -o-animation: popupClose 1s ease-out;
        animation: popupClose 1s ease-out;
        -webkit-transform-origin:center bottom;
        transform-origin:center bottom;
      } */

      #top.main-nav section#hp-nav.top-bar-section ul.left li a[href="/prek"]{
        color: #F7DA47;
      }

      #top.main-nav section#hp-nav.top-bar-section ul.left li a[href="/prek"]::after{
        background-color: #E90101 !important;
        width: 80% !important;
      }

      #bckRotate li{
        display: none;
        opacity: 0;
        position: absolute;
        width: 100%;
        z-index: 1;
        /* height: 100%; */
      }

      #bckRotate li:nth-child(1){
        display: block;
      }

      #bckRotate li.previous{
        display: block;
        opacity: 1;
        z-index: 1;
      }

      #bckRotate li.current{
        display: block;
        opacity: 1;
        z-index: 2;
      }
    </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  </head>

  <body>

    <!--header start-->
    <?php include("../template-includes/header.php");?>
    <!--end header-->

    <!-- Top Bar -->
    <?php include("../template-includes/prek-nav.php");?>
    <!--end Top Bar-->

    <!--start container-->
    <!-- <div class="hero"></div> -->

    <!-- POPUP -->
    <!-- <section class="popup">
      <button type="button" class="btnHide">Close</button>

      <h3  class="h3Hide">
        2020-21 Pre-K Applications Are All Online
        <br />
        Online Applications Open March&nbsp;23
      </h3>
    </section> -->

    <!-- <p class="h3Hide">
      APPLY NOW FOR 2020-21 PRE-K CLASSES!
      <br />
      <span class="italics">Click here for complete details about student eligibility & application requirements.</span>
      <br />
      ¡APLIQUEN AHORA PARA LAS CLASES DE PREK PARA EL 2020-21!
      <br />
      <span class="italics">La aplicación está totalmente en línea. Obtenga requisitos y más info abajo.</span>
    </p> -->

    <!-- <article class="h3HideWrap">
      <p class="h3Hide">
        APPLY NOW FOR 2020-21 PRE-K CLASSES!
        <br />
        <span class="italics">The application is totally online. Get requirements & more info below.</span>
      </p>

      <p class="h3Hide">
        ¡APLIQUEN AHORA PARA LAS CLASES DE PREK PARA EL 2020-21!
        <br />
        <span class="italics">La aplicación está totalmente en línea. Obtenga requisitos y más info abajo.</span>
      </p>
    </article> -->

    <article id="bckWrap" class="large-12">
      <h1 class="larg-12 medium-12 small-12">
        Pre-K &
        <br />
        Head Start
        <figure class="graphic" alt="Small red, rectangle graphic."></figure>
      </h1>

      <!-- PLAY AND PAUSE IMAGE CAROUSEL -->
      <section class="playerControls">
        <button id="play" type="button" class="controlsBTN"><i class="fas fa-play controls"></i></button>
        <button id="pause" type="button" class="controlsBTN"><i class="fas fa-pause controls"></i></button>
      </section>

      <section class="arrowCTRL">
        <button id="leftArr" type="button" class="arrows"><i class="fas fa-chevron-left controlsArr"></i></button>
        <button id="rightArr" type="button" class="arrows"><i class="fas fa-chevron-right controlsArr"></i></button>
      </section>

      <!-- <p id="pause" style="color: white">pause</p> -->

      <figure id="downArr" class="larg-12 medium-12 small-12"><a href="#prekContainer"><img src="img/2019/downArr.png" alt="Red arrow pointing down"></a></figure>

      <section id="bck" aria-labelledby="bckRotate">
        <ul id="bckRotate">
          <li class="current"><img src="img/2019/prekImage1.jpg" alt="Pre-K students holding letters that spell the word, learn"></li>
          <li><img src="img/2019/prekImage2.jpg" alt="Group of pre-k students with their teachers"></li>
          <li><img src="img/2019/prekImage3.jpg" alt="Pre-K girls sitting down"></li>
          <li><img src="img/2019/prekImage4.jpg" alt="Group of pre-k students with their teachers"></li>
          <li><img src="img/2019/prekImage5.jpg" alt="Pre-K students working on smart tablet"></li>
        </ul>
      </section>
    </article>

    <article id="prekContainer">
      <section id="resizer" class="row">
        <article class="prekWrapper large-12 medium-12 small-12">
          <section class="large-12 prekIntro">
            <h2 class="prekH2">Begin the Journey
              <figure class="graphic" alt="Small red, rectangle graphic."></figure>
            </h2>

            <p>
              Is your 4-year-old future scholar ready to begin his or her education journey? Begin the journey with SCS Pre-K! Our Pre-K program is one of the first and most important steps families can take to ensure students are prepared for success in Kindergarten and beyond. We serve approximately 5,000 students each year at select elementary schools across Shelby County and multiple community partner sites. Every year, Pre-K students score higher in Kindergarten than many of their peers who did not take an early childhood program. Pre-K students also routinely outperform District goals for foundational skills, language and more.
            </p>
          </section>
        </article>
      </section>

      <section id="screenings" class="prekCopyContainer large-12 medium-12 small-12">
        <h2 class="prekH2">Pre-K Screening & Qualifications
          <figure class="graphic" alt="Small red, rectangle graphic."></figure>
        </h2>

        <section class="prekWrapStart large-12 medium-12 small-12">
          <h3 class="prekH3">
            2020-21 Pre-K Applications Are All Online
            <br />
            Online Applications Open March&nbsp;23
          </h3>

          <article class="large-5 medium-12 small-12 columns">
            <figure class="headerImage1"><img src="img/2019/prekHeaderImage1.jpg" alt="Pre-k team member at pre-k screening"></figure>
            <h3 class="prekH3">Pre-K Program Requirements</h3>

            <section>
              <ul>
                <li>SCS Pre-K is open children in Shelby County who turn 4 years-old on or before August 15.</li>
                <li>Parents must provide a current physical and immunization record.</li>
                <li>Priority will be given to students considered "at-risk," as defined by the State's guidelines.</li>
                <li>Parents of children admitted into the Pre-K program are required to participate in a mandatory parent orientation.</li>
                <li>Transportation is not provided by SCS.</li>
              </ul>
            </section>
          </article>

          <article class="large-5 medium-12 small-12 columns">
            <figure class="headerImage2"><img src="img/2019/prekHeaderImage2.jpg" alt="Another pre-k team member at pre-k screening"></figure>
            <h3 class="prekH3">Screening Dates & Checklist</h3>

            <section>
              <p>View upcoming Pre-K <a href="https://docs.google.com/document/d/1h6mk7GTTGKgvzz-uOpd58mlDyJEwRPBn8RlvJOIDLbA/edit" class="slideUnder" target="_blank">screening dates</a><br />
                for 2020-21 <a href="https://docs.google.com/document/d/1FH4wxldwQJmdcGIuA-YbnXYRxuVROm3Cx1ZNutxhe64/edit" class="slideUnder" target="_blank">(dates in Español)</a> for Pre-K screening.</p>
              <p>View the <a href="files/2020/WHAT-TO-BRING-ENGLISH.pdf" class="slideUnder" target="_blank">list of required items</a> <a href="files/2020/WHAT-TO-BRING SPAN.pdf" class="slideUnder" target="_blank">(list in Español)</a>.</p>

              <p>Important Reminders:</p>
              <ul>
                <li>The child must be present at the time of screening.</li>
                <li>Please bring the original, as well as two copies, of all items.</li>
                <li>No copies will be made at screening.</li>
              </ul>

              <p class="phoneNumber">For additional information, call <a href="tel:+19014163450" class="slideUnder">(901) 416-3450</a>.</p>
            </section>
          </article>
        </section>

        <figure class="prekWrapStartBck"></figure>
        <figure class="prekWrapStartOverlay"></figure>
      </section>

      <section class="prekImg">
        <section class="large-12 medium-12 small-12">
          <h2 class="prekH2">Begin the Journey to College and Career Readiness!</h2>
          <figure class="img901 large-5 medium-7 small-10"><img src="img/2019/WE are 901.png" alt="Logo of WE are 901"></figure>
        </section>
        <figure class="prekRequireBck"></figure>
        <figure class="prekOverlay"></figure>
      </section>
    </article>



    <script type="text/javascript">
      // const popup = $(".popup"),
      //       popH3 = $(".popup > h3"),
      //       close = $(".popup > button");
      //
      // /*POPUP*/
      //
      // popH3.removeClass("h3Hide").addClass("prekPopupH3 popupAnimation");
      // close.removeClass("btnHide").addClass("popupCloseBTN popupCloseAnimation");
      //
      // close.click(function(){
      //   close.stop().animate({"opacity": "0", "margin-top": "-200"}, 500,
      //   function(){
      //     popup.stop().animate({"opacity": "0"}, 500,
      //     function(){
      //       popup.css("display", "none");
      //     })
      //   });
      //
      //   popH3.stop().animate({"opacity": "0", "margin-top": "-100"}, 500,
      //   function(){
      //     popup.stop().animate({"opacity": "0"}, 500,
      //     function(){
      //       popup.css("display", "none");
      //     })
      //   });
      // });

      jQuery(function()
      {
        jQuery('a[href*=#]:not([href=#])').click(function()
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

      /*ROTATING BACKGROUND IMAGE*/
      // $("#bckRotate li:gt(0)").hide();
      // setInterval(function(){
      //   $("#bckRotate li:first").stop().fadeOut(1000).next().stop().fadeIn(1000).end().appendTo("#bckRotate");
      // }, 5000);

      const playHidden = $("#play").css("display", "none");
      const playVisible =  $("#play").css("display", "block");

      let clearSlide;
      let nextImg = 0;

      const rotateImg = function(){
      	let currImg = $("#bckRotate li.current");
      	let currNext = currImg.next();

      	if(currNext.length === 0)
        currNext = $("#bckRotate li:first");
        currImg.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
        currNext.stop().animate({"opacity": "1"}, 1000,
        function(){
          currImg.removeClass("previous");
        }).addClass("current");
      };

      const rotateImg2 = function(){
        $("#bckRotate li").stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
        $("#bckRotate li:eq("+ nextImg +")").stop().animate({"opacity": "1"}, 1000).removeClass("previous").addClass("current").show();
      };

      const slideFunc = function(){
        // clearInterval(clearSlide2);
        // $("#bckRotate li:nth-child(1)").addClass("current");
        clearSlide = setInterval('rotateImg()', 5000);
      }

      // const slideFunc2 = function(){
      //   // clearInterval(clearSlide);
      //   $("#bckRotate li").stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
      //   clearSlide2 = setInterval('rotateImg2()', 5000);
      // }

      if(playHidden){
        slideFunc();
      }

      else if(playVisible){
        clearInterval(clearSlide);
      }


      $("#play").on("click", function(){
        $("#play").css("display", "none");
        $("#pause").css("display", "block");

        slideFunc();

        // $("#bckRotate li:nth-child(1)").removeClass("previous").addClass("current");
        // clearSlide2 = setInterval('rotateImg()', 5000);
      });

      $("#pause").on("click", function(){
        clearInterval(clearSlide);
        // clearInterval(clearSlide2);
        $("#play").css("display", "block");
        $("#pause").css("display", "none");

        if(playVisible){
          clearInterval(clearSlide);
          // clearInterval(clearSlide2);
        }
      });

      // $("#bckWrap").mouseover(function(){
      //   $(".arrowCTRL").stop().animate({"opacity": "1"});
      // });
      //
      // $("#bckWrap").mouseout(function(){
      //   $(".arrowCTRL").stop().animate({"opacity": "0"});
      // });

      $("#rightArr").on("click", function(){
        clearInterval(clearSlide);
        // clearInterval(clearSlide2);

        $("#play").css("display", "block");
        $("#pause").css("display", "none");

        if(nextImg == $("#bckRotate li").length-1){
          nextImg = 0;
        }

        else {
          nextImg++;
        }

        // $("#bckRotate li:nth-child(1)").addClass("current");
        clearSlide = setInterval(rotateImg(), 5000);
        // slideFunc();
      });

      $("#leftArr").on("click", function(){
        // clearInterval(clearSlide);
        clearInterval(clearSlide);

        $("#play").css("display", "block");
        $("#pause").css("display", "none");

        if(nextImg === 0){
          nextImg = $("#bckRotate li").length-1;
        }

        else {
          nextImg--;
        }

        // rotateImg2()

        // $("#bckRotate li:nth-child(1)").removeClass("current").addClass("previous");
        // clearSlide2 = setInterval(rotateImg2(), 5000);
        // slideFunc();
        rotateImg2();
      });

      $("#bckWrap #downArr").addClass("animated css3-notification");
      $("#bckWrap #downArr").mouseover(function(){
        $("#bckWrap #downArr").removeClass("animated css3-notification");
      });

      $("#bckWrap #downArr").mouseout(function(){
        $("#bckWrap #downArr").addClass("animated css3-notification");
      });

      $("#bckWrap #downArr").click(function(){
        $("html, body").stop().animate({ scrollTop: $("#prekContainer").offset().top }, 1000);
        return false;
      });

      $(window).scroll(function(event){
        if($(window).scrollTop() > 950){
          $("#bckWrap #downArr").stop().animate({"opacity": "0", "display": "none"}, 500);
          $("#bck").stop().animate({"opacity": "0", "display": "none"}, 500);
        }

        if($(window).scrollTop() < 950){
          $("#bckWrap #downArr").stop().animate({"opacity": "1", "display": "block"}, 200);
          $("#bck").stop().animate({"opacity": ".5", "display": "block"}, 200);
        }
      });
    </script>

    <?php include("../template-includes/back-button.php");?>
    <!--end container & resizer -->

    <!--start footer-->
    <?php include("../template-includes/prek-footer.php");?>
    <!--end footer-->

    <!--start jquerys-->
    <?php include("../template-includes/jquerys.php");?>
    <!--end jquerys-->
  </body>
</html>
