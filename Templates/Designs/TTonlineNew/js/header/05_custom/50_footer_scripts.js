$(document).ready(function() {

    $('.owl-carousel').not('.owl-parteneri, .owl-parteneri-1, .owl-companii-1, .owl-companii-2, .owl-redactori, .owl-testimonial').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,      
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 3,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
    })
 
  
  $('.owl-companii-1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,      
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
    })
  
  $('.owl-companii-2').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,      
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 6
          }
        }
    })
  
  
  
  
  $('.owl-parteneri').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,      
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
    })
  
  
   $('.owl-parteneri-1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
  		center:true,
        nav: true,      
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
    })
  
  $('.owl-redactori').owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,      
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 3,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    })
      
  	$('.owl-testimonial').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
  		center:true,
        nav: true,      
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
    })
  
   

    /* Apply fancybox to multiple items */
    
    $("a.single_image").fancybox({
      'transitionIn'  : 'elastic',
      'transitionOut' : 'elastic',
      'speedIn'   : 600, 
      'speedOut'    : 200, 
      'overlayShow' : false
    });
    


    

});
