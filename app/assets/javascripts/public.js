//= require jquery_ujs
//= require gko/gko.galleria
//= require gko/dynamic_selectable
var Site = {
  init: function() { 

      $("div.custom.dropdown").each(function() {
        $(this).css('width', '260px').find('ul').css('width', '260px');
      });

      $('select#rental_property_id').change(function() {
        var result = $(this).val()
        document.location.href = result;
      });
      Carousel.addTheme();
      Carousel.init();
      
          $('select[data-dynamic-selectable-url][data-dynamic-selectable-target]').dynamicSelectable();
    }
}

    var Carousel = {
      init: function() {
        if ($(".galleria").length > 0) {
          $(".galleria").galleria({
            debug: false,
            autoplay: true,
            responsive: true,
            height: .85,
            imageCrop: 'landscape',
            transition: 'flash',
            thumbMargin: 10,
            showCounter: false,
            showInfo: false,
            thumbnails: true
          })
        }
        $('.carousel').each(function(index) {
          var _self = $(this);
          if (_self.find('.item').length > 1) {
            _self.carousel();
          } else {
            _self.find('.carousel-control').each(function(index) {
              $(this).css({
                display: 'none'
              })
            });
          }
        });
      },
      addTheme: function() {

        Galleria.addTheme({
          name: 'classic',
          author: 'Galleria',
          css: 'galleria.classic.css',
          defaults: {
            transition: 'slide',
            thumbCrop: 'height',

            // set this to false if you want to show the caption all the time:
            _toggleInfo: false
          },
          init: function(options) {

            // add some elements
            this.addElement('info-link', 'info-close');
            this.append({
              'info': ['info-link', 'info-close']
            });

            // cache some stuff
            var info = this.$('info-link,info-close,info-text'),
                touch = Galleria.TOUCH,
                click = touch ? 'touchstart' : 'click';

            // show loader & counter with opacity
            this.$('loader,counter').show().css('opacity', 0.4);

            // some stuff for non-touch browsers
            if (!touch) {
              this.addIdleState(this.get('image-nav-left'), {
                left: -50
              });
              this.addIdleState(this.get('image-nav-right'), {
                right: -50
              });
              this.addIdleState(this.get('counter'), {
                opacity: 0
              });
            }

            // toggle info
            if (options._toggleInfo === true) {
              info.bind(click, function() {
                info.toggle();
              });
            } else {
              info.show();
              this.$('info-link, info-close').hide();
            }

            // bind some stuff
            this.bind('thumbnail', function(e) {

              if (!touch) {
                // fade thumbnails
                $(e.thumbTarget).css('opacity', 0.6).parent().hover(function() {
                  $(this).not('.active').children().stop().fadeTo(100, 1);
                }, function() {
                  $(this).not('.active').children().stop().fadeTo(400, 0.6);
                });

                if (e.index === this.getIndex()) {
                  $(e.thumbTarget).css('opacity', 1);
                }
              } else {
                $(e.thumbTarget).css('opacity', this.getIndex() ? 1 : 0.6);
              }
            });

            this.bind('loadstart', function(e) {
              if (!e.cached) {
                this.$('loader').show().fadeTo(200, 0.4);
              }

              this.$('info').toggle(this.hasInfo());

              $(e.thumbTarget).css('opacity', 1).parent().siblings().children().css('opacity', 0.6);
            });

            this.bind('loadfinish', function(e) {
              this.$('loader').fadeOut(200);
            });
          }
        });
      }
    }
    $(document).ready(function() {
      Site.init();
    });
