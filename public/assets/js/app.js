"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  UXORA PRELOADER JS INIT
  UXORA HEADER TRIGER JS INIT
  UXORA MENU SIDEBAR JS INIT
  UXORA PROGRES CIRCLE JS INIT
  UXORA MAGNIFIC PUPOP JS INIT
  UXORA BRAND SLIDER INIT
  UXORA COUNTER JS INIT
  UXORA TSTIMONIAL SLIDER INIT
  UXORA CURRENT YEAR JS INIT
  UXORA AOS ANIMATION JS INIT
  UXORA PORTFOLIO MASONAY FILTER JS
  UXORA TOGGLE PASSOWRD JS INIT
  
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    UXORA PRELOADER JS INIT
    --------------------------------------------------------------*/
    // $(".uxora-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    UXORA SIDEBAR TRIGER JS INIT
    --------------------------------------------------------------*/
    $(".menu-bar").on("click", function () {
      $(".uxora-offcanves-sidebar, .offcanvas-overlay").addClass("active");
    });
    $(".close, .offcanvas-overlay").on("click", function () {
      $(".uxora-offcanves-sidebar, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    UXORA MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".uxora-header-triger").on("click", function (e) {
      $(".uxora-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".uxora-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".uxora-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    UXORA PROGRES CIRCLE JS INIT
    --------------------------------------------------------------*/

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function updateProgress() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });

    /*--------------------------------------------------------------
    UXORA MAGNIFIC PUPOP JS INIT
    --------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

    /*--------------------------------------------------------------
    UXORA BRAND JS INIT
    --------------------------------------------------------------*/

    var brand_slider = $('.uxora-brand-slider-init');
    if (brand_slider.is_exist()) {
      brand_slider.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
    var p_slider_data = $('.uxora-t-slider-init');
    if (p_slider_data.is_exist()) {
      p_slider_data.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
    var testimonial_slider_data = $('.uxora-t-slider-init2');
    if (testimonial_slider_data.is_exist()) {
      testimonial_slider_data.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        arrows: false,
        rtl: true,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    UXORA COUNTER JS INIT
    --------------------------------------------------------------*/

    var stats = document.querySelectorAll(".uxora-counter-data");
    stats.forEach(function (stat) {
      // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
      var patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
      var time = 1000;
      var result = _toConsumableArray(patt.exec(stat.textContent));
      var fresh = true;
      var ticks;

      // Remove first full match from result array (we dont need the full match, just the individual match groups).
      result.shift();
      // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
      result = result.filter(function (res) {
        return res != null;
      });
      while (stat.firstChild) {
        stat.removeChild(stat.firstChild);
      }
      var _iterator = _createForOfIteratorHelper(result),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var res = _step.value;
          if (isNaN(res)) {
            stat.insertAdjacentHTML("beforeend", "<span>".concat(res, "</span>"));
          } else {
            for (var i = 0; i < res.length; i++) {
              stat.insertAdjacentHTML("beforeend", "<span data-value=\"".concat(res[i], "\">\n\t\t\t\t\t\t<span>&ndash;</span>\n\t\t\t\t\t\t").concat(Array(parseInt(res[i]) + 1).join(0).split(0).map(function (x, j) {
                return "\n\t\t\t\t\t\t\t<span>".concat(j, "</span>\n\t\t\t\t\t\t");
              }).join(""), "\n\t\t\t\t\t</span>"));
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ticks = _toConsumableArray(stat.querySelectorAll("span[data-value]"));
      var _activate = function activate() {
        var top = stat.getBoundingClientRect().top;
        var offset = window.innerHeight * 0.8;
        setTimeout(function () {
          fresh = false;
        }, time);
        if (top < offset) {
          setTimeout(function () {
            var _iterator2 = _createForOfIteratorHelper(ticks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var tick = _step2.value;
                var dist = parseInt(tick.getAttribute("data-value")) + 1;
                tick.style.transform = "translateY(-".concat(dist * 100, "%)");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, fresh ? time : 0);
          window.removeEventListener("scroll", _activate);
        }
      };
      window.addEventListener("scroll", _activate);
      _activate();
    });
    var $items = $(".uxora-process-wrap");
    if ($items.length) {
      $items.on("mouseover", function () {
        // Remove 'hovered' class from all items
        $items.removeClass("hovered");

        // Add 'hovered' class to the current item
        $(this).addClass("hovered");
      });
    }
    (function ($) {
      $.fn.skillBars = function (options) {
        var settings = $.extend({
          from: 0,
          // number start
          to: false,
          // number end
          speed: 1000,
          // how long it should take to count between the target numbers
          interval: 100,
          // how often the element should be updated
          decimals: 0,
          // the number of decimal places to show
          onUpdate: null,
          // callback method for every time the element is updated,
          onComplete: null,
          // callback method for when the element finishes updating
          /*onComplete: function(from) {
                    console.debug(this);
                }*/
          classes: {
            skillBarBar: '.skillbar-bar',
            skillBarPercent: '.skill-bar-percent'
          }
        }, options);
        return this.each(function () {
          var obj = $(this),
            to = settings.to != false ? settings.to : parseInt(obj.attr('data-percent'));
          if (to > 100) {
            to = 100;
          }
          ;
          var from = settings.from,
            loops = Math.ceil(settings.speed / settings.interval),
            increment = (to - from) / loops,
            loopCount = 0,
            interval = setInterval(updateValue, settings.interval);
          obj.find(settings.classes.skillBarBar).animate({
            width: parseInt(obj.attr('data-percent')) + '%'
          }, settings.speed);
          function updateValue() {
            from += increment;
            loopCount++;
            $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals) + '%');
            if (typeof settings.onUpdate == 'function') {
              settings.onUpdate.call(obj, from);
            }
            if (loopCount >= loops) {
              clearInterval(interval);
              from = to;
              if (typeof settings.onComplete == 'function') {
                settings.onComplete.call(obj, from);
              }
            }
          }
        });
      };
    })(jQuery);
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  /*--------------------------------------------------------------
  UXORA MAP JS INIT
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'uxora'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>uxora' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }
})(jQuery);

/*--------------------------------------------------------------
TECHIN TOOGLE BUTTON JS INIT
--------------------------------------------------------------*/

$(document).ready(function () {
  $(".toggle-button").change(function () {
    toggle(this.checked);
  });

  // Uncomment this to disaplay monthly on page load
  toggle(false);
  function toggle(checked) {
    $(".toggle-button").prop('checked', checked);
    if (checked) {
      $('.coreMonthlyPrice, .proMonthlyPrice').show();
      $('.coreAnnuallyText, .coreAnnuallyPrice, .proAnnuallyPrice').hide();
    } else {
      $('.coreMonthlyPrice,.proMonthlyPrice').hide();
      $('.coreAnnuallyText,.coreAnnuallyPrice, .proAnnuallyPrice').show();
    }
  }
});

/*--------------------------------------------------------------
UXORA TOGGLE PASSOWRD JS INIT
------------------------------------------------------------*/

$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
$(".toggle-password2").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

/*===========================================
    =    On Load Function      =
=============================================*/
$(window).on("load", function () {
  preloader();
});

/*===========================================
    =    Preloader      =
=============================================*/
function preloader() {
  $('.preloader').delay(0).fadeOut();
}
;

// Table BTN Trigger
$("#l5-pricing-btn .toggle-btn").on("click", function (e) {
  console.log($(e.target).parent().parent().hasClass("monthly-active"));
  $(e.target).toggleClass("clicked");
  if ($(e.target).parent().parent().hasClass("monthly-active")) {
    $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
  } else {
    $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
  }
});
$("[data-pricing-trigger]").on("click", function (e) {
  $(e.target).addClass("active").siblings().removeClass("active");
  var target = $(e.target).attr("data-target");
  console.log($(target).attr("data-value-active") == "monthly");
  if ($(target).attr("data-value-active") == "monthly") {
    $(target).attr("data-value-active", "yearly");
  } else {
    $(target).attr("data-value-active", "monthly");
  }
});