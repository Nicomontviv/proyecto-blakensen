$(document).ready(function(){
    $('.slider').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
    
    $('.prev').click(function(){
      $('.slider').slick('slickPrev');
    });
    
    $('.next').click(function(){
      $('.slider').slick('slickNext');
    });
  });
  