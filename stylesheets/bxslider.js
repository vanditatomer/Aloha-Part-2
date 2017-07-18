$(document).ready(function(){
if ($(window).width() < 600) {
    $('.bxslider').bxSlider({
    maxSlides:1,
    minSlides:1,
    slideWidth: 400,
  });
} else if ($(window).width() < 1000){
  $('.bxslider').bxSlider({
    maxSlides:2,
    minSlides:2,
    slideWidth: 400,
  });
} else {
  $('.bxslider').bxSlider({
    maxSlides:4,
    minSlides:4,
    slideWidth: 400,
  });
}
$(window).on('resize',function(){
    if ($(window).width() > 0) {   
      location.reload();  // refresh page 
    }
}); 
});