// @codekit-prepend "../bower_components/outdated-browser/outdatedbrowser/outdatedbrowser.js"
// @codekit-prepend "../bower_components/retina.js/src/retina.js"

// Get viewport width
var responsive_viewport = $(window).width();

$(document).ready(function() {

    // Outdated Browser
    outdatedBrowser({
        bgColor: '#EE0709',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: '../bower_components/outdated-browser/outdatedbrowser/lang/en.html'
    })
});

// Home
if ($('.home').length > 0) {

  if (responsive_viewport >= 1024) {

    // Header scaling according to viewport height
    var br_viewport_height = $( window ).height();
    $('header').css('max-height', br_viewport_height);


    // Scroll navigation in on scroll
      $('#header').css("margin-top", "-98px");
      var mustSlideDown = true;
      var mustSlideUp = false;
      
      $(window).scroll(function() {
          var diff = ($(window).scrollTop() / 5);

          if (diff > 40 && mustSlideDown)  {
              $('#header').animate({'margin-top': '0px' }, {duration: 400, queue: false});
              mustSlideDown = false;
              mustSlideUp = true;
          }
          else if (diff < 40 && mustSlideUp) {
              $('#header').animate({'margin-top': '-98px' }, {duration: 400, queue: false});
              mustSlideUp = false;
              mustSlideDown = true;
          }
      });
  }


  // Toggle mobile logo with nav
  $("#mobile-logo").addClass('hidden');

  $('input#toggle').click(function() {
      $("#mobile-logo").toggleClass('hidden');
  });


    // Smooth scroll to Tickets section
  var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) {

          // This will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();

            // Calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }

            // Go to destination
            if (responsive_viewport < 768) {
              $('html, body').animate({
                  scrollTop: dest -30
              }, 1000, 'swing');
            }

            if (responsive_viewport >= 1024) {
              $('html, body').animate({
                  scrollTop: dest -150
              }, 1000, 'swing');
            }

            else if (responsive_viewport >= 768) {
              $('html, body').animate({
                  scrollTop: dest -50
              }, 1000, 'swing');
            }            

            hashTagActive = this.hash;
            $('.nav-tickets').addClass('active');
        }
    });


  // Check for #buy-tickets in URL
  if (location.hash === "#tickets") {
    $(window).load(function() {

      // Go to destination
            if (responsive_viewport < 768) {
              $("html, body").animate({ 
          scrollTop: $('#tickets').offset().top - 30
        }, 1000, 'swing');
            $('.nav-tickets').addClass('active');
            }

            if (responsive_viewport >= 1024) {
              $("html, body").animate({ 
          scrollTop: $('#tickets').offset().top - 150
        }, 1000, 'swing');
            $('.nav-tickets').addClass('active');
            }

            else if (responsive_viewport >= 768) {
              $("html, body").animate({ 
          scrollTop: $('#tickets').offset().top - 50
        }, 1000, 'swing');
            $('.nav-tickets').addClass('active');
            }
      });
    }


    // Full-screen video
  $(window).load(function() {    
    var theWindow        = $(window),
        $bg              = $('video'),
        aspectRatio      = $bg.width() / $bg.height();
                      
    function resizeBg() {
      if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
          $bg.removeClass().addClass('video-height');
      } else {
          $bg.removeClass().addClass('video-width');
      }     
    }                   
    theWindow.resize(resizeBg).trigger("resize");
  });


  // Google Map
  function initialize_home() {

    if (responsive_viewport < 768) {
      var point = new google.maps.LatLng(51.383304, -2.361569);

      // Set the map options
      var mapOptions = {
        zoom: 14,
        center: point,
        scrollwheel: false,
        draggable: false
      };
    }

    else if (responsive_viewport >= 768) {
      var point = new google.maps.LatLng(51.382695, -2.361869);

      // Set the map options
      var mapOptions = {
        zoom: 15,
        center: point,
        scrollwheel: false
      };
    }

    else if (responsive_viewport >= 1024) {

      var point = new google.maps.LatLng(51.383298, -2.361934);

      // Set the map options
      var mapOptions = {
        zoom: 15,
        center: point,
        scrollwheel: false
      };
    }

    // Create the map
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var bath_ruby_pin_img = new google.maps.MarkerImage(
      '../images/venue/bath-ruby-pin@2x.png',
      null, 
      null, 
      new google.maps.Point(32, 47),
      new google.maps.Size(67, 86)
    );

    var br_pin_img = new google.maps.MarkerImage(
      '../images/venue/map-pin@2x.png',
      null, 
      null, 
      new google.maps.Point(23, 27),
      new google.maps.Size(47, 55)
    );

    var shape = {
      coord: [75,0,79,1,82,2,85,3,87,4,88,5,90,6,91,7,92,8,93,9,94,10,95,11,96,12,97,13,98,14,98,15,99,16,99,17,100,18,100,19,101,20,101,21,101,22,102,23,102,24,102,25,102,26,103,27,103,28,103,29,103,30,103,31,103,32,103,33,103,34,103,35,103,36,103,37,103,38,103,39,103,40,103,41,103,42,102,43,102,44,102,45,102,46,101,47,101,48,101,49,100,50,100,51,100,52,99,53,99,54,98,55,99,56,99,57,103,58,103,59,105,60,105,61,107,62,107,63,111,64,111,65,113,66,113,67,115,68,115,69,117,70,117,71,119,72,119,73,121,74,121,75,121,76,121,77,123,78,123,79,125,80,125,81,125,82,125,83,127,84,127,85,127,86,127,87,127,88,127,89,129,90,129,91,129,92,129,93,129,94,129,95,131,96,131,97,131,98,131,99,131,100,131,101,131,102,131,103,131,104,131,105,131,106,131,107,133,108,133,109,133,110,133,111,133,112,133,113,131,114,131,115,131,116,131,117,131,118,131,119,131,120,131,121,131,122,131,123,131,124,131,125,129,126,129,127,129,128,129,129,129,130,129,131,127,132,127,133,127,134,127,135,125,136,125,137,125,138,125,139,123,140,123,141,123,142,123,143,121,144,121,145,119,146,119,147,117,148,117,149,117,150,117,151,115,152,115,153,111,154,111,155,109,156,109,157,107,158,107,159,105,160,105,161,101,162,101,163,97,164,97,165,93,166,93,167,87,168,87,169,79,170,79,171,54,171,54,170,46,169,46,168,40,167,40,166,36,165,36,164,32,163,32,162,28,161,28,160,26,159,26,158,22,157,22,156,20,155,20,154,18,153,18,152,16,151,16,150,14,149,14,148,14,147,14,146,12,145,12,144,10,143,10,142,8,141,8,140,8,139,8,138,6,137,6,136,6,135,6,134,4,133,4,132,4,131,4,130,4,129,4,128,2,127,2,126,2,125,2,124,2,123,2,122,2,121,2,120,2,119,2,118,0,117,0,116,0,115,0,114,0,113,0,112,0,111,0,110,0,109,0,108,0,107,0,106,0,105,0,104,0,103,0,102,2,101,2,100,2,99,2,98,2,97,2,96,2,95,2,94,4,93,4,92,4,91,4,90,4,89,4,88,6,87,6,86,6,85,6,84,8,83,8,82,8,81,8,80,10,79,10,78,12,77,12,76,12,75,12,74,14,73,14,72,16,71,16,70,18,69,18,68,20,67,20,66,22,65,22,64,24,63,24,62,28,61,28,60,30,59,30,58,34,57,34,56,34,55,33,54,33,53,33,52,32,51,32,50,31,49,31,48,31,47,31,46,31,45,30,44,30,43,30,42,30,41,30,40,30,39,29,38,29,37,29,36,29,35,29,34,29,33,29,32,29,31,30,30,30,29,30,28,30,27,30,26,30,25,31,24,31,23,31,22,31,21,32,20,32,19,33,18,33,17,34,16,34,15,35,14,36,13,36,12,37,11,38,10,39,9,40,8,41,7,43,6,44,5,46,4,48,3,50,2,53,1,57,0,75,0],
      type: 'poly'
    };

    // Assembly Rooms
    var bath_ruby_pin_0 = new google.maps.Marker({
      draggable: false,
      icon: bath_ruby_pin_img,
      shape: shape,
      map: map,
      position: new google.maps.LatLng(51.386205, -2.362845),
      animation: google.maps.Animation.DROP
    });

  }


  // Animate Markers
  function toggleBounce() {
    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }


  // Load the Google Maps js file
  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize_home';
    document.body.appendChild(script);
  }
  window.onload = loadScript;

  // Fix a bug in Google Chrome pixel rounding
  var isChrome = !!window.chrome;
  if (isChrome === true) { 
      $('input[type="submit"]').css('padding', '12px 18px 11px')
  }
}


// Information
if ($('.information-page').length > 0) {

  // Google Map
  function initialize_info() {

    var point = new google.maps.LatLng(51.386205, -2.362845);

    if (responsive_viewport < 768) {

      // Set the map options
      var mapOptions = {
        zoom: 14,
        center: point,
        scrollwheel: false,
        draggable: false
      };
    }

    else if (responsive_viewport >= 768) {

      // Set the map options
      var mapOptions = {
        zoom: 15,
        center: point,
        scrollwheel: false
      };
    }

    // Create the map
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var bath_ruby_pin_img = new google.maps.MarkerImage(
      '../images/venue/bath-ruby-pin@2x.png',
      null, 
      null, 
      new google.maps.Point(32, 47),
      new google.maps.Size(67, 86)
    );

    var shape = {
      coord: [75,0,79,1,82,2,85,3,87,4,88,5,90,6,91,7,92,8,93,9,94,10,95,11,96,12,97,13,98,14,98,15,99,16,99,17,100,18,100,19,101,20,101,21,101,22,102,23,102,24,102,25,102,26,103,27,103,28,103,29,103,30,103,31,103,32,103,33,103,34,103,35,103,36,103,37,103,38,103,39,103,40,103,41,103,42,102,43,102,44,102,45,102,46,101,47,101,48,101,49,100,50,100,51,100,52,99,53,99,54,98,55,99,56,99,57,103,58,103,59,105,60,105,61,107,62,107,63,111,64,111,65,113,66,113,67,115,68,115,69,117,70,117,71,119,72,119,73,121,74,121,75,121,76,121,77,123,78,123,79,125,80,125,81,125,82,125,83,127,84,127,85,127,86,127,87,127,88,127,89,129,90,129,91,129,92,129,93,129,94,129,95,131,96,131,97,131,98,131,99,131,100,131,101,131,102,131,103,131,104,131,105,131,106,131,107,133,108,133,109,133,110,133,111,133,112,133,113,131,114,131,115,131,116,131,117,131,118,131,119,131,120,131,121,131,122,131,123,131,124,131,125,129,126,129,127,129,128,129,129,129,130,129,131,127,132,127,133,127,134,127,135,125,136,125,137,125,138,125,139,123,140,123,141,123,142,123,143,121,144,121,145,119,146,119,147,117,148,117,149,117,150,117,151,115,152,115,153,111,154,111,155,109,156,109,157,107,158,107,159,105,160,105,161,101,162,101,163,97,164,97,165,93,166,93,167,87,168,87,169,79,170,79,171,54,171,54,170,46,169,46,168,40,167,40,166,36,165,36,164,32,163,32,162,28,161,28,160,26,159,26,158,22,157,22,156,20,155,20,154,18,153,18,152,16,151,16,150,14,149,14,148,14,147,14,146,12,145,12,144,10,143,10,142,8,141,8,140,8,139,8,138,6,137,6,136,6,135,6,134,4,133,4,132,4,131,4,130,4,129,4,128,2,127,2,126,2,125,2,124,2,123,2,122,2,121,2,120,2,119,2,118,0,117,0,116,0,115,0,114,0,113,0,112,0,111,0,110,0,109,0,108,0,107,0,106,0,105,0,104,0,103,0,102,2,101,2,100,2,99,2,98,2,97,2,96,2,95,2,94,4,93,4,92,4,91,4,90,4,89,4,88,6,87,6,86,6,85,6,84,8,83,8,82,8,81,8,80,10,79,10,78,12,77,12,76,12,75,12,74,14,73,14,72,16,71,16,70,18,69,18,68,20,67,20,66,22,65,22,64,24,63,24,62,28,61,28,60,30,59,30,58,34,57,34,56,34,55,33,54,33,53,33,52,32,51,32,50,31,49,31,48,31,47,31,46,31,45,30,44,30,43,30,42,30,41,30,40,30,39,29,38,29,37,29,36,29,35,29,34,29,33,29,32,29,31,30,30,30,29,30,28,30,27,30,26,30,25,31,24,31,23,31,22,31,21,32,20,32,19,33,18,33,17,34,16,34,15,35,14,36,13,36,12,37,11,38,10,39,9,40,8,41,7,43,6,44,5,46,4,48,3,50,2,53,1,57,0,75,0],
      type: 'poly'
    };

    // Bath Assembly Rooms
    var bath_ruby_pin_0 = new google.maps.Marker({
      draggable: false,
      icon: bath_ruby_pin_img,
      shape: shape,
      map: map,
      position: new google.maps.LatLng(51.386205, -2.362845),
      animation: google.maps.Animation.DROP
    });
  }
  
  // Load the Google Maps js file
  function loadScript1() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize_info';
    document.body.appendChild(script);
  }
  window.onload = loadScript1;
}


// Set all Speakers to have an equal height boxes
function equalheight() {    
    $('.equalheight').each(function(index) {
        var maxHeight = 0;
        $(this).children().each(function(index) {
            if($(this).height() > maxHeight) 
                maxHeight = $(this).height();
        });
        $(this).children().height(maxHeight);
    });    
}
$(window).bind("load", equalheight);
$(window).bind("resize", equalheight);