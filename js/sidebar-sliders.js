$(document).ready(function () {

    //  $('.slider').slick({
    //     dots:true,
    //     slidesToShow: 1,
    // slidesToScroll: 1, 
    //     infinite: false,
    //     initialSlide: 1,
    //     mobileFirst : true
    // });

    $("#owl-suspensions").owlCarousel({
 
      autoPlay:false,
      navigation : true, // Show next and prev buttons
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true,
        navigationText: [
      "<i class='fa fa fa-chevron-left'></i>",
      "<i class='fa fa fa-chevron-right' icon-white'></i>"
      ]
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

    $("#owl-wheels").owlCarousel({
 
      autoPlay:false,
      navigation : true, // Show next and prev buttons
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true,
        navigationText: [
      "<i class='fa fa fa-chevron-left'></i>",
      "<i class='fa fa fa-chevron-right' icon-white'></i>"
      ]
 
  });

$("#owl-exhaust").owlCarousel({
 
      autoPlay:false,
      navigation : true, // Show next and prev buttons
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true,
        navigationText: [
      "<i class='fa fa fa-chevron-left'></i>",
      "<i class='fa fa fa-chevron-right' icon-white'></i>"
      ]
      
 
  });

$("#owl-brakes").owlCarousel({
 
      autoPlay:false,
      navigation : true, // Show next and prev buttons
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true,
        navigationText: [
      "<i class='fa fa fa-chevron-left'></i>",
      "<i class='fa fa fa-chevron-right' icon-white'></i>"
      ]
      
 
  });

$("#owl-lighting").owlCarousel({
 
      autoPlay:false,
      navigation : true, // Show next and prev buttons
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true,
        navigationText: [
      "<i class='fa fa fa-chevron-left'></i>",
      "<i class='fa fa fa-chevron-right' icon-white'></i>"
      ]
      
 
  });

$("#owl-exterior").owlCarousel({
 
      autoPlay:false,
      navigation : true, // Show next and prev buttons
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true,
        navigationText: [
      "<i class='fa fa fa-chevron-left'></i>",
      "<i class='fa fa fa-chevron-right' icon-white'></i>"
      ]
      
  });

    var swiper = new Swiper('.s1', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
    
    });
   
});