
var YTdeferred = jQuery.Deferred();
window.onYouTubeIframeAPIReady = function() {
  YTdeferred.resolve(window.YT);
};

jQuery(document).ready(function($){



  $('.navbar-toggler').click(function(){
    var $menu = $('#navbarNavDropdown');
    if( $menu.hasClass('slided') ){
      $menu.slideUp().removeClass('slided');
    }else{
      $menu.slideDown().addClass('slided');
    }

  });


  $(".rslides").responsiveSlides({
    timeout: 7000,
    nav: true,
    prevText: "Précédent",
    nextText: "Suivant",
  });

  $('.parallax.scroll').each(function(){
    var $element = $(this);
    $element.on('inview', function(event, isInView) {
      if (isInView) {
        $element.addClass('inview');
      } else {
        $element.removeClass('inview');
      }
    });
  });


  $('.parallax.scroll.inview').each(function(){
    var $this = $(this);
    var offsetTop = $(this).offset();
    offsetTop = (offsetTop.top - $(document).scrollTop() - $(window).height()) / 5;
    $this.css({'background-position': 'center '+offsetTop+'px'});
  });

YTdeferred.done(function(YT){
  $('.video-bg.video-muted').each(function(){
    var $videoID = $('div',$(this)).attr('id');
     var player;
     player = new YT.Player($videoID, {
       videoId: $videoID, // YouTube Video ID
       playerVars: {
         autoplay: 1,        // Auto-play the video on load
         controls: 0,        // Show pause/play buttons in player
         disablekb: 1,       // Disable keyboard controls
         showinfo: 0,        // Hide the video title
         modestbranding: 1,  // Hide the Youtube Logo
         loop: 1,            // Run the video in a loop
         playlist: $videoID,
         fs: 0,              // Hide the full screen button
         cc_load_policy: 0, // Hide closed captions
         iv_load_policy: 3,  // Hide the Video Annotations
         autohide: 0    ,     // Hide video controls when playing
       },
       events: {
         onReady: function(e) {
           e.target.mute();
         }
       }
     });



     var videoRatio = 16/9;
     var containerWidth = $(this).width();
     var containerHeight = $(this).height();
     var containerRatio = containerWidth / containerHeight;
     if( containerRatio > videoRatio ){
       var iframeHeight = containerWidth * 9 / 16
       var iframeMarginTop = - iframeHeight / 2;
       $('#'+$videoID).css({'height': iframeHeight, 'width': '100%', 'margin-top': iframeMarginTop, 'top': '50%','position':'absolute'});
     }else{
       var iframeWidth = containerHeight * 16 / 9
       var iframeMarginLeft = - iframeWidth / 2;
       $('#'+$videoID).css({'width': iframeWidth, 'height': '100%', 'margin-left': iframeMarginLeft, 'left': '50%','position':'absolute'});
     }




  });
});

$(window).resize(function(){
  $('.video-bg.video-muted').each(function(){
    var $videoID = $('iframe',$(this)).attr('id');
    var videoRatio = 16/9;
    var containerWidth = $(this).width();
    var containerHeight = $(this).height();
    var containerRatio = containerWidth / containerHeight;
    if( containerRatio > videoRatio ){
      var iframeHeight = containerWidth * 9 / 16
      var iframeMarginTop = - iframeHeight / 2;
      $('#'+$videoID).css({'height': iframeHeight, 'width': '100%', 'margin-top': iframeMarginTop, 'top': '50%','position':'absolute'});
    }else{
      var iframeWidth = containerHeight * 16 / 9
      var iframeMarginLeft = - iframeWidth / 2;
      $('#'+$videoID).css({'width': iframeWidth, 'height': '100%', 'margin-left': iframeMarginLeft, 'left': '50%','position':'absolute'});
    }
  });
});

  $(window).scroll(function(){

    $('.parallax.scroll.inview').each(function(){
      var $this = $(this);
      var offsetTop = $(this).offset();
      offsetTop = (offsetTop.top - $(document).scrollTop() - $(window).height()) / 5;
      $this.css({'background-position': 'center '+offsetTop+'px'});
    });

    $('.parallax.scroll').each(function(){
      var $element = $(this);
      $(this).on('inview', function(event, isInView) {
        if (isInView) {
          $element.addClass('inview');
        } else {
          $element.removeClass('inview');
        }
      });
    });
  });




});
