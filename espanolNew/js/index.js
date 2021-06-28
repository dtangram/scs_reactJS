/*ROTATING BACKGROUND IMAGE*/
$(function (){
  $("#bckRotate li:nth-child(1)").addClass("current");
  setInterval("rotateImg()", 11000);
  setInterval("rotateCircle()", 11000);
})();

function rotateImg(){
	var currImg = $("#bckRotate li.current");
	var currNext = currImg.next();
	if(currNext.length === 0)
	currNext = $("#bckRotate li:first");
	currImg.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
	currNext.stop().animate({"opacity": "1"}, 1000,
	function(){
		currImg.removeClass("previous");
	}).addClass("current");
};

function rotateCircle(){
  var currImgCir = $("#circles li.currentCir");
  var currNextCir = currImgCir.next();
  if(currNextCir.length === 0)
  currNextCir = $("#circles li:first");
  currImgCir.removeClass("currentCir").addClass("previousCir");
  currNextCir.css("opacity", "1").addClass("currentCir").stop().animate({"opacity": "1"}, 1000,
  function(){
    currImgCir.removeClass("previousCir");
  });
};
//


$(document).ready(function(){
  const cirBTN = function(img1, img2, img3, img4, cirClick1, cirClick2, cirClick3, cirClick4){
    const cirOBJ = {
      img1,
      img2,
      img3,
      img4,
      cirClick1,
      cirClick2,
      cirClick3,
      cirClick4,

    };

    cirOBJ.cirFunc = function(){
      cirOBJ.img1.stop().animate({"opacity": "1"}, 1000).addClass("current").removeClass("previous");
  		cirOBJ.img2.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
  		cirOBJ.img3.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
  		cirOBJ.img4.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");

  		cirOBJ.cirClick1.addClass("currentCir");
  		cirOBJ.cirClick2.removeClass("currentCir");
  		cirOBJ.cirClick3.removeClass("currentCir");
  		cirOBJ.cirClick4.removeClass("currentCir");
    };

    return cirOBJ;
  };

  let newfunc;

  const bckImg1 = $("#bck #bckRotate li:nth-child(1)"),
        bckImg2 = $("#bck #bckRotate li:nth-child(2)"),
        bckImg3 = $("#bck #bckRotate li:nth-child(3)"),
        bckImg4 = $("#bck #bckRotate li:nth-child(4)"),
        cirbutton1 = $("#circles li:nth-child(1)"),
        cirbutton2 = $("#circles li:nth-child(2)"),
        cirbutton3 = $("#circles li:nth-child(3)"),
        cirbutton4 = $("#circles li:nth-child(4)");

  cirbutton1.on("click", function(){
    newfunc = cirBTN(bckImg1, bckImg2, bckImg3, bckImg4, cirbutton1, cirbutton2, cirbutton3, cirbutton4).cirFunc();
	});

	cirbutton2.on("click", function(){
    newfunc = cirBTN(bckImg2, bckImg1, bckImg3, bckImg4, cirbutton2, cirbutton1, cirbutton3, cirbutton4).cirFunc();
	});

	cirbutton3.on("click", function(){
    newfunc = cirBTN(bckImg3, bckImg2, bckImg1, bckImg4, cirbutton3, cirbutton2, cirbutton1, cirbutton4).cirFunc();
	});

	cirbutton4.on("click", function(){
    newfunc = cirBTN(bckImg4, bckImg3, bckImg2, bckImg1, cirbutton4, cirbutton3, cirbutton2, cirbutton1).cirFunc();
	});

  // $("#circles li").each(function(){
  //   $(this).on("click", function(){
  //     $("#bck #bckRotate li").each(function(index){
  //       $(this).stop().animate({"opacity": "1"}, 1000 * index).addClass("current").removeClass("previous");
  //     });
  //
  //     $(this).addClass("currentCir");
  //   });
  // });

  /*HOVER EFFECT FOR IMAGES*/
  $(".listOne > article > section article").hover(function(){
    $(this).find("> section:nth-child(1)").css("display", "block").stop().animate({"left": "0"}, 500);
    $(this).find("img").stop().animate({"opacity": ".5", "min-width": "320px"}, 500);
    $(this).find(".overlay").stop().animate({"opacity": ".7"}, 500);
  },

  function(){
    $(this).find("> section:nth-child(1)").stop().animate({"left": "-320px"}, 500);
    $(this).find("img").stop().animate({"opacity": "1", "min-width": "300px"}, 500);
    $(this).find(".overlay").stop().animate({"opacity": "0"}, 500);
  });

  // $(".listOne > article a").hover(function(){
  //   $(this).find("> section:nth-child(1)").css("display", "block").stop().animate({"left": "0"}, 500);
  //   $(this).find("img").stop().animate({"opacity": ".5", "min-width": "320px"}, 500);
  //   $(this).find(".overlay").stop().animate({"opacity": ".7"}, 500);
  // },
  //
  // function(){
  //   $(this).find("> section:nth-child(1)").stop().animate({"left": "-320px"}, 500);
  //   $(this).find("img").stop().animate({"opacity": "1", "min-width": "300px"}, 500);
  //   $(this).find(".overlay").stop().animate({"opacity": "0"}, 500);
  // });

  /*HOVER EFFECT FOR LINKS BACKGROUND*/
  $(".listWrap").each(function(){
    $(".listWrap").hover(function(){
      $(this).stop().animate({"background-color": "rgba(230, 230, 230, .5)"}, 400);
    },

    function(){
      $(this).stop().animate({"background-color": "transparent"}, 400);
    });
  });

  $("#esHeadlinesWrap section article").each(function(){
    $("#esHeadlinesWrap section article").hover(function(){
      $(this).stop().animate({"background-color": "rgba(230, 230, 230, .5)"}, 400);
    },

    function(){
      $(this).stop().animate({"background-color": "transparent"}, 400);
    });
  });

  if($(window).width() <= 1000 && $(window).width() >= 640){
    $("section.listOne > article").addClass("medium-4 medium-centered");
  }

  if($(window).width() < 750){
    $(".social article > section").addClass("medium-4 medium-centered");
  }

  if($(window).width() < 640){
    $("section.listOne > article").addClass("small-4 small-centered");
    $(".social article > section").addClass("small-6 small-centered");
  }



  /*LIMIT NUMBER OF CHARACTERS FOR ANNOUNCEMENT, EVENTS AND SCHOOL MOTTO HEADERS*/
  var charLimit = function(item, charCount, substrMax){
    var limitChar = {};

    limitChar.item = item;
    limitChar.charCount = charCount;
    limitChar.substrMax = substrMax;

    limitChar.charFunc = function(){
      $(limitChar.item).each(function(i){
        lengthMission = $(this).text().length;
        if(lengthMission >= limitChar.charCount)
        {
          $(this).text($(this).text().substr(0, limitChar.substrMax) + '...');
        }
      });
    }

    return limitChar;
  };

  var missionLimit = $("#esHeadlinesWrap > section > .esHeadlines > a p");

  var addCount = charLimit(missionLimit, 100, 100);

  addCount.charFunc();



  // $(".listOne > div").hover(function(){
  //   $(this).find("a > div:nth-child(1)").css("display", "block").stop().animate({"left": "0"}, 500);
  //   $(this).find("a img").stop().animate({"opacity": ".5", "min-width": "320px"}, 500);
  //   $(this).find("a .overlay").stop().animate({"opacity": ".7"}, 500);
  // },
  //
  // function(){
  //   $(this).find("a > div:nth-child(1)").stop().animate({"left": "-320px"}, 500);
  //   $(this).find("a img").stop().animate({"opacity": "1", "min-width": "300px"}, 500);
  //   $(this).find("a .overlay").stop().animate({"opacity": "0"}, 500);
  // });



  // $(".listOne > div").hover(function(){
  //   $(this).find("a > div:nth-child(1)").stop().animate({"top": "0"}, 500);
  //   $(this).find("a img").stop().animate({"opacity": ".5", "max-width": "360px"}, 500);
  //   $(this).find("a .overlay").stop().animate({"opacity": "1"}, 500);
  // },
  //
  // function(){
  //   $(this).find("a > div:nth-child(1)").stop().animate({"top": "225px"}, 500);
  //   $(this).find("a img").stop().animate({"opacity": "1", "max-width": "290px"}, 500,
  //     function(){
  //       $(".listOne > div a div:nth-child(1)").css("top", "-225px");
  //     }
  //   );
  //   $(this).find("a .overlay").stop().animate({"opacity": "0"}, 500);
  // });
  /**/
});
