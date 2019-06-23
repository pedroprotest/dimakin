jQuery(document).ready(function( $ ) {
  if(!euReadCookie("euCookiesAcc")){
    $("#eu-cookie-bar").slideDown();
  }
});

function euSetCookie(cookieName, cookieValue, nDays) {
  var today = new Date();
  var expire = new Date();
  if (nDays==null || nDays==0) nDays=1;
  expire.setTime(today.getTime() + 3600000*24*nDays);
  document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString()+"; path=/";
}


function euReadCookie(cookieName) {
  var theCookie=" "+document.cookie;
  var ind=theCookie.indexOf(" "+cookieName+"=");
  if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
  if (ind==-1 || cookieName=="") return "";
  var ind1=theCookie.indexOf(";",ind+1);
  if (ind1==-1) ind1=theCookie.length;
  return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
}

function euDeleteCookie(cookieName) {
  var today = new Date();
  var expire = new Date() - 30;
  expire.setTime(today.getTime() - 3600000*24*90);
  document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString();
}

function euAcceptCookiesWP() {
  euSetCookie("euCookiesAcc", true, 365);
  jQuery("#eu-cookie-bar").slideUp();
}

(function($){

  // Flex Slider Configuration

  var $window = $(window);
  var flexslider = { vars:{} } ;


  function getItemWidth() {
    return (window.innerWidth < 520) ? 300 : 356;
  }
  function getItemMargin() {
    return (window.innerWidth < 520) ? 55 : 30;
  }
  function getItemsNumber(){
    return (window.innerWidth < 520) ? 1 : 3;
  }

  $window.load(function() {

    $('.products-slider-wrapper').flexslider({
      selector: ".products-slider-container > .product",
      animation: "slide",
      slideshow: false,
      controlNav: true,
      prevText: "",
      nextText: "",
      itemWidth: getItemWidth(),
      touch: true,
      itemMargin: getItemMargin(),
      minItems: 1,
      maxItems: getItemsNumber(),
      direction: "horizontal",
    });


  });

  // check grid size on resize event
  $window.resize(function() {
    var itemWidth = getItemWidth();
    var itemMargin = getItemMargin();
    var itemsNumber = getItemsNumber();

    flexslider.vars.itemWidth = itemWidth;
    flexslider.vars.itemMargin = itemMargin;
    flexslider.vars.maxItems = itemsNumber;

    console.log(getItemWidth(), getItemMargin(), getItemsNumber());
  });

  // Searchbar toggle
  $( document ).ready(function() {

    $(".searchform-toggle").click(function(e){
      e.preventDefault();
      $(".header-search-form-wrapper").slideToggle("300", "swing");
      $( ".searchform-toggle > .fa" ).toggleClass( "fa-times" );
    });

  });

  // Button Scroll to top
  $(window).scroll(function(){
    /*if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
      $('#btn-return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#btn-return-to-top').fadeOut(200);   // Else fade out the arrow
    }*/
  });
  $('#btn-return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 700);
  });

})(jQuery);

(function($){
//Mobile Navigation off canvas

  $(document).ready(function() {
    var isMenuOpen = false;

    $('#mobile-toggle-open').click(function() {
      if (isMenuOpen == false) {
        $('.mobile-navigation-wrapper').clearQueue().animate({
          right : '0px'
        })
        $('#mobile-grey-back').fadeIn('fast');
        //$(this).fadeOut(200);
        //$('.close').fadeIn(300);
        isMenuOpen = true;
      }
    });

    $('#mobile-grey-back, #mobile-toggle-close').click(function() {
      if (isMenuOpen == true) {
        $('.mobile-navigation-wrapper').clearQueue().animate({
          right : '-380px'
        })
        //$('#page').clearQueue().animate({
        //  'margin-right' : '0px'
        //})
        $('#mobile-grey-back').fadeOut('fast');
        //$(this).fadeOut(200);
        //$('.mobile-nav-toggle').fadeIn(300);
        isMenuOpen = false;
      }
    });

  });

})(jQuery);
