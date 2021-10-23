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
        // ctlanguagedropdownHidden = $(".ct-language__dropdown").css({"display": "none", "overflow": "hidden"}),
        ctlanguage = $(".ct-language");

    // $(".ct-language__dropdown").css({"display": "none", "overflow": "hidden"});

  $("#translator").on("keydown", function(event) {
    const keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode === 13) {
      event.preventDefault();
      $(".ct-language__dropdown").css({"display": "block", "overflow": "visible"});
      $(".lang-en").focus();
    }
  });


  $(".lang-ar").focusout(function(){
    $(".ct-language__dropdown").removeClass('translator-display').css({"display": "none", "overflow": "hidden"});
  });

  ctlanguage.on("mouseover", function() {
    ctlanguagedropdown.css({"display": "block", "top": "100px", "overflow": "visible", "transition": "display 5s, top 5s, overflow 5s ease-in-out"});
  });

  ctlanguagedropdown.on("mouseout", function() {
    ctlanguagedropdown.css({"overflow": "hidden", "top": "100px", "display": "none", "transition": "display 5s, top 5s, overflow 5s ease-in-out"});
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

    $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li.headstartLink ul li a').click(function(){
      $(this).parent().addClass('currentLink').parent().removeClass('currentLink').siblings().removeClass('currentLink');
      $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks .headstartLink').siblings().removeClass('currentLink');
    });
  });

  const mn = $("#top");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      mn.addClass("slideInUp");
    } else {
      mn.removeClass("slideInUp");
    }
  });

  $("#top.main-nav section#hp-nav.top-bar-section ul.left").find("li a").each(function(){
    $(this).toggleClass("currentLink", $(this).attr("href") == window.location.pathname);
  });

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
  //

  $(window).scroll(function(event) {
    if ($(window).scrollTop() > 0) {
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
      $(".bckWrap").stop().animate({"opacity": "0", "display": "none"}, 500);
    }

    if ($(window).scrollTop() < 950) {
      $(".bckWrap").stop().animate({"opacity": "1", "display": "block"}, 200);
    }
  });

  // const homeBTN = $("#top.main-nav section#hp-nav.top-bar-section ul li[title='Shelby County Schools Pre-K Home']");
  //
  // homeBTN.click(() => {
  //   const reload = setTimeout(() => {
  //     window.location.reload();
  //   }, 1);
  //
  //   if ($(window).scrollTop() > 950) {
  //     clearTimeout(reload);
  //   }
  // });

  const panel = $(".panelWrap section a article");

  panel.on("mouseover", function() {
    $(this).css({"background-color": "#eae8e8", "box-shadow": "0 3px 10px rgb(0 0 0 / 0.2)", "transition": "background-color 300ms, box-shadow 300ms ease-in-out"});
    $(this).find("section h3, section h3 figure .MuiSvgIcon-root").css({"color": "#F7DA47", "transition": "color 300ms, ease-in-out"});
  });

  panel.on("mouseout", function() {
    panel.css({"background-color": "#FFF", "box-shadow": "none", "transition": "background-color 300ms, box-shadow 300ms ease-in-out"});
    $(this).find("section h3, section h3 figure .MuiSvgIcon-root").css({"color": "#FFF", "transition": "color 300ms, ease-in-out"});
  });
});
