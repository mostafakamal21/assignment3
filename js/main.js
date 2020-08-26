/**
* Template Name: iPortfolio - v1.3.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";


// nvabar sckity
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 30) {
    $(".main-menu").removeClass("sticky");
   }else{
    $(".main-menu").addClass("sticky"); 
   } 
  })

  // $(window).scroll(function(){
  //   if($(this).scrollTop()<100){
  //     $('.main-menu').addClass("sticky");
  //   }
  //   else{
  //     $('.main-menu').removeClass("sticky")
  //   }
  // })


  // menu active
$(document).on('click', 'ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})
 










})(jQuery);