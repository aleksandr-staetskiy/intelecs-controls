$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      // center: true,
      items:1,
      margin: 25,
      loop: true,
      dots: true
    });
  });