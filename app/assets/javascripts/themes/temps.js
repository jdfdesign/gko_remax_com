$(document).ready(function(e){"use strict";jQuery(window).load(function(){jQuery(".loadstack").fadeOut();jQuery(".preloader").delay(1e3).fadeOut("slow");var e=new WOW({animateClass:"animated",offset:210,mobile:false,live:true});(new WOW).init()});jQuery(function(e){var t=e(".herofade");e(window).on("scroll",function(){var n=e(this).scrollTop();t.css({"margin-top":-(n/0)+"px",opacity:1-n/600})})});jQuery(function(e){var t=e(".postfade");e(window).on("scroll",function(){var n=e(this).scrollTop();t.css({"margin-top":-(n/0)+"px",opacity:1-n/400})})});var t=function(){var t=e(".cover"),n=e(window);t.css({height:n.height()})};t();e(window).resize(function(){t()});var n=function(){var t=e("#wrapper,.wallpaper"),n=e(window);t.css({width:n.width()})};n();e(window).resize(function(){n()});e(function(){e(".motion li").addClass("animated fadeInUp")});e(function(){e("[data-toggle='popover']").popover({trigger:"focus"})});e("[data-toggle='tooltip']").tooltip();e("#bullets").onePageNav({currentClass:"current-page-item"});e("a.scrollto").click(function(){e("html,body").animate({scrollTop:e(".scrollreceive").offset().top},1200);return false});var r=e("html,#menumodal").niceScroll({cursorcolor:"#202020",scrollspeed:60,mousescrollstep:30,boxzoom:false,autohidemode:false,cursorborder:"0 solid #202020",cursorborderradius:"0",cursorwidth:10,background:"#666",horizrailenabled:false});e(".team-avatars a").click(function(e){e.preventDefault()});e(".team-avatars a").hover(function(){e(".team-avatars a").removeClass("active");e(this).addClass("active");var t=e(this).attr("href");e(".team-meta").removeClass("active");e(t).addClass("active")});e(".modal-body li.col-md-4.col-sm-6").hover(function(){e(this).find(".menubg").stop().animate({opacity:.8},200,"easeOutQuad")},function(){e(this).find(".menubg").stop().animate({opacity:.3},200,"easeInQuad")});if(navigator.userAgent.match(/IEMobile\/10\.0/)){var i=document.createElement("style");i.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));document.querySelector("head").appendChild(i)}}(jQuery))