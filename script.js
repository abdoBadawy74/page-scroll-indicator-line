$(document).ready(function () {

  $(window).scroll(function () {
    
    let windowTop = $(window).scrollTop();
    
    let documentHeight = $(document).height();
    
    let windoHeight = $(window).height();
    
    let scroll = (windowTop / (documentHeight - windoHeight)) * 100;

    $('.scroll-line').css("width", (scroll + "%"))
  });

});
