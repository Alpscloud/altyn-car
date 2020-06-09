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


	var stocksSlider = new Swiper('.js-stocks-slider', {
		slidesPerView: 3,
		spaceBetween: 0,
		navigation: {
			prevEl: '.js-stocks-slider-btn-prev',
			nextEl: '.js-stocks-slider-btn-next',
		}
	});

	var aboutUsSlider = new Swiper('.js-about-us-slider', {
		loop: true,
		spaceBetween: 0,
		pagination: {
			el: '.js-about-us-slider-pagination',
			clickable: true
		},
		navigation: {
			prevEl: '.js-about-us-slider-btn-prev',
			nextEl: '.js-about-us-slider-btn-next',
		},
		autoplay: {
			delay: 8000,
		},
	});

	// Fancybox
	$('[data-fancybox]').fancybox({
		loop: true,
		buttons: ['close']
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


	// Custom inputs
	var nonLinearSlider = $('price');

	if (nonLinearSlider) {

		noUiSlider.create(nonLinearSlider, {
			connect: true,
			behaviour: 'tap',
			start: [0, 1000000],
			range: {
				'min': [0],
				'max': [1000000]
			}
		});

		var nodes = [
			document.getElementById('priceLow'), // 0
			document.getElementById('priceHigh')  // 1
		];

		var priceInput = $('.js-price-input');

		nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
			nodes[handle].innerHTML = values[handle];
			priceInput.val(values[handle]);
		});
	}


	$('input[type=tel]').mask('+7 (999) 999-99-99');


});
