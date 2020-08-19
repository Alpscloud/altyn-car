document.addEventListener('DOMContentLoaded', function() {
	// Price


	var priceRangeInputs = document.querySelectorAll('.js-range-input');
	

	if(priceRangeInputs) {

		priceRangeInputs.forEach(function(input) {
			var priceRangeInputsParent = input.closest('.js-range-inputs-parent');



			var priceInputs = [
				priceRangeInputsParent.querySelector('.js-range-input-val-min'), // 0
				priceRangeInputsParent.querySelector('.js-range-input-val-max')  // 1
			];



			noUiSlider.create(input, {
				connect: true,
				behaviour: 'tap',
				start: [0, 1000000],
				range: {
					'min': [0],
					'max': [1000000]
				}
			});

			input.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
				priceInputs[handle].value = values[handle];
			});

			priceInputs.forEach(function(input, handle) {

				input.addEventListener('change', function() {
					input.noUiSlider.setHandle(handle, this.value);
				});

			});
		});
	};


	

	// Crediting
	var creditTermRange = document.querySelector('.js-credit-term-range');

	if(creditTermRange) {


		var creditTermInput = document.querySelector('.js-credit-term-input');


		noUiSlider.create(creditTermRange, {
			start: [6],
			step: 1,
			connect: 'lower',
			range: {
				'min': [1],
				'max': [36]
			},
			tooltips: [true],
			format: wNumb({
				decimals: 0,
				thousand: '',
				suffix: ' Месяца(ев)'
			})
		});

		creditTermRange.noUiSlider.on('update', function (values, handle) {
			creditTermInput.value = values[handle];
		});

		creditTermInput.addEventListener('change', function () {
			creditTermRange.noUiSlider.set(this.value);
		});

	}

	var creditPayRange = document.querySelector('.js-credit-pay-range');

	if(creditPayRange) {

		var creditPayInput = document.querySelector('.js-credit-pay-input');


		noUiSlider.create(creditPayRange, {
			start: [15000],
			step: 5000,
			connect: 'lower',
			range: {
				'min': [5000],
				'max': [50000]
			},
			tooltips: [true],
			format: wNumb({
				decimals: 0,
				thousand: '',
				suffix: ''
			})
		});

		creditPayRange.noUiSlider.on('update', function (values, handle) {
			creditPayInput.value = values[handle];
		});

		creditPayInput.addEventListener('change', function () {
			creditPayRange.noUiSlider.set(this.value);
		});

	}

	
});