$(function () {
	"use strict";

	$(document).ready(function () {

		var $_html = $("html");
		var $_body = $("body");
		var $_flexslider = $(".flexslider");
		var $_header_menu = $('#header');

		// 1. Bootstrap tooltip
		$('[data-toggle="tooltip"]').tooltip();

		// 2. Bootstrap Select First Tab
		$('#widget-tab a.first').tab('show');
		$('.tab-hover .nav-tabs > li > a.first').tab('show');

		// 3. Tabs hover effect
		$('.tab-hover .nav-tabs > li > a').on("mouseover", function () {
			$(this).tab('show');
		});

		// 4. Menu hover effect
		$('.dropdown-toggle').dropdownHover();

		// 5. Fade effect on Menu and Tab
		$('.nav .dropdown-menu').addClass('animated fadeIn');
		$('.tab-pane').addClass('animated fadeIn');

		if ($_html.hasClass("no-touch")) {
			$('.navbar .dropdown > a').on("click", function () {
				location.href = this.href;
			});
		}

		// 6. FLexslider
		if ($_flexslider.length) {
			$_flexslider.flexslider({
				selector: ".featured-slider > .slider-item",
				maxItems: 1,
				minItems: 1,
				startAt: 0,
				animation: "slide",
				slideshow: true,
				controlNav: false,
				nextText: '<i class="fa fa-angle-right"></i>',
				prevText: '<i class="fa fa-angle-left"></i>'
			});
		}

		// 7. Image popup
		$('.post-content a.popup-image').magnificPopup({
			type: 'image',
			mainClass: 'mfp-with-zoom', // this class is for CSS animation below

			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 200, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function 

				opener: function (openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		// 8. Parallax Effect
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 60
		});

		// 9. Full width background image
		var $_parallax = $("#parallax-image");

		if ($_parallax.length) {
			$_parallax.backstretch($_parallax.data('image'));
		}

		// 10. Sticky Sidebar

		var $_datacolumn = $("[data-stickycolumn]");

		if ($("[data-stickyparent]").length) {
			// Sticky Sidebar start when images loaded
			// imagesLoaded($_body).on('always', function (instance) {
			// 	$_datacolumn.stick_in_parent({
			// 			parent: "[data-stickyparent]"
			// 		}).on('sticky_kit:bottom', function (e) {
			// 			$(this).parent().css('position', 'static');
			// 		})
			// 		.on('sticky_kit:unbottom', function (e) {
			// 			$(this).parent().css('position', 'relative');
			// 		});

			// 	// destroy it if mobile or tablet 
			// 	destroy_sticky();
			// });
			imagesLoaded($_body).on('always', function (instance) {				
				$_datacolumn.each(function(){		
					var $this = $(this);
					var $parent = $this.parents("[data-stickyparent]").eq(0);
					console.log($parent);	
					$this.stick_in_parent({
							parent: $this.parents("[data-stickyparent]").eq(0),
							recalc_every: 1
						}).on('sticky_kit:bottom', function (e) {
							$this.parent().css('position', 'static');
						})
						.on('sticky_kit:unbottom', function (e) {
							$this.parent().css('position', 'relative');
							
						})
						.on("sticky_kit:unstick", function(e) {
							console.log("has unstuck!", e.target);
							// $this.trigger("sticky_kit:detach")
							// $('body').trigger("sticky_kit:recalc");
						});
						;


				})

				// destroy it if mobile or tablet 
				destroy_sticky();
			});
		}

		var $_windowwidth = $(window).width();

		// Destroy sticky Sidebar on Mobile and Tablet
		function destroy_sticky() {
			var $_windowwidth = $(window).width();
			if ($_windowwidth < 992) {
				$_datacolumn.trigger("sticky_kit:detach");
			}
		}

		if ($_windowwidth < 992) {
			FastClick.attach(document.body);
		}



		// Sidebar FIX



		function sticky_relocate() {
			// var window_top = $(window).scrollTop();

			// if ($('.sidebar-stop').length) {

			// 	var footer_top = $(".sidebar-stop").offset().top;

			// }
			// if ($('.sidebar-fixed').length) {

			// 	var div_top = $('.sidebar-fixed').offset().top;
			// }
			// var div_height = $("#sidebar").height();

			// var padding = 20; // tweak here or get from margins etc

			// if (window_top + div_height > footer_top - padding)
			// 	$('#sidebar').css({
			// 		top: (window_top + div_height - footer_top + padding) * -1
			// 	})
			// else if (window_top > div_top) {
			// 	$('#sidebar').addClass('sidebar-sticky');
			// 	$('#sidebar').css({
			// 		top: 20
			// 	})
			// } else {
			// 	$('#sidebar').removeClass('sidebar-sticky');
			// }
		}

		$(function () {

			// $(window).on("scroll",function() {				
			// 	if ($(window).width() > 992) {
			// 		// $('body').trigger("sticky_kit:recalc");
			// 		//sticky_relocate();
			// 	}

			// });

			// if ($(window).width() > 992) {

			// 	//sticky_relocate();
			// }
		});




		// 11. Mobile Menu
		$("#mobile-nav").mmenu({
			// options
			searchfield: true,
			slidingSubmenus: false,
			extensions: ["theme-dark", "effect-slide", "border-full"]
		}, {
			// configuration
		});

		// 12. Mobile Menu Scrollbar
		$('.mobile-wrapper').perfectScrollbar({
			wheelSpeed: 1,
			suppressScrollX: true
		});

		$('#fixed-button').on("click", function (event) {
			event.preventDefault();
			$_html.toggleClass("ad-opened");
		});

		$('#mobile-overlay').on("click", function (event) {
			event.preventDefault();
			$_html.toggleClass("ad-opened");
		});

		// 13. Responsive video
		$(".image-overlay").fitVids();

		// 14. Sticky Header
		if (!$("#main").hasClass('fixed-sidebar')) {


			//  var header = new Headroom(document.querySelector("#header"), {
			// 	tolerance: 5,
			// 	offset : 205,
			// 	classes: {
			// 	  initial: "animated",
			// 	  pinned: "slideDown",
			// 	  unpinned: "slideUp"
			// 	}
			// });
			// header.init(); 
			
			// Sticky menu hide
			// $_header_menu.headroom({
			// 	"offset": 0,
			// 	"tolerance": {
			// 		up: 0,
			// 		down: 0
			// 	},
			// 	"classes": {
			// 		"frozen": "headroom--frozen",
			// 		"pinned": "headroom--pinned",
			// 		"unpinned": "headroom--unpinned",
			// 		"top": "headroom--top",
			// 		"notTop": "headroom--not-top",
			// 		"bottom": "headroom--bottom",
			// 		"notBottom": "headroom--not-bottom",
			// 		"initial": "headroom"
			// 	}
			// });  
		}

		var $_stickyScrollbar = $('.sticky-scroll');
		var $_sidebar = $("#sticky-sidebar");
		var $_goTop = $('#go-top-button');
		var $_header_topoffset = 0;
		var $_offset = 133;
		$_header_topoffset = $_header_menu.offset().top;


		// 15. Fixed Sidebar Scrollbar

		$_stickyScrollbar.perfectScrollbar({
			wheelSpeed: 1,
			suppressScrollX: true
		});

		// Change scrollbar height when load
		change_height();

		// Change scrollbar height when resize
		$(window).on("resize", function () {
			if ($_datacolumn.length) {
				$(document.body).trigger("sticky_kit:recalc");
				destroy_sticky();
			}

			change_height();
		});

		//BEGIN MOVE TO LIVE 
		//position header is cookies modal is open
		if($('#cookieWarningDiv').length) {
			$('#header').addClass('cookies-top');
			$('.sticky.default').addClass('cookies-top');
		}
		$('.cookie-btn').on('click', function() {
			$('#header').removeClass('cookies-top');
			$('.sticky.default').removeClass('cookies-top');
		})
		//On scroll events
		var lastScroll = 0;

		$(window).on("scroll", function (e) {
			var scroll = $(this).scrollTop();

			// Go to top button
			if ($(this).scrollTop() > 100) {
				$_goTop.css({
					bottom: '20px'
				});
			} else {
				$_goTop.css({
					bottom: '-100px'
				});
				$(".skyscraper--left .sticky, .skyscraper--right .sticky").removeClass("top");
			}

			if(lastScroll < scroll) {
				//SCROLLING DOWN
				//console.log('down')
				$(".skyscraper--left .sticky, .skyscraper--right .sticky").addClass("top");
				$('#header').addClass('unpinned');
			} else {
				//"SCROLL UP
			//	console.log('up')
				$('#header').removeClass('unpinned');
				
			}
			

			lastScroll = $(this).scrollTop();

		});

		//END  MOVE TO LIVE 
		// Change scrollbar height
		function change_height() {
			var windowHeight = $(window).height();

			if ($_sidebar.length) {
				$_offset = $_sidebar.position().top + 80;

				var setHeight = windowHeight - $_offset;
				$_stickyScrollbar.height(setHeight);
				$_stickyScrollbar.perfectScrollbar('update'); // Update
			}

			$('.mobile-wrapper').height(windowHeight);
			$('.mobile-wrapper').perfectScrollbar('update'); // Update
		}

		// 16. Go to Top Button
		$_goTop.on("click", function () {
			$('html, body').animate({
				scrollTop: 0
			}, 700);
			return false;
		});

	});

});
/*
 * End Jquery
 */

// 17. Count up share counter
if (document.getElementById("countUp")) {
	var count = document.getElementById("countUp");

	var number = 0;

	if (count.hasAttribute("data-count")) {
		var number = count.getAttribute("data-count");
	}

	var options = {
		useEasing: true,
		useGrouping: true,
		 separator: '',
		decimal: '.',
		prefix: '',
		suffix: ''
	};

	var countUp = new countUp("countUp", 0, number, 0, 2.5, options);

	var waypoint = new Waypoint({
		element: document.getElementById('countUp'),
		handler: function (direction) {
			countUp.start();
		},
		offset: window.innerHeight - 70
	});
}

// 18. Header Search Button
new UISearch(document.getElementById('sb-search'));

// 19. Google Map
var map_canvas = document.getElementById('map-canvas');
if (typeof (map_canvas) != 'undefined' && map_canvas != null) {
	// Contact page Google map
	function initialize() {
		var myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
		var mapOptions = {
			zoom: 4,
			center: myLatlng
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Hello World!'
		});
	}
	if(document.getElementById('map-canvas') !== null) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}
}

$(function () {
	//console.log("intra");

	$('#modalformularoferta').on('shown.bs.modal', function (e) {
		var title = $('.post-title').html();
		$("#Articol").val(title);
	})

	$('#modalformularoferta1').on('shown.bs.modal', function (e) {
		var title2 = $('.product-name-js').html();
		$("#Articol").val(title2);
	});


	/*
	$('#modalformularoferta3').on('shown.bs.modal', function (e) {
	  var parent = $(this).parents(".produs-col-background");
	  console.log($(this));
	  var title3 = $('.list-product-name-js').html();
	  $("#Articol").val(title3);
	 
	})	
	*/

	$(".buton-oferta-lista").click(function () {

		var parent = $(this).parents(".produs-col-background");

		var child = parent.find(".list-product-name-js");
		var titlu = child.html();
		var link = child.attr('href');

		console.log(titlu);
		console.log(link);

		$('#modalformularoferta3 #Link').val(link);
		$('#modalformularoferta3 #Articol').val(titlu);



	});



	$("#modal-button-trigger").on("click", function (e) {
		e.preventDefault();
		// $('#modalformularoferta').modal();
		$('#modalformularoferta').modal("show");
		$('#modalformularoferta1').modal("show");
		$('#modalformularoferta3').modal("show");
	});

});

$(document).ready(function () {
	if ($('.nume-companie-js').length) {
		console.log('test');
		var title4 = $('.nume-companie-js').html();
		$("#Articol").val(title4);

	}
});

$(document).ready(function () {
	$("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
		var id = $(this).attr("id");
		if (id != "eng") {
			e.preventDefault();
			$(this).siblings('a.active').removeClass("active");
			$(this).addClass("active");
			var index = $(this).index();
			$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
			$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
		}


	});
});

$(document).ready(function () {
	$('.select-test').select2();
});



$(document).ready(function () {

	$('[name="Companie"]').on("change", function () {
		var pageID = $('#filtersForm').attr('data-page-id');
		var url = "/Default.aspx?ID=" + pageID;
		var pageLink = $('.row-filtre-sectiune').attr('data-page-link');
		var value = $(this).val();
		var newUrl = replaceUrlParam(pageLink, "PageNum", 1);
		var newUrl = replaceUrlParam(pageLink, "Companie", value);

		window.location.href = newUrl;

	});


});



$(document).ready(function () {

	$('[name="AutoriSectiune"]').on("change", function () {
		var pageID = $('#filtersForm').attr('data-page-id');
		var url = "/Default.aspx?ID=" + pageID;
		var pageLink = $('.row-filtre-sectiune').attr('data-page-link');
		var value = $(this).val();
		var newUrl = replaceUrlParam(pageLink, "PageNum", 1);
		var newUrl = replaceUrlParam(pageLink, "Autor", value);

		window.location.href = newUrl;

	});


	if ($(".activate-tooltip-for-global-brands").length > 0) {
		$(".show-tip").tipTip();
	}



});