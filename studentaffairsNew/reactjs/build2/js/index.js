$(document).ready(function(){
  // $('a[href*=\\#]').on('click', function(e) {
  //
  //   var target = this.hash;
  //   var $target = $(target);
  //   console.log(targetname);
  //   var targetname = target.slice(1, target.length);
  //
  //   if (document.getElementById(targetname) != null) {
  //     e.preventDefault();
  //   }
  //   $('html, body').stop().animate({
  //     'scrollTop': $target.offset().top - 120 //or the height of your fixed navigation
  //
  //   }, 900, 'swing', function() {
  //     window.location.hash = target;
  //   });
  // });

  
	/**/

  // FOR ACCESSIBILITY
  const ctlanguagedropdown = $(".ct-language__dropdown"),
        ctlanguagedropdownHidden = $(".ct-language__dropdown").css({"display": "none", "overflow": "hidden"}),
        ctlanguage = $(".ct-language");

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
});
