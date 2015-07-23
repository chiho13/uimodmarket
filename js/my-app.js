// Initialize your app
$(document).ready(function () {


    var myApp = new Framework7(); 

    var swiper1 = new Swiper('.swiper-1', {
        pagination: '.swiper-1 .swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
    
    })
//     $(".panel-body").resize(function(){
//     var height = $(".panel-body").height();
//     var width  = $().width();
//     $('.swiper-container, .swiper-slide').height(height);
//     $('.swiper-container, .swiper-slide').width(width);

// })
// $(".panel-body").resize(); 



    var mySwiper2 =  myApp.swiper('.swiper-2',{
        pagination: '.swiper-2 .swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    })

//      $(".carparts-card").resize(function(){
//     var height = $(".carparts-card").height();
//     var width  = $().width();
//     $('.carparts-slide').height(height);
//     $('.carparts-slide').width(width);
// })

//      $(".carparts-card").resize(); 






// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

});



