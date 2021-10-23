$(document).ready(function(){
  $(window).scroll(function(event) {
    if ($(window).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
      $('.scroll-top-wrapper').click(() => {
        $("html, body").stop().animate({scrollTop: $("html, body").offset().top}, 1000);
      });
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });

  // TRANSLATE
  // FOR ACCESSIBILITY
  const ctlanguagedropdown = $(".ct-language__dropdown"),
        ctlanguagedropdownHidden = $(".ct-language__dropdown").css({"display": "none", "overflow": "hidden"}),
        ctlanguage = $(".ct-language");

  // $("ul.ct-topbar__list button li.ct-language ul.list-unstyled li").hover(() => {
  //   $(this).find("a").css({ 'font-size': '1em', 'transition': 'font-size 5s ease-in-out' });
  //     },
  //     () => {
  //       $(this).find("a").css({ 'font-size': '.9em', 'transition': 'font-size 5s ease-in-out' });
  //     }
  //   );

  // $("#ct-topbar").insertBefore("#hp-header");
  // $(".hp-scs-logo-text a").attr("tabindex", "0");

  $("#translator").on("keydown", function(event) {
    const keycode = (event.keyCode ? event.keyCode : event.which);

    // if (keycode !== 13) {
    //   event.preventDefault();
    //   $("#translator").focusout();
    //   $(".hp-scs-logo-text a").focus();
    // };

    // if ($("#translator").keydown() && keycode === 9 && keycode !== 13) {
    //   event.preventDefault();
    //   $("#translator").focusout();
    //   $(".hp-scs-logo-text a").focus();
    // }

    // if (ctlanguagedropdownHidden) {
    //   event.preventDefault();
    //   $("#translator").focusout();
    //   $(".hp-scs-logo-text a").focus();
    // }

    if (keycode === 13) {
      event.preventDefault();
      $(".ct-language__dropdown").css({"display": "block", "overflow": "visible"});
      $(".lang-en").focus();

      // if(keycode === 9 && $(".ct-language__dropdown").css({"display": "block", "overflow": "visible"}) && $(".lang-en").focus()){
      //   $(".hp-scs-logo-text a").focusout();
      //   $("#translator").focus();
      //   $(".lang-en").focus();
      // }
    }
  });


  $(".lang-ar").focusout(function(){
    $(".ct-language__dropdown").removeClass('translator-display').css({"display": "none", "overflow": "hidden"});
  });

  ctlanguage.on("mouseover", function() {
    ctlanguagedropdown.css("display", "block");
  });

  ctlanguagedropdown.on("mouseout", function() {
    ctlanguagedropdown.css({"overflow": "hidden", "display": "none"});
  });

  $(".hp-scs-logo-text a, #hp-nav .left > li:nth-child(1) a").focus(function() {
    ctlanguagedropdown.css({"overflow": "hidden", "display": "none"});
  });
  //

  // NAV
  // $("#top.main-nav section#hp-nav.top-bar-section ul").find("li").each(() => {
  //   if($(this).attr("href") === window.location.pathname){
  //     $(this).addClass("currentLink");
  //   }
  // });

  // ACTIVE NAV LINKS
  $(function(){
    $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li a').filter(function(){return this.href==location.href}).parent().addClass('currentLink').siblings().removeClass('currentLink');
    $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li a').click(function(){
      $(this).parent().addClass('currentLink').siblings().removeClass('currentLink');
      // $('#top.main-nav section#hp-nav.top-bar-section > ul li.headstartLink ul li a').parent().children().removeClass('currentLink');
      $('.parentLinks li .headstartLinkDrop li').removeClass('currentLink');
    });

    $('.parentLinks > li > ul > li a').click(function(){
      $(this).parent().addClass('currentLink').parent().parent().addClass('currentLink').siblings().removeClass('currentLink');
      // $('.parentLinks > li > ul > li a').parent().siblings().removeClass('currentLink');
    });

    // $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li.headstartLink ul li a').click(function(){
    //   $(this).parent().addClass('currentLink').parent().removeClass('currentLink').siblings().removeClass('currentLink');
    //   $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks .headstartLink').siblings().removeClass('currentLink');
    // });
  });

  const mn = $("#top");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      mn.addClass("slideInUp");
    } else {
      mn.removeClass("slideInUp");
    }
  });

  let dropdownHEADSTART = $(".headstartLink ul");
  let dropdownHEADSTARTDisplay = $(".headstartLink ul").css({"display": "none", "opacity": "0"});
  let headstartLink = $(".headstartLink");
  let linkTarget = $("#top.main-nav section#hp-nav.top-bar-section ul li a");

  function dropdownBlock() {
    dropdownHEADSTART.css({"display": "block", "z-index": "1100"}).stop().animate({"opacity": "1", "margin-top": "2%"}, 200);
  };

  function dropdownNone() {
    dropdownHEADSTART.stop().animate({"opacity": "0", "margin-top": "-6%"}, 200,
    function(){
      dropdownHEADSTART.css("display", "none");
    });
  };

  headstartLink.on("keydown", function(event) {
    const keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode === 9) {
      dropdownBlock();
    }
  });

  $(".headstartLink > ul > li:nth-child(4) a").focusout(function(){
    dropdownNone();
  });

  $(".parentLinks > li:nth-child(1) a").focus(function(){
    dropdownNone();
  });

  $(".headstartLink a").focus(function(){
    dropdownBlock();
  });

  const dropLinks = function(linkAdd, dropAdd){
    let linkDrop = {};

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

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
  //

  // POPUP
  const popup = $(".popup"),
        popH3 = $(".popup > section"),
        popH3Link = $(".popup > section p:nth-child(1)"),
        pageLoading = $(".popup > p:nth-child(1)"),
        close = $(".popup > button"),
        alertLinkWrap = $(".alertLinkWrap");


  // popH3.removeClass("h3Hide").addClass("prekPopupH3 popupAnimation");
  // pageLoading.removeClass("loading prekPopupH3 popupAnimation").addClass("popupCloseBTN popupCloseAnimation");

  // if (navigator.appVersion.indexOf("Mac")!=-1) {
  //   $("#bckRotate").css("margin", "0");
  // }

  if (navigator.userAgent.indexOf('Firefox') != -1){
		$(".popupCloseBTN").css({"left": "0", "transform": "translate(0, 0)"});
	}

  if (navigator.userAgent.indexOf('Edge') != -1 || navigator.userAgent.indexOf('IE') != -1){
		$("#downArr img").css({"height": "25px", "width": "40px"});
	}

  $(window).load(() => {
    if (navigator.appVersion.indexOf("Mac")!=-1) {
      $("#bckRotate").css("margin", "0");
    }

    $(popup, close).click(() => {
      close.stop().animate({"opacity": "0", "margin-top": "-200"}, 500,
      () => {
        popup.stop().animate({"opacity": "0"}, 500,
        () => {
          popup.css("display", "none");
        });
      });

      popH3.stop().animate({"opacity": "0", "margin-top": "-100"}, 500,
      () => {
        popup.stop().animate({"opacity": "0"}, 500,
        () => {
          popup.css("display", "none");
        });
      });
    });
    //

    $(popH3Link).click(function(){
      window.open('http://www.scsk12.org/newsroom/#/article/1621');
      $("html, body").stop().animate({ scrollTop: $(".popup").offset().top }, 1);
      return false;
    });

    const scrollPage = () => {
      $("html, body").stop().animate({ scrollTop: $("#screenings").offset().top-100 }, 1000);
    };

    $(popup).click(function(){
      scrollPage();
      $(alertLinkWrap).css("display", "block").stop().animate({"opacity": "1"}, 1000);
      return false;
    });

    const closeBTNSetTime = () => {
      setTimeout(() => {
        close.removeClass("btnHide").stop().fadeIn(500).addClass("popupCloseBTN");
      }, 100);
    }

    pageLoading.stop().animate({"opacity": "0"}, 700,
    () => {
      pageLoading.removeClass("popupCloseBTN popupCloseAnimation").addClass("loading");
      pageLoading.stop().fadeOut(5000).css("display", "none");
      closeBTNSetTime();
    });

    if (close.css("opacity", "1")) {
      clearTimeout(closeBTNSetTime);
    }
  });

  $("#bckWrap #downArr").addClass("animated css3-notification");
  $("#bckWrap #downArr").mouseover(() => {
    $("#bckWrap #downArr").removeClass("animated css3-notification");
  });

  $("#bckWrap #downArr").mouseout(() => {
    $("#bckWrap #downArr").addClass("animated css3-notification");
  });

  $("#bckWrap #downArr").click(() => {
    scrollPage();
    return false;
  });

  $(window).scroll(function(event) {
    if ($(window).scrollTop() > 0) {
      // $(".main-nav").css({"margin-top": "0", "transition": "margin-top 1s ease-in-out"});
      // $(".logoH1").css({"margin-top": "10px", "font-size": ".8em", "opacity": "0", "display": "none", "transition": "font-size, margin-top, opacity 1s"});
      $(".logoH1").stop().animate({"margin-top": "-70px", "opacity": "0"}, 300,
      () => {
        $(".logoH1").css("display", "none");
      });
    }
  });

  $(window).scroll(function(event) {
    if ($(window).scrollTop() === 0) {
      $(".logoH1").css("display", "block").stop().animate({"margin-top": "0", "opacity": "1"}, 500);
    }
  });

  $(window).scroll(function(event) {
    if ($(window).scrollTop() > 950) {
      $("#bckWrap #downArr").stop().animate({"opacity": "0", "display": "none"}, 500);
      $("#bck").stop().animate({"opacity": "0", "display": "none"}, 500);

      close.stop().animate({"opacity": "0", "margin-top": "-200"}, 500,
      () => {
        popup.stop().animate({"opacity": "0"}, 500,
        () => {
          popup.css("display", "none");
        });
      });

      popH3.stop().animate({"opacity": "0", "margin-top": "-100"}, 500,
      () => {
        popup.stop().animate({"opacity": "0"}, 500,
        () => {
          popup.css("display", "none");
        });
      });

      $(alertLinkWrap).css("display", "block").stop().animate({"opacity": "1"}, 1000);

      popH3.stop().animate({"opacity": "0", "margin-top": "-100"}, 500,
      function(){
        popup.stop().animate({"opacity": "0"}, 500,
        function(){
          popup.css("display", "none");
        });
      });
    }

    if ($(window).scrollTop() < 950) {
      $("#bckWrap #downArr").stop().animate({"opacity": "1", "display": "block"}, 200);
      $("#bck").stop().animate({"opacity": ".5", "display": "block"}, 200);
    }
  });

  const homeBTN = $("#top.main-nav section#hp-nav.top-bar-section ul li[title='Shelby County Schools Pre-K Home']");

  homeBTN.click(() => {
    const reload = setTimeout(() => {
      window.location.reload();
    }, 1);

    if ($(window).scrollTop() > 950) {
      clearTimeout(reload);
    }
  });
});
