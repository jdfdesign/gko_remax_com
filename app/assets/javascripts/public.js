//= require jquery_ujs
//= require themes/lightbox
//= require themes/flexslider
//= require themes/smoothScroll
//= require themes/skrollr
//= require themes/scrollReveal
//= require themes/plugin
//= require themes/countdown
//= require bootstrap-datepicker

$(document).ready(function() {

  "use strict";

  $('select#rental_property_id').change(function() {
    var result = $(this).val()
    document.location.href = result;
  });

 $('.datepicker').datepicker();

  $('.rental_property_inquiry')
    .on("ajax:beforeSend", function(evt, xhr, settings) {
    jQuery('span.error').fadeOut('slow');
    jQuery('span.valid').fadeOut('slow');
    jQuery('#thanks').hide();
    jQuery('#error').hide();
    jQuery('#timedout').hide();
    jQuery('#state').hide();

    var error = false;

    var name = jQuery('#rental_property_inquiry_name').val();
    if (name == "" || name == " ") {
      jQuery('#rental_property_inquiry_name').parent().addClass('has-error');
      error = true;
    }

    var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = jQuery('#rental_property_inquiry_email').val();
    if (email == "" || email == " ") {
      jQuery('#rental_property_inquiry_email').parent().addClass('has-error');
      error = true;
    } else if (!checkEmail.test(email)) {
      jQuery('#rental_property_inquiry_email').parent().addClass('has-error');
      error = true;
    }

    var message = jQuery('#rental_property_inquiry_message').val();
    if (message == "" || message == " ") {
      jQuery('#rental_property_inquiry_message').parent().addClass('has-error');
      error = true;
    }

    if (error == true) {
      jQuery('#error').fadeIn('slow');
      setTimeout(function() {
        jQuery('#error').fadeOut('slow');
      }, 3000);
      return false;
    }
    else {
      jQuery('#rental_property_inquiry_name').parent().removeClass('has-error');
      jQuery('#rental_property_inquiry_email').parent().removeClass('has-error');
      jQuery('#rental_property_inquiry_message').parent().removeClass('has-error');
    }
  })
.on("ajax:error", function(evt, xhr, status, error) {
  if (error == "timeout") {
    jQuery('#timedout').fadeIn('slow');
    setTimeout(function() {
      jQuery('#timedout').fadeOut('slow');
    }, 3000);
  } else {
    jQuery('#state').fadeIn('slow');
    jQuery("#state").html('The following error occured: ' + error + '');
    setTimeout(function() {
      jQuery('#state').fadeOut('slow');
    }, 3000);
  }
})
.on("ajax:success", function(evt, data, status, xhr) {
  console.log("success")
  jQuery('#thanks').fadeIn('slow');
  jQuery('input').not(".submit").val('');
  jQuery('textarea').val('');
  setTimeout(function() {
    jQuery('#thanks').fadeOut('slow');
  }, 4000);
})


  $('.sale_property_inquiry')
    .on("ajax:beforeSend", function(evt, xhr, settings) {
    jQuery('span.error').fadeOut('slow');
    jQuery('span.valid').fadeOut('slow');
    jQuery('#thanks').hide();
    jQuery('#error').hide();
    jQuery('#timedout').hide();
    jQuery('#state').hide();

    var error = false;

    var name = jQuery('#sale_property_inquiry_name').val();
    if (name == "" || name == " ") {
      jQuery('#sale_property_inquiry_name').parent().addClass('has-error');
      error = true;
    }

    var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = jQuery('#sale_property_inquiry_email').val();
    if (email == "" || email == " ") {
      jQuery('#sale_property_inquiry_email').parent().addClass('has-error');
      error = true;
    } else if (!checkEmail.test(email)) {
      jQuery('#sale_property_inquiry_email').parent().addClass('has-error');
      error = true;
    }

    var message = jQuery('#sale_property_inquiry_message').val();
    if (message == "" || message == " ") {
      jQuery('#sale_property_inquiry_message').parent().addClass('has-error');
      error = true;
    }

    if (error == true) {
      jQuery('#error').fadeIn('slow');
      setTimeout(function() {
        jQuery('#error').fadeOut('slow');
      }, 3000);
      return false;
    }
    else {
      jQuery('#sale_property_inquiry_name').parent().removeClass('has-error');
      jQuery('#sale_property_inquiry_email').parent().removeClass('has-error');
      jQuery('#sale_property_inquiry_message').parent().removeClass('has-error');
    }
  })
.on("ajax:error", function(evt, xhr, status, error) {
  if (error == "timeout") {
    jQuery('#timedout').fadeIn('slow');
    setTimeout(function() {
      jQuery('#timedout').fadeOut('slow');
    }, 3000);
  } else {
    jQuery('#state').fadeIn('slow');
    jQuery("#state").html('The following error occured: ' + error + '');
    setTimeout(function() {
      jQuery('#state').fadeOut('slow');
    }, 3000);
  }
})
.on("ajax:success", function(evt, data, status, xhr) {
  console.log("success")
  jQuery('#thanks').fadeIn('slow');
  jQuery('input').val('');
  jQuery('textarea').val('');
  setTimeout(function() {
    jQuery('#thanks').fadeOut('slow');
  }, 4000);
})


  //===========================================================
  // NAVIGATION
  //===========================================================
  
  // Nav Sticky

  $(window).scroll(function() {
    if (window.scrollY > 500 && !$('.mobile-toggle').is(":visible")) {
      $('.top-bar').addClass('nav-sticky');
    } else {
      $('.top-bar').removeClass('nav-sticky');
    }
  });

  // Offscreen Nav

  $('.offscreen-toggle').click(function() {
    $('.main-container').toggleClass('reveal-nav');
    $('.offscreen-container').toggleClass('reveal-nav');
    $('.offscreen-menu .container').toggleClass('reveal-nav');
  });

  $('.main-container').click(function() {
    if ($(this).hasClass('reveal-nav')) {
      $('.main-container').toggleClass('reveal-nav');
      $('.offscreen-container').toggleClass('reveal-nav');
      $('.offscreen-menu .container').toggleClass('reveal-nav');
    }
  });


  // Margin first section for top bar

  if (!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')) {
    //$('.main-container').first().css('margin-top', $('nav').outerHeight());
  }

  $(window).resize(function() {
    if (!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')) {
      //$('.main-container').first().css('margin-top', $('nav').outerHeight());
    }
  });

  //===========================================================
  // LOGO SIZE
  //===========================================================
  
  // Detect logo dimensions and add correct class

  // var logoImage = $('.top-bar .logo:first-of-type');

  // var theImage = new Image();
  // theImage.src = logoImage.attr("src");

  // var logoWidth = theImage.width;
  // var logoHeight = theImage.height;
  // var logoRatio = logoWidth / logoHeight;

  // if (logoRatio > 2.8) {
  //   $('.top-bar .logo').addClass('logo-wide');
  // }

  // if (logoRatio < 2) {
  //   $('.top-bar .logo').addClass('logo-square');
  // }

  //===========================================================
  // SMOOTH SCROLL
  //===========================================================

  $('.inner-link').smoothScroll({
    offset: -96,
    speed: 800
  });

  //===========================================================
  // MOBILE TOGGLE
  //===========================================================

  $('.mobile-toggle').click(function() {
    $('nav').toggleClass('open-nav');
  });

  // Fullscreen nav toggle

  $('.fullscreen-nav-toggle').click(function() {
    if (!$('.fullscreen-nav-container').hasClass('show-fullscreen-nav')) {
      $('.fullscreen-nav-container').addClass('show-fullscreen-nav');
      setTimeout(function() {
        $('.fullscreen-nav-container').addClass('fade-fullscreen-nav');
      }, 100);
      $(this).addClass('toggle-icon');
    } else {
      $(this).removeClass('toggle-icon');
      $('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
      setTimeout(function() {

        $('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
      }, 500);
    }
  });

  $('.fullscreen-nav-container .menu li a').click(function() {
    $('.fullscreen-nav-toggle').removeClass('toggle-icon');
    $('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
    setTimeout(function() {
      $('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
    }, 500);
  });

  // Pad first section for overlay bar

  if ($('nav').hasClass('overlay-bar') || $('nav').hasClass('contained-bar')) {
    console.log("ok");
    var currentPad = parseInt($('.main-container').find(':first-child').css('padding-top'));
    var newPad = currentPad + $('nav').outerHeight() - 48;
    if (currentPad > 0) {
      $('.main-container').children(':first').css('padding-top', newPad);
    } else if ($('.main-container').find(':first').hasClass('hero-slider')) {
      var height = parseInt($('.hero-slider .slides li:first-child').outerHeight());
      var newHeight = height + $('nav').outerHeight();
      $('.hero-slider .slides li').css('height', newHeight);
    }
  }


  // Fullwidth Subnavs

  // Position Fullwidth Subnavs fullwidth correctly

  $('.subnav-fullwidth').each(function() {
    $(this).css('width', $('.container').width());
    var offset = $(this).closest('.has-dropdown').offset();
    offset = offset.left;
    var containerOffset = $(window).width() - $('.container').outerWidth();
    containerOffset = containerOffset / 2;
    offset = offset - containerOffset - 15;
    $(this).css('left', -offset);
  });

  $(window).resize(function() {
    $('.subnav-fullwidth').each(function() {
      $(this).css('width', $('.container').width());
      var offset = $(this).closest('.has-dropdown').offset();
      offset = offset.left;
      var containerOffset = $(window).width() - $('.container').outerWidth();
      containerOffset = containerOffset / 2;
      offset = offset - containerOffset - 15;
      $(this).css('left', -offset);
    });
  });

  //===========================================================
  // SCROLL REVEAL
  //===========================================================

  if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    window.scrollReveal = new scrollReveal();
  } else {
    $('body').addClass('pointer');
  }
  
  //===========================================================
  // SLIDERS
  //===========================================================
  
  // Slider Initializations

  $('.testimonials-slider').flexslider({
    directionNav: false
  });

  $( ".hero-slider" ).each(function( index ) {
    if ($( this ).find('li').length < 2) {
      $( this ).find(".prev").hide();
      $( this ).find(".next").hide();
    }

    $( this ).flexslider({
      animation: "slide",
      directionNav: false,
      controlNav: false,
      touch: false,
      slideshow: true, // add flex-viewport wrapper dom element
      slideshowSpeed: 4000
    });
  });

  $( ".image-slider" ).each(function( index ) {
    if ($( this ).find('li').length < 2) {
      $( this ).find(".prev").hide();
      $( this ).find(".next").hide();
    }

  
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });
    
      $('#slider').flexslider({
          animation: "slide",
          directionNav: false,
          controlNav: false,
          animationLoop: false,
          slideshow: true,
          slideshowSpeed: 4000,
          sync: "#carousel"
        });

  });


  $('.prev, .next').on('click', function() {
    var href = $(this).attr('href');
    var target = $(this).data("target");
    $(target).flexslider(href)
    return false;
  })

  // Slide Sizes

  $('.slider-fullscreen .slides li').each(function() {
    $(this).css('height', $(window).height());
  });

  $('.fullscreen-element').each(function() {
    $(this).css('height', $(window).height());
  });

  //===========================================================
  // TABS
  //===========================================================
  
  // Feature Selector

  $('.selector-tabs li').click(function() {
    $(this).parent('.selector-tabs').children('li').removeClass('active');
    $(this).addClass('active');

    var activeTab = $(this).index() + 1;

    $(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
    $(this).closest('.feature-selector').find('.selector-content').children('li:nth-child(' + activeTab + ')').addClass('active');
  });
  
  //===========================================================
  // BACKGROUND IMAGE
  //===========================================================
  
  // Append .background-image-holder <img>'s as CSS backgrounds

  $('.background-image-holder').each(function() {
    var imgSrc = $(this).children('img').attr('src');
    $(this).css('background', 'url("' + imgSrc + '")');
    $(this).children('img').hide();
    $(this).css('background-position', '50% 0%');
  });
  
  //===========================================================
  // ACCORDION
  //===========================================================

  $('.accordion li').click(function() {
    $(this).parent('.accordion').children('li').removeClass('active');
    $(this).addClass('active');
  });

  //===========================================================
  // PARALLAX
  //===========================================================

  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isIE = /*@cc_on!@*/ false || !! document.documentMode;
  var isChrome = !! window.chrome;
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var prefix;

  if (isFirefox) {
    prefix = '-moz-';
  } else if (isIE) {

  } else if (isChrome || isSafari) {
    prefix = '-webkit-';
  }

  $('.main-container section:first-child').addClass('first-child');

  $('.parallax-background').each(function() {
    if ($(this).closest('section').hasClass('first-child') && !$(this).closest('section').hasClass('slider-fullscreen')) {
      $(this).attr('data-top', prefix + 'transform: translate3d(0px,0px, 0px)');
      $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,200px, 0px)');
    } else {
      $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
      $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
      $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');
    }
  });

  if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    skrollr.init({
      forceHeight: false
    });

    // Multi Layer Parallax

    //$('.hover-background').each(function() {
    //   $(this).mousemove(function(event) {
     //    $(this).find('.background-image-holder').css('transform', 'translate(' + -event.pageX / 18 + 'px,' + -event.pageY / 18 + 'px)');
    //     $(this).find('.layer-1').css('transform', 'translate(' + -event.pageX / 9 + 'px,' + -event.pageY / 10 + 'px)');
    //     $(this).find('.layer-2').css('transform', 'translate(' + -event.pageX / 5 + 'px,' + -event.pageY / 10 + 'px)');
    //   });
    //});
}

  //===========================================================
  // MAPS
  //===========================================================
  
  // Map Holder Overlay

  // $('.map-holder').click(function() {
  //   $(this).addClass('on');
  // });

  // $(window).scroll(function() {
  //   if ($('.map-holder').hasClass('on')) {
  //     $('.map-holder').removeClass('on');
  //   }
  // });

  // Map Details Holder

  // $('.details-holder').each(function() {
  //   $(this).css('height', $(this).width());
  // });

  // $('.details-holder').mouseenter(function() {
  //   $(this).closest('.map-overlay').addClass('fade-overlay');
  // }).mouseleave(function() {
  //   $(this).closest('.map-overlay').removeClass('fade-overlay');
  // });


  //===========================================================
  // COUNTDOWN
  //===========================================================

  // $('.countdown').each(function() {
  //   $(this).countdown({
  //     until: new Date($(this).attr('data-date'))
  //   });
  // });

  //===========================================================
  // TWITTER FEED
  //===========================================================

  // if ($('#tweets').length) {
  //   twitterFetcher.fetch($('#tweets').attr('data-widget-id'), '', 5, true, true, true, '', false, handleTweets);
  // }



});

$(window).load(function() {

  "use strict";

  initialize_map();

  // Align Elements Vertically

  alignVertical();
  alignBottom();

  $(window).resize(function() {
    alignVertical();
    alignBottom();
  });


  // Remove Loader

  $('.loader').css('opacity', 0);
  setTimeout(function() {
    $('.loader').hide();
  }, 600);

  // Mailchimp/Campaign Monitor Mail List Form Scripts
  $('form.mail-list-signup').on('submit', function() {

    var iFrame = $(this).closest('section, header').find('iframe.mail-list-form'),
    thisForm = $(this).closest('.mail-list-signup'),
    userEmail = $(this).find('.signup-email-field').val(),
    userFullName = $(this).find('.signup-name-field').val(),
    userFirstName = $(this).find('.signup-first-name-field').val(),
    userLastName = $(this).find('.signup-last-name-field').val(),
    error = 0;

    $(thisForm).find('.validate-required').each(function() {
      if ($(this).val() === '') {
        $(this).addClass('field-error');
        error = 1;
      } else {
        $(this).removeClass('field-error');
      }
    });

    $(thisForm).find('.validate-email').each(function() {
      if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
        $(this).addClass('field-error');
        error = 1;
      } else {
        $(this).removeClass('field-error');
      }
    });

    if (error === 0) {
      iFrame.contents().find('#mce-EMAIL, #fieldEmail').val(userEmail);
      iFrame.contents().find('#mce-LNAME, #fieldLastName').val(userLastName);
      iFrame.contents().find('#mce-FNAME, #fieldFirstName').val(userFirstName);
      iFrame.contents().find('#mce-FNAME, #fieldName').val(userFullName);
      iFrame.contents().find('form').attr('target', '_blank').submit();
    }
    return false;
  });

});


function alignVertical() {

  $('.align-vertical').each(function() {
    var that = $(this);
    var height = that.height();
    var parentHeight = that.parent().height();
    var padAmount = (parentHeight / 2) - (height / 2);
    that.css('padding-top', padAmount);
  });

}

function alignBottom() {
  $('.align-bottom').each(function() {
    var that = $(this);
    var height = that.height();
    var parentHeight = that.parent().height();
    var padAmount = (parentHeight) - (height) - 32;
    that.css('padding-top', padAmount);
  });
}

// Youtube Background Handling

function onYouTubeIframeAPIReady() {
  $(window).load(function() {
    $('.youtube-bg-iframe').each(function(index) {
      $(this).attr('id', 'yt-' + index);
      var player = new YT.Player($(this).attr('id'), {
        events: {
          'onReady': function() {
            player.mute();
            player.playVideo();
          },
          'onStateChange': function(newState) {
            player.playVideo();
          }
        }
      });
    });
  });

}

function initialize_map() {
  if(typeof google != 'undefined') {
    var $map = $(document.getElementById('map-canvas'));
    var point = $map.data("point").split(",");
    var latlng = new google.maps.LatLng(point[0],point[1]);
    var map_options = {
      zoom: 15,
      center: latlng,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), map_options);
    var marker = new google.maps.Marker({position: latlng,map: map});
  }
}