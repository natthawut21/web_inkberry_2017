var  nd = $(".navbar.navbar-inverse");
var  nft = "navbar-fixed-top";
var  hdr = $('#myCarousel').height(); 

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    nd.addClass(nft);
  } else {
    nd.removeClass(nft);
  }
});