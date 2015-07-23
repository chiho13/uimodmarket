$(document).ready(function(){

   var swiper2 = new Swiper('.s2', {
        slidesPerView: 4,
        pagination: '.swiper-pagination2',
        paginationClickable: '.swiper-pagination2',
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        spaceBetween: 30,
    
    });


$('#exterior-jdm').live('click', function (){
          swiper2.removeAllSlides();
        swiper2.appendSlide([
        '<div class="swiper-slide auto-height" id="frontsplitter"><img src="img/Exterior/jdm/frontsplitter.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/jdm/typea.png"></div>',
]);
});
      // return false

       
$("#frontsplitter").live('click', function(){


          // $.getScript("js/jquery.wheelcolorpicker.js", function (){
          //   $('#color-inline2').wheelColorPicker({ sliders: "whsvp", preview: true, format: "css" });
          // }
         
  
      $(".tab-pane").removeClass("active");
      $(".btn-colortab").removeClass("active");

      $("#tab2primary").addClass("active in ");
      $(".btn-part").addClass("active");

      // $('#tab2primary').load("Manufacturer/carparts/jdm.html");
      // $('#tab2primary').load("js/jquery.wheelcolorpicker.js");


});

});



