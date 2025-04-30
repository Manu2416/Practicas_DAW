$(document).ready(function(){
  $('.slick-carousel').slick({
   
    slidesToShow: 3, 
    arrows: true,  
    prevArrow: '.slick-prev',  
    nextArrow: '.slick-next', 
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, 
          dots: true, 
          arrows: false
        }
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2, 
          dots: true, 
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});
