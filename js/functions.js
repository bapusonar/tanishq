jQuery(function ($) {
  "use strict";
  var $window = $(window);
  var $root = $("html, body");

  /* ----- Back to Top ----- */
  $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
  var amountScrolled = 700;
  var backBtn = $("a.back-top");
  $window.on("scroll", function () {
    if ($window.scrollTop() > amountScrolled) {
      backBtn.addClass("back-top-visible");
    } else {
      backBtn.removeClass("back-top-visible");
    }
  });
  backBtn.on("click", function () {
    $root.animate({
      scrollTop: 0
    }, 700);
    return false;
  });


	$(".test-slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
					arrows:false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
					centerMode: false,
                    centerPadding: '0px',
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                    dots: true,
                    arrows: false,
                }
            },

        ]
    });

	
	$(".placement-slider").slick({
    infinite: false,
    autoplay: false,
    autoplaySpeed: 4500,
    slidesToShow: 3,
    slidesToScroll: 1,
		dots: true,
    speed: 800,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           dots:true,
			arrows:false,
			
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

    ]
  });	
	
	$(".occassion-slider").slick({
    infinite: true,
    autoplay: false,
//    rows: 1,
    autoplaySpeed: 1000,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    pauseOnHover: false,
    arrows: true,
    cssEase: 'linear',
    swipeToSlide: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
		dots: false,
         arrows: true,
        }
      },
		
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
			dots:true,
        }
      },				 
		{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,		 
          dots: true,
			arrows: false,
      }
      },	 
    ]
  });
	
	
	
 $('.cover').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 4,
  slideToScroll: 1,
  infinite: true,
  variableWidth: true,
autoplaySpeed: 4000,
    speed: 500,
	adaptiveHeight: true,
    cssEase: 'linear',
    swipeToSlide: true,
	responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
		dots: true,
         arrows: false,
        }
      },
		
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
			dots:true,
        }
      },				 
		{
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
			arrows: false,
        }
      },		 				 
    ]
});
	
	
	$(".ticker-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
		dots: false,
    speed: 2000,
    pauseOnHover: true,
    arrows: false,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           dots:true,
			arrows:false,
			adaptiveHeight: true,
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			 dots:true,
         
        }
      },

    ]
  });	
	
	 
	
	
	
	 

  $(".student-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 2,
    dots: false,
    speed: 500,
    pauseOnHover: false,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },

    ]
  });

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });

  $("#showbtech").click(function () {
    $(".btechbox").show();
  });
  $(".close-container").click(function () {
    $(".btechbox").hide();
  });


  $("#showscience").click(function () {
    $(".sciencebox").show();
  });
  $(".close-container").click(function () {
    $(".sciencebox").hide();
  });

  $("#showlaw").click(function () {
    $(".lawbox").show();
  });
  $(".close-container").click(function () {
    $(".lawbox").hide();
  });

  $("#showmgmt").click(function () {
    $(".mgmtbox").show();
  });
  $(".close-container").click(function () {
    $(".mgmtbox").hide();
  });

});
