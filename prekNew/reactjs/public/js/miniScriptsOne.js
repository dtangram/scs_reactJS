$(document).ready(function(){$(window).scroll(function(n){100<$(window).scrollTop()?($(".scroll-top-wrapper").addClass("show"),$(".scroll-top-wrapper").click(()=>{$("html, body").stop().animate({scrollTop:$("html, body").offset().top},1e3)})):$(".scroll-top-wrapper").removeClass("show")});const n=$(".ct-language__dropdown"),o=($(".ct-language__dropdown").css({display:"none",overflow:"hidden"}),$(".ct-language"));$("#translator").on("keydown",function(n){13===(n.keyCode||n.which)&&(n.preventDefault(),$(".ct-language__dropdown").css({display:"block",overflow:"visible"}),$(".lang-en").focus())}),$(".lang-ar").focusout(function(){$(".ct-language__dropdown").removeClass("translator-display").css({display:"none",overflow:"hidden"})}),o.on("mouseover",function(){n.css("display","block")}),n.on("mouseout",function(){n.css({overflow:"hidden",display:"none"})}),$(".hp-scs-logo-text a, #hp-nav .left > li:nth-child(1) a").focus(function(){n.css({overflow:"hidden",display:"none"})}),$(function(){$("#top.main-nav section#hp-nav.top-bar-section > .parentLinks li a").filter(function(){return this.href==location.href}).parent().addClass("currentLink").siblings().removeClass("currentLink"),$("#top.main-nav section#hp-nav.top-bar-section > .parentLinks li a").click(function(){$(this).parent().addClass("currentLink").siblings().removeClass("currentLink"),$(".parentLinks li .headstartLinkDrop li").removeClass("currentLink")}),$(".parentLinks > li > ul > li a").click(function(){$(this).parent().addClass("currentLink").parent().parent().addClass("currentLink").siblings().removeClass("currentLink")})});const i=$("#top");$(window).scroll(function(){20<$(this).scrollTop()?i.addClass("slideInUp"):i.removeClass("slideInUp")});let t=$(".headstartLink ul");$(".headstartLink ul").css({display:"none",opacity:"0"});let a=$(".headstartLink");$("#top.main-nav section#hp-nav.top-bar-section ul li a");function s(){t.css({display:"block","z-index":"1100"}).stop().animate({opacity:"1","margin-top":"2%"},200)}function l(){t.stop().animate({opacity:"0","margin-top":"-6%"},200,function(){t.css("display","none")})}a.on("keydown",function(n){9===(n.keyCode||n.which)&&s()}),$(".headstartLink > ul > li:nth-child(4) a").focusout(function(){l()}),$(".parentLinks > li:nth-child(1) a").focus(function(){l()}),$(".headstartLink a").focus(function(){s()});a=function(n,o){let i={};return i.linkAdd=n,i.dropAdd=o,i.linkFunc=function(){i.linkAdd.mouseenter(function(){$(i.dropAdd).css({display:"block","z-index":"1100"}).stop().animate({opacity:"1","margin-top":"2%"},200)}),i.linkAdd.mouseleave(function(){$(i.dropAdd).stop().animate({opacity:"0","margin-top":"-6%"},200,function(){$(i.dropAdd).css("display","none")})})},i}(a,t).linkFunc(),$("#top.main-nav section#hp-nav.top-bar-section ul.left").find("li a").each(function(){$(this).toggleClass("currentLink",$(this).attr("href")==window.location.pathname)}),$("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function(){$(this).toggleClass("open")});$(".popup"),$(".popup > section"),$(".popup > section p:nth-child(1)"),$(".popup > p:nth-child(1)"),$(".popup > button"),$(".alertLinkWrap");$(window).scroll(n=>{0<$(window).scrollTop()&&$(".logoH1").stop().animate({"margin-top":"-70px",opacity:"0"},300,()=>{$(".logoH1").css("display","none")})}),$(window).scroll(n=>{0===$(window).scrollTop()&&$(".logoH1").css("display","block").stop().animate({"margin-top":"0",opacity:"1"},500)})});