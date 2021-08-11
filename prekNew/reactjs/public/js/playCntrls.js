$(document).ready(function(){
  // ROTATING BACKGROUND IMAGE
  const playHidden = $("#play").css("display", "none"),
        playVisible =  $("#play").css("display", "block");

  $("#play").css("display", "none");
  $("#pause").css("display", "block");

  let clearSlide,
      nextImg = 0;

  const rotateImg = () => {
    let currImg = $("#bckRotate li.current"),
        currNext = currImg.next();

    if (currNext.length === 0)
    currNext = $("#bckRotate li:first");
    currImg.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
    currNext.stop().animate({"opacity": "1"}, 1000,
    () => {
      currImg.removeClass("previous");
    }).addClass("current");
  };

  const rotateImg2 = () => {
    $("#bckRotate li").stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
    $("#bckRotate li:eq("+ nextImg +")").stop().animate({"opacity": "1"}, 1000).removeClass("previous").addClass("current").show();
  };

  const slideFunc = () => {
    clearSlide = setInterval(rotateImg, 5000);
  }

  // IMAGE CAROUSEL CONTROLS
  if (playHidden) {
    slideFunc();
  }

  else if (playVisible) {
    clearInterval(clearSlide);
  }

  $("#play").on("click", () => {
    $("#play").css("display", "none");
    $("#pause").css("display", "block");

    slideFunc();
  });

  $("#pause").on("click", () => {
    clearInterval(clearSlide);

    $("#play").css("display", "block");
    $("#pause").css("display", "none");

    if (playVisible) {
      clearInterval(clearSlide);
    }
  });


  $("#bckWrap").mouseover(() => {
    $(".arrowCTRL").stop().animate({"opacity": "1"});
  });

  $("#bckWrap").mouseout(() => {
    $(".arrowCTRL").stop().animate({"opacity": ".4"});
  });

  $("#rightArr").on("click", () => {
    clearInterval(clearSlide);

    $("#play").css("display", "block");
    $("#pause").css("display", "none");

    if (nextImg === $("#bckRotate li").length-1) {
      nextImg = 0;
    }

    else {
      nextImg++;
    }

    clearSlide = setInterval(rotateImg(), 5000);
  })
  .hover(
    () => {
      $('.arrowCTRL .arrows:nth-child(2)').css({ 'background': '#333', 'transition': 'background 500ms ease-in-out' });
    },
    () => {
      $('.arrowCTRL .arrows:nth-child(2)').css({ 'background': 'transparent', 'transition': 'background 500ms ease-in-out' });
    }
  );

  $("#leftArr").on("click", () => {
    clearInterval(clearSlide);

    $("#play").css("display", "block");
    $("#pause").css("display", "none");

    if (nextImg === 0) {
      nextImg = $("#bckRotate li").length-1;
    }

    else {
      nextImg--;
    }

    rotateImg2();
  })
  .hover(
    () => {
      $('.arrowCTRL .arrows:nth-child(1)').css({ 'background': '#333', 'transition': 'background 500ms ease-in-out' });
    },
    () => {
      $('.arrowCTRL .arrows:nth-child(1)').css({ 'background': 'transparent', 'transition': 'background 500ms ease-in-out' });
    }
  );
  //
});
