$(document).ready(function(){

   var swiper2 = new Swiper('.s2', {
        slidesPerView: 3,
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
       


     $('.wheel-logos').on('click', '#enkeiseries', function (){
        $("#part-series").load("components_series/Wheels/enkeiseries.html");
        swiper2.removeAllSlides();
        swiper2.appendSlide([
   ' <div class="swiper-slide margin-wheel"><img src="img/Wheels/Enkei/Raijin2.png"></div>', 
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Enkei/RPF1_2.png"></div>',
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Enkei/RS05RR_2.png"></div>', 
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Enkei/T6S_2.png"></div>'
   
]);
        // return false

    });

     //Rays Engineering

$('.wheel-logos').on('click', '#rayseries', function (){
        $("#part-series").load("components_series/Wheels/raysseries.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Rays/RE30.png"></div>',
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Rays/TE37.png"></div>', 
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Rays/ZE40.png"></div>'
   
]);

});
  
$('.wheel-logos').on('click', '#workseries', function (){
        $("#part-series").load("components_series/Wheels/workseries.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Work/meister.png"></div>',
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Work/emotion.png"></div>', 
    '<div class="swiper-slide margin-wheel"><img src="img/Wheels/Work/gnosis.png"></div>'
   
]);
});

//Suspensions 

  $('.suspension-logos').on('click', '#cusco', function (){
        $("#part-series").load("components_series/Suspensions/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Cusco/brakestopper.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Cusco/coilovers.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Cusco/enginebay.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Cusco/swaybarhard.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Cusco/powerbrace.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Cusco/swaybar.jpg"></div>'

   
]);
});


   $('.suspension-logos').on('click', '#eibach', function (){
        $("#part-series").load("components_series/Suspensions/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Eibach/antiroll.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Eibach/camber.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Eibach/proplus.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Eibach/r2.jpg"></div>',
   

   
]);
});

    $('.suspension-logos').on('click', '#whiteline', function (){
        $("#part-series").load("components_series/Suspensions/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Whiteline/ahde.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Whiteline/ekf.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Whiteline/fstb.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Whiteline/rck.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Suspensions/Whiteline/rsb.jpg"></div>',
  
     
]);
});

//Exhaust
  
   $('.exhaust-logos').on('click', '#afe', function (){
        $("#part-series").load("components_series/Exhaust/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/afe/ssdc.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/afe/tsst.jpg"></div>',
   
  
     
]);
});

    $('.exhaust-logos').on('click', '#borla', function (){
        $("#part-series").load("components_series/Exhaust/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/borla/cat.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/borla/downpipe.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/borla/elh.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/borla/ue.jpg"></div>',
     
]);
});


 $('.exhaust-logos').on('click', '#invidia', function (){
        $("#part-series").load("components_series/Exhaust/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/invidia/catback.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/invidia/catted.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/invidia/overpipe.jpg"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Exhaust/invidia/tip.jpg"></div>',
     
]);
});

 //Brakes

  $('.brakes-logos').on('click', '#brembo', function (){
        $("#part-series").load("components_series/Brakes/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Brakes/brembo/drilled.png"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Brakes/brembo/slotted.png"></div>',

     
]);
});

  $('.brakes-logos').on('click', '#stoptech', function (){
        $("#part-series").load("components_series/Brakes/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Brakes/stoptech/drilled.png"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Brakes/stoptech/slotted.png"></div>',

     
]);
});

  $('.brakes-logos').on('click', '#wilwood', function (){
        $("#part-series").load("components_series/Brakes/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Brakes/wilwood/drilled.png"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Brakes/wilwood/slotted.png"></div>',

     
]);
});


//Lighting

$('.lighting-logos').on('click', '#specd', function (){
        $("#part-series").load("components_series/Lighting/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
    '<div class="swiper-slide auto-height"><img src="img/Lighting/specd/chrome.png"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Lighting/specd/headlightblack.png"></div>',

     
]);
});

$('.lighting-logos').on('click', '#spyder', function (){
        $("#part-series").load("components_series/Lighting/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
       '<div class="swiper-slide auto-height"><img src="img/Lighting/spyder/afl.png"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Lighting/spyder/chrome.png"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Lighting/spyder/taillights.png"></div>'


]);
});


$('.lighting-logos').on('click', '#winjet', function (){
        $("#part-series").load("components_series/Lighting/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
       '<div class="swiper-slide auto-height"><img src="img/Lighting/winjet/clear.png"></div>',
    '<div class="swiper-slide auto-height"><img src="img/Lighting/winjet/fogclear.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Lighting/winjet/glossyblack.png"></div>',
  

]);
});



// //Exterior



$('.exterior-logos').on('click', '#apr', function (){
        $("#part-series").load("components_series/Exterior/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
        '<div class="swiper-slide auto-height"><img src="img/Exterior/apr/cf.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/apr/ducts.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/apr/gtb.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/apr/gtc.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/apr/gtc250.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/apr/splitter.png"></div>',
  
]);
});


$('.exterior-logos').on('click', '#jdm', function (){
        $("#part-series").load("components_series/Exterior/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
        '<div class="swiper-slide auto-height"><img src="img/Exterior/jdm/frontsplitter.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/jdm/typea.png"></div>',
]);
});


$('.exterior-logos').on('click', '#seibon', function (){
        $("#part-series").load("components_series/Exterior/series.html");
          swiper2.removeAllSlides();
        swiper2.appendSlide([
        '<div class="swiper-slide auto-height"><img src="img/Exterior/seibon/ag.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/seibon/br.png"></div>',
        '<div class="swiper-slide auto-height"><img src="img/Exterior/seibon/cstyle.png"></div>'
]);
});

});




