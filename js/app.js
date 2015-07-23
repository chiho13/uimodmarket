// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {

//     if(xhr.readyState ===4) {

//             var enkei = JSON.parse(xhr.responseText);

//             var swiper2 = '<div class="slider">';

//             for (var i=0; i<enkei.length; i += 1) {

//                 if (enkei[i].inoffice === true) {

//                     swiper2 += '<li class="in">';

//                 } else {

//                     swiper2 += '<li class="out">';

//                 }

//                 swiper2 += enkei[i].name;

//                 swiper2 += '</li>';              

//             }

//         swiper2 += '</div>';

//         document.getElementById('employeeList').innerHTML = swiper2;

//     }

// };

// xhr.open('GET', 'data/enkei.json');

// xhr.send();

$("#vossenseries").click(function(){

   // $('table').on('click', '#vossenparts', function (){


    var jsonURL = "vossenvf.json";
  $.getJSON(jsonURL, function (json) {

  var imgList= "";


  $.each(json.products, function () {

    imgList += '<div class="swiper-slide"><img src= "' + this.imgPath + '"></div>';

  });


 $('#carpartz').append(imgList);

         });
    });

// });








