$(document).ready(function(){

   var swiper2 = new Swiper('.s2', {
        slidesPerView: 4,
        pagination: '.swiper-pagination2',
        paginationClickable: '.swiper-pagination2',
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        spaceBetween: 30,
    
    });

    // var swiper3 = new Swiper('.s3', {
    //     pagination: '.swiper-pagination3',
    //     paginationClickable: '.swiper-pagination3',
    //     nextButton: '.swiper-button-next3',
    //     prevButton: '.swiper-button-prev3',
    //     spaceBetween: 30
    
    // });
    // $(".show-hidestuff").hide();

//Wheels swiper api and load html

    $('.wheel-logos').on('click', '#vossenseries', function (){
        $("#part-series").load("components_series/Wheels/vossenseries.html");
// $(".swiper-pagination2 .blocked").css("visibility", "none");
    swiper2.removeAllSlides();
   

 

  });

    $("#vf").live('click', function(){
    swiper2.removeAllSlides();
      swiper2.appendSlide([
  
    '<div class="swiper-slide"><img src="img/Wheels/Vossen/vossenbrushed.png"></div>', 
    '<div class="swiper-slide"><img src="img/Wheels/Vossen/vossenglossgraphite.png"></div>',
    '<div class="swiper-slide"><img src="img/Wheels/Vossen/vossenpolished.png"></div>', 
    '<div class="swiper-slide"><img src="img/Wheels/Vossen/vossensatinbronze.png"></div>'
    
   
]);

      // return false

 $(".show-hidestuff").show();
    

    });

     $('#cv3').live('click', function(){
      swiper2.removeAllSlides();
      swiper2.appendSlide([
    '<div class="swiper-slide" id="cv3"><img src="img/Wheels/Vossen/cv3graphite.png"></div>', 
    '<div class="swiper-slide"><img src="img/Wheels/Vossen/cv3silver2.png"></div>'
  ]);
    
      // return false
    });
       



});




