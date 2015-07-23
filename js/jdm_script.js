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
        '<div class="swiper-slide auto-height"><img src="img/Exterior/jdm/frontsplitter.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/jdm/typea.png"></div>',
]);
});
      // return false

       
$("#vfs2").live('click', function(){
      $(".tab-pane").removeClass("active");
      $(".btn-colortab").removeClass("active");

      $("#tab2primary").addClass("active in ");
      $(".btn-part").addClass("active");

      $('#tab2primary').load("Manufacturer/carparts/vfs2.html");
    });

$("#cv3part").live('click', function(){
      $(".tab-pane").removeClass("active");
      $(".btn-colortab").removeClass("active");

      $("#tab2primary").addClass("active in ");
      $(".btn-part").addClass("active");

      $('#tab2primary').load("Manufacturer/carparts/cv3.html");
    });



});




