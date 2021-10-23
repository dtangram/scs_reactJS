  <?php

    include("variables.php");
    $newwebsiteurl = '/';

  ?>

  <style>
    .main-nav{
      margin-bottom: 0;
    }

    .left{
      margin-top: 5px !important;
    }

    .left li{
      margin: 0;
    }

    .top-bar-section li:not(.has-form) a:not(.button) {
      border: 0 !important;
      padding: 0 .8em;
      color: #ffffff;
      font-weight: bold;
      text-transform: uppercase;
      font-size: .9em;
    }

    .top-bar-section ul.left li{
      background: transparent;
    }

    .top-bar-section li:not(.has-form):hover {
      border: 0 !important;
      background: transparent;
      text-decoration: none !important;
      transition: color .3s ease 0s !important;
    }

    .top-bar-section li:not(.has-form) a:not(.button):hover {
      border: 0 !important;
      text-decoration: none !important;
      transition: color .3s ease 0s !important;
    }

    .slideUnder, .slideUnder a, .slideUnderDrop a{
      display: inline-block !important;
      position: relative !important;
    }

    .currentLink a{
      color: #E90101 !important;
    }

    .slideUnder a::after, .slideUnderDrop a::after{
      content: '' !important;
      display: block !important;
      margin: auto !important;
      height: 1px !important;
      width: 0px !important;
      background-color: #E90101 !important;
      -webkit-transition: width .5s ease, background-color .5s ease !important;
      -moz-transition: width .5s ease, background-color .5s ease !important;
      -o-transition: width .5s ease, background-color .5s ease !important;
      transition: width .5s ease, background-color .5s ease !important;
    }

    .slideUnder a:hover::after, .slideUnderDrop a:hover::after{
      text-decoration: none !important;
      width: 80% !important;
    }

    .headstartLink ul{
      background: #234590;
      border: #000 solid 6px;
      display: none;
      left: -33%;
      margin-top: -6%;
      opacity: 0;
      padding-bottom: 5%;
      position: absolute;
      width: 220px;
      z-index: 999;
    }

    .headstartLink ul li{
      float: none;
      text-align: center;
    }

    .headstartLink ul li a{
      text-align: center;
    }

    .top-bar-section .dropdown li:not(.has-form):not(.active) > a:not(.button) {
      color: #181818;
      background: rgba(255, 255, 255, .9);
      padding: 0 1em;
      font-size: .75em;
    }

    div#SCS-logo{
      background: transparent;
      text-shadow: none;
    }

    @media only screen and (max-width: 1000px){
      .ct-topbar {
        margin: 0 !important;
        right: 215px;
        top: 12px;
      }
    }

    @media only screen and (max-width: 820px) and (min-width: 733px){
      .top-bar-section ul.left li a{
        font-size: 1.1em !important;
      }
    }

    @media only screen and (max-width: 732px) and (min-width: 641px){
      .top-bar-section ul.left li a{
        font-size: 1em !important;
      }
    }

    @media only screen and (max-width: 720px){
      .ct-topbar {
        margin: 0 !important;
        right: 0;
        text-align: center;
        width: 100%;
      }

      h1.SCS-logo{
        padding-left: 3em;
      }
    }

    @media only screen and (max-width: 668px) and (min-width: 641px){
      .top-bar-section ul.left li a{
        font-size: .95em !important;
      }
    }

    @media only screen and (max-width: 640px){
      .top-bar .toggle-topbar.menu-icon{
        margin-top: 0;
        top: 0;
      }

      .top-bar-section .left{
        background: #333;
        display: flex;
        flex-direction: column;
        float: right !important;
        padding-bottom: 10px;
        width: auto;
      }

      .top-bar-section ul.left li{
        background: transparent;
        text-align: center;
      }

      .top-bar-section ul.left li:hover{
        background: #234590;
      }

      .slideUnder a:hover::after, .slideUnderDrop a:hover::after{
        width: 50% !important;
      }

      .headstartLink ul{
        left: -50%;
        width: 220px;
      }
    }

    @media only screen and (max-width: 540px){
      .ct-topbar {
        display: block;
      }
    }


    @media only screen and (min-width: 40.063em) {
      .top-bar-section .has-dropdown > a:after {
      border: inset 5px;
      border-color: #4d90ff transparent transparent transparent;
      border-top-style: solid;
      margin-top: -2.5px;
      top: 1.40625rem;
      }
    }
  </style>

  <script>
    var mn = jQuery("#top");
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 20) {
        mn.addClass("slideInUp");
      } else {
        mn.removeClass("slideInUp");
      }
    });

    $(document).ready(function(){
      var dropdownHEADSTART = $(".headstartLink ul"),
          headstartLink = $(".headstartLink"),
          linkTarget = $("#top.main-nav section#hp-nav.top-bar-section ul li a");

      var dropLinks = function(linkAdd, dropAdd){
        var linkDrop = {};

        linkDrop.linkAdd = linkAdd;
        linkDrop.dropAdd = dropAdd;

        linkDrop.linkFunc = function(){
          linkDrop.linkAdd.mouseenter(function(){
            $(linkDrop.dropAdd).css({"display": "block", "z-index": "1100"}).stop().animate({"opacity": "1", "margin-top": "2%"}, 200);
          });

          linkDrop.linkAdd.mouseleave(function(){
            $(linkDrop.dropAdd).stop().animate({"opacity": "0", "margin-top": "-6%"}, 200,
            function(){
              $(linkDrop.dropAdd).css("display", "none");
            });
          });
        }

        return linkDrop;
      };

      headstartLink = dropLinks(headstartLink, dropdownHEADSTART).linkFunc();

      $("#top.main-nav section#hp-nav.top-bar-section ul.left").find("li a").each(function(){
        $(this).toggleClass("currentLink", $(this).attr("href") == window.location.pathname);
      });
    });
  </script>





  <section id="top" class="main-nav contain-to-grid fix-nav-scroll">
    <nav role="navigation" data-topbar class="top-bar">
      <ul class="title-area">
        <?php //highlights landing page links red

          $LP = $_GET['LP'];
          $hp_nav_active_home = 'style="color: #E90101 !important;"';
          $hp_nav_active = 'style="color: #E90101 !important;"';

        ?>

        <li class="name <?php //if(!$LP){?>hp-nav-active<?php //}?>"></li>
        <li class="left toggle-topbar menu-icon"><a href="#">Menu<span><div class="fi-list"></div></span></a></li>

        <script>
          $(document).ready(function(){
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
              $(this).toggleClass('open');
            });
          });
        </script>
      </ul>

      <section id="hp-nav" class="top-bar-section">
        <ul class="left">
          <?php

            if ($_GET['t']){
              echo dirname(__FILE__);
            }

          ?>

          <li class="slideUnder" title="Shelby County Schools Student Affairs Home"><a href="/studentaffairs/#ct-topbar">Home</a></li>
          <li class="slideUnder" title="SCS Student Affairs About Us"><a href="../studentaffairs/files/2020/DOSA Pillars.pdf" target="_blank">About Us</a></li>
          <li class="slideUnder" title="SCS Student Affairs Leadership"><a href="../studentaffairs/leadership">Leadership</a></li>
          <!-- <li class="slideUnder headstartLink" title="SCS Student Affairs Recruitment"><a href="../studentaffairs/recruitment">Recruitment</a></li> -->
          <li class="slideUnder" title="SCS Student Affairs Engagement"><a href="../studentaffairs/engagement">Engagement</a></li>
          <li class="slideUnder" title="SCS Student Affairs Staff"><a href="../studentaffairs/staff">THIS IS US</a></li>
          <li class="slideUnder" title="SCS Home Page"><a href="http://www.scsk12.org/">SCS Home</a></li>
        </ul>

        <?php if ($_GET['S']) {}?>
      </section>
    </nav>
  </section>
