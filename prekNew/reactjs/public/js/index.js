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

    $('.parentLinks > li > ul > li a').click(function(){
      $(this).parent().addClass('currentLink').parent().parent().addClass('currentLink').siblings().removeClass('currentLink');
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

  $(window).scroll((event) => {
    if ($(window).scrollTop() > 0) {
      $('.logoH1').stop().animate({ 'margin-top': '-70px', opacity: '0' }, 300,
        () => {
          $('.logoH1').css('display', 'none');
        });
    }
  });

  $(window).scroll((event) => {
    if ($(window).scrollTop() === 0) {
      $('.logoH1').css('display', 'block').stop().animate({ 'margin-top': '0', opacity: '1' }, 500);
    }
  });
});
