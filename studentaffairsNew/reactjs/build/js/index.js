$(document).ready(function(){
  // SCROLL BUTTON
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

  $("ul.ct-topbar__list button li.ct-language ul.list-unstyled li").hover(() => {
    $(this).find("a").css({ 'font-size': '1em', 'transition': 'font-size 5s ease-in-out' });
      },
      () => {
        $(this).find("a").css({ 'font-size': '.9em', 'transition': 'font-size 5s ease-in-out' });
      }
    );

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
    ctlanguagedropdown.css("display", "block");
  });

  ctlanguagedropdown.on("mouseout", function() {
    ctlanguagedropdown.css({"overflow": "hidden", "display": "none"});
  });

  $(".hp-scs-logo-text a, #hp-nav .left > li:nth-child(1) a").focus(function() {
    ctlanguagedropdown.css({"overflow": "hidden", "display": "none"});
  });
  //

  // ACTIVE NAV LINKS
  $(function(){
    $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li a').filter(function(){return this.href==location.href}).parent().addClass('currentLink').siblings().removeClass('currentLink');
    $('#top.main-nav section#hp-nav.top-bar-section > .parentLinks li a').click(function(){
      $(this).parent().addClass('currentLink').siblings().removeClass('currentLink');
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

  let dropdownHEADSTART = $(".headstartLink ul");
  let headstartLink = $(".headstartLink");
  let linkTarget = $("#top.main-nav section#hp-nav.top-bar-section ul li a");

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
      $("#bck").stop().animate({"opacity": "0", "display": "none"}, 500);
    }

    if ($(window).scrollTop() < 950) {
      $("#bck").stop().animate({"opacity": ".5", "display": "block"}, 200);
    }
  });
  //

  // const homeBTN = $("#top.main-nav section#hp-nav.top-bar-section ul li[title='Shelby County Schools Student Affairs Home']");
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
});
