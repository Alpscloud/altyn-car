document.addEventListener('DOMContentLoaded', function() {

	var fileInputs = document.querySelectorAll( '.form-group__input-file' );


	Array.prototype.forEach.call( fileInputs, function( input ) {
		var label    = input.parentElement,
		labelVal = label.innerHTML;

		input.addEventListener('change', function(e) {
			var fileName = '',
			nextElem = label.querySelector('.form-group__input--label_text');

			if(nextElem.classList.contains('is-active')) {
				nextElem.classList.remove('is-active');
			}

			if( this.files && this.files.length > 1 ) {
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			}
			else {
				fileName = e.target.value.split( '\\' ).pop();
			}

			if( fileName ) {	
				nextElem.innerHTML = fileName;
				nextElem.classList.add('is-active');
			} else {

				label.innerHTML = labelVal;
			}
		});
	});

});


$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
	html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;

		$('html, body').animate({scrollTop: top}, 'slow');
	});	
	// ========= =========== =========== ===========

	// Popups
	
	$('.js-open-advanced-filter-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-advanced-filter-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-callback-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-callback-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-trade-in-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-trade-in-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-crediting-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-crediting-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-buy-car-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-buy-car-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-vacancy-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-vacancy-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-vacancy-form-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-vacancy-popup').fadeOut(300);
		$('.js-vacancy-form-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.form-group__input').on('blur', function(e) {
		var value = $(this).val();
		var wrapper = $(this).parents('.form-group__input--wrapper');

		if(wrapper.hasClass('is-opened')) {
			wrapper.removeClass('is-opened');
		}

		if(value !== '' || value) {
			$(this).parents('label').addClass('is-active');

		} else {
			$(this).parents('label').removeClass('is-active');
		}
	});

	$('.form-group__input').on('focus', function(e) {
		var wrapper = $(this).parents('.form-group__input--wrapper');
		var label = $(this).parents('label');

		wrapper.addClass('is-opened');
		label.addClass('is-active');
	});




	// User city
	$('.js-close-user-city-popup-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-user-city-popup').fadeOut(150);
	});


	$('.js-close-user-city-dropdown-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-user-city-dropdown').fadeOut(300);
		$('html').removeClass('is-fixed');
	});



	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');
		var dropdownContent = $(this).find('.user-city__dropdown');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

		// if(!dropdownContent.is(e.target) && dropdownContent.has(e.target).length === 0) {
		// 	$('html').removeClass('is-fixed');
		// 	$('.js-user-city-dropdown').fadeOut(300);
		// }



	});

	if(html < 1312) {
		$('.user-city__block').on('click', function(e) {
			e.preventDefault();



			$('.footer').find('.user-city__dropdown--wrapper').fadeIn(300);
			$('html').addClass('is-fixed');
		});
	}

	$('.nav__item .arrow').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');

		$(this).parents('.nav__item').find('.nav-sublist').stop().slideToggle(150);
	});


	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();

		$(this).addClass('is-active');
		$('html').addClass('is-fixed');
		$('.js-mobile-menu').addClass('is-opened');
	});

	$('.js-close-mobile-menu-btn, .header-actions__overflow').on('click', function(e) {
		e.preventDefault();

		$('.js-open-mobile-menu-btn').removeClass('is-active');
		$('html').removeClass('is-fixed');
		$('.js-mobile-menu').removeClass('is-opened');
	});
	// ========= =========== =========== ===========


	var headerCarHeight = $('.car-header').outerHeight();


	$(window).on('scroll', function(e) {
		var scroll = $(this).scrollTop();

		if(scroll > headerCarHeight) {
			$('.js-car-header-fixed').addClass('is-fixed');
		} else {
			$('.js-car-header-fixed').removeClass('is-fixed');
		}

	});

	// Parallax

	function parallax(item){
		var scrolled = $(window).scrollTop();
		var speed = $(item).attr('data-parallax-speed');
		var direction = $(item).attr('data-parallax-direction');



		if(direction === 'horisontal-right') {
			$(item).css({
				'transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'horisontal-left') {
			$(item).css({
				'transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'vertical-top') {
			$(item).css({
				'transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)'
			});
		} else if(direction === 'vertical-bottom') {
			$(item).css({
				'transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)'
			});
		}
		

	}


	$(window).on('scroll', function(e) {
		var scroll = $(this).scrollTop();

		$('.js-item-parallax').each(function() {
			
			parallax($(this));
			
		});

		
	});

	var show = true;
		$(window).on('scroll load resize', function () {
			if($('.our-params').length > 0) {
				if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
				var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
				var e_top = $('.our-params').offset().top; // Расстояние от блока со счетчиками до верха всего документа
				var w_height = $(window).height(); // Высота окна браузера
				var d_height = $(document).height(); // Высота всего документа
				var e_height = $('.our-params').outerHeight(); // Полная высота блока со счетчиками
				if (w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
						$('.our-param__value').css('opacity', '1');
						$('.our-param__value span').spincrement({
								thousandSeparator: "",
								from: 0,
								duration: 3000
						});

						show = false;
				}
			}
		});




	// Guarantee
	$('.js-show-hidden-result-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-visible-block').hide(200);
		$('.js-hidden-results-block').show(200);
	});

	// Sliders
	var promoSlider = new Swiper('.js-promo-slider', {
		loop: true,
		spaceBetween: 0,
		pagination: {
			el: '.js-promo-slider-pagination',
			clickable: true
		},
		autoplay: {
			delay: 8000,
		},
	});

	$('.js-car-card-slider').each(function() {
		var self = $(this);
		var wrapper = self.parents('.car-card__slider');

		var carCardSlider = new Swiper(self, {
			loop: true,
			spaceBetween: 0,
			pagination: {
				el: wrapper.find('.js-car-card-slider-pagination'),
				clickable: true
			},
			navigation: {
				prevEl: wrapper.find('.js-car-card-slider-btn-prev'),
				nextEl: wrapper.find('.js-car-card-slider-btn-next'),
			},
			touchRatio: 0
			// autoplay: {
			// 	delay: 8000,
			// },
		});
	});

	$('.js-cars-slider').each(function() {
		var self = $(this);
		var wrapper = self.parents('section');

		var carsSlider = new Swiper(self, {
			slidesPerView: 1,
			spaceBetween: 0,
			navigation: {
				prevEl: wrapper.find('.js-cars-slider-btn-prev'),
				nextEl: wrapper.find('.js-cars-slider-btn-next'),
			},
			breakpoints: {
				1100: {
					slidesPerView: 3
				},
				700: {
					slidesPerView: 2
				}
			}
		});
	});




	var recommendedSlider = new Swiper('.js-recommended-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			prevEl: '.js-recommended-slider-btn-prev',
			nextEl: '.js-recommended-slider-btn-next',
		},
		breakpoints: {
			1100: {
				slidesPerView: 3
			},
			1500: {
				slidesPerView: 4
			},
			700: {
				slidesPerView: 2
			}
		}
	});

	var descriptionBlockSlider = new Swiper('.js-description-block-slider', {
		loop: true,
		spaceBetween: 0,
		pagination: {
			el: '.js-description-block-slider-pagination',
			clickable: true
		},
		navigation: {
			prevEl: '.js-description-block-slider-btn-prev',
			nextEl: '.js-description-block-slider-btn-next',
		},
		autoplay: {
			delay: 8000,
		},
	});

	var carMainlider = new Swiper('.js-car-main-slider', {
		loop: true,
		slidesPerView: 1,
		centeredSlides: false,
		spaceBetween: 0,
		navigation: {
			prevEl: '.js-car-main-slider-btn-prev',
			nextEl: '.js-car-main-slider-btn-next',
		},
		breakpoints: {
			700: {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 0,
			}
		}

	});

	var partnersSlider = new Swiper('.js-partners-slider', {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 25,
		autoplay: {
			delay: 8000,
		},
		navigation: {
			prevEl: '.js-partners-slider-btn-prev',
			nextEl: '.js-partners-slider-btn-next',
		},
		breakpoints: {
			1500: {
				slidesPerView: 6
			},
			1200: {
				slidesPerView: 5
			},
			900: {
				slidesPerView: 4
			},
			620: {
				slidesPerView: 3
			}
		}
	});

	// Faqs
	$('.faq__question').on('click', function(e) {
		e.preventDefault();

		var faq = $(this).parents('.faq');
		var faqAnswer = $(this).next('.faq__answer');

		if(faq.hasClass('is-toggled')) {
			faq.removeClass('is-toggled');
			$('.faq').removeClass('is-toggled');
			$('.faq__answer').stop().slideUp(150);
			faqAnswer.stop().slideUp(150);
		} else {
			$('.faq').removeClass('is-toggled');
			$('.faq__answer').stop().slideUp(150);
			faq.addClass('is-toggled');

			faqAnswer.stop().slideDown(150);
			
		}
	});



	// Map markers
	$('.js-salon-address').on('click', '.salon-address__marker', function(e) {
		e.preventDefault();

		var self = $(this);

		var salonAddress = self.parents('.js-salon-address');

		if(salonAddress.hasClass('is-active')) {
			salonAddress.removeClass('is-active');
			$('.js-salon-address').removeClass('is-active');
		} else {
			$('.js-salon-address').removeClass('is-active');
			salonAddress.addClass('is-active');
		}


	});

	$(document.body).on('click', function(e){
		if(!$(e.target).closest('.js-salon-address').length){
			$('.js-salon-address').removeClass('is-active');
		}
	});




	// Catalog filters


	$('.js-hide-aside-filters-btn').on('click', function(e) {
		e.preventDefault();
		$('.catalog').addClass('is-toggled');

		$('.js-open-aside-filters-btn').addClass('is-active');
	});

	

	if(html > 1200) {

		$('.js-open-aside-filters-btn').on('click', function(e) {
			e.preventDefault();

			var id = $(this).attr('href'),
			top = $(id).offset().top;

			$('html, body').animate({scrollTop: top}, 'slow');

			openDesktopAsideFilters($(this));
		});

	} else {

		$('.js-open-aside-filters-btn').on('click', function(e) {
			e.preventDefault();
			openMobileFilters();
		});

	}


	function openDesktopAsideFilters(self) {
	
		$('.catalog').removeClass('is-toggled');

		self.removeClass('is-active');
	}

	function openMobileFilters() {
	
		$('.js-advanced-filter-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	}


	// Fancybox
	$('[data-fancybox]').fancybox({
		loop: true,
		buttons: ['close'],
		btnTpl: {
			arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{Назад}}">' +
			'<div>	<svg  viewBox="0 0 17 37" xmlns="http://www.w3.org/2000/svg"><path d="M3.12865 18.0032L16.0355 33.372C16.5416 33.9747 16.5416 34.9517 16.0355 35.5543C15.5294 36.157 14.7089 36.157 14.2028 35.5543L0.379569 19.0943C-0.126523 18.4917 -0.126523 17.5146 0.379569 16.912L14.2028 0.451972C14.7089 -0.150657 15.5294 -0.150657 16.0355 0.451972C16.5416 1.0546 16.5416 2.03166 16.0355 2.63428L3.12865 18.0032Z"/></svg></div>' +
			"</button>",
			arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{Вперед}}">' +
			'<div><svg viewBox="0 0 17 37"  xmlns="http://www.w3.org/2000/svg"><path d="M13.8714 18.0036L0.964474 2.63468C0.458382 2.03205 0.458382 1.05499 0.964474 0.452364C1.47057 -0.150267 2.2911 -0.150267 2.79719 0.452364L16.6204 16.9124C17.1265 17.515 17.1265 18.4921 16.6204 19.0947L2.79719 35.5547C2.2911 36.1574 1.47056 36.1574 0.964472 35.5547C0.45838 34.9521 0.45838 33.9751 0.964472 33.3724L13.8714 18.0036Z" /></svg></div>' +
			"</button>",
		}
	});

	// Tabs
	$('.js-tab-content').not(":first").hide();
	$('.js-tab-btn:first').addClass('is-active');

	$('.js-tab-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-tab-content').removeClass('is-active');
		$('.js-tab-btn').removeClass('is-active').eq($(this).index()).addClass('is-active');
		$('.js-tab-content').hide().eq($(this).index()).fadeIn().addClass('is-active');
	}).eq(0).addClass('is-active');

	$(document).ready(function() {
	// ========= D i s a b l e   m a p    s c r o l l i n g ===========
	var onMapMouseleaveHandler = function (event) {
		var that = $(this);

		that.on('click', onMapClickHandler);
		that.off('mouseleave', onMapMouseleaveHandler);
		that.find('iframe').css("pointer-events", "none");
	}

	var onMapClickHandler = function (event) {
		var that = $(this);

		that.off('click', onMapClickHandler);
		that.find('iframe').css("pointer-events", "auto");
		that.on('mouseleave', onMapMouseleaveHandler);
	}
	// Enable map zooming with mouse scroll when the user clicks the map
	$('.js-google-map').on('click', onMapClickHandler);
	// ========= =========== =========== ===========

	// ========= G o o g l e   m a p   s t y l e s ===========
	var latitude = $('.js-coords').attr('data-latitude'), // coordinates 
		longitude = $('.js-coords').attr('data-longitude'), // coordinates 
		map_zoom = 16, 
		marker_url = 'img/icons/svg/map-pin-ic.svg'; // map marker 
	// Styles
	var style =  [
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#e9e9e9"
		},
		{
			"lightness": 17
		}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#f5f5f5"
		},
		{
			"lightness": 20
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#ffffff"
		},
		{
			"lightness": 17
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#ffffff"
		},
		{
			"lightness": 29
		},
		{
			"weight": 0.2
		}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#ffffff"
		},
		{
			"lightness": 18
		}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#ffffff"
		},
		{
			"lightness": 16
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#f5f5f5"
		},
		{
			"lightness": 21
		}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#dedede"
		},
		{
			"lightness": 21
		}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"visibility": "on"
		},
		{
			"color": "#ffffff"
		},
		{
			"lightness": 16
		}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"saturation": 36
		},
		{
			"color": "#333333"
		},
		{
			"lightness": 40
		}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
		{
			"visibility": "off"
		}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#f2f2f2"
		},
		{
			"lightness": 19
		}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
		{
			"color": "#fefefe"
		},
		{
			"lightness": 20
		}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
		{
			"color": "#fefefe"
		},
		{
			"lightness": 17
		},
		{
			"weight": 1.2
		}
		]
	}
	];
		// Create the point
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		};
		
		if($('#map').length > 0) {
			var map = new google.maps.Map(document.getElementById('map'), map_options),
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				visible: true,
				icon: marker_url
			});
		}
	// ========= =========== =========== ===========


	
});


	$('input[type=tel]').mask('+7 (999) 999-99-99');


});
