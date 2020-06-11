document.addEventListener('DOMContentLoaded', function() {
	// Price
	// var priceRange = document.getElementById('priceRange');

	// if (priceRange) {

	// 	noUiSlider.create(priceRange, {
	// 		connect: true,
	// 		behaviour: 'tap',
	// 		start: [0, 1000000],
	// 		range: {
	// 			'min': [0],
	// 			'max': [1000000]
	// 		}
	// 	});

	// 	var priceInputs = [
	// 		document.querySelector('.js-input-price-min'), // 0
	// 		document.querySelector('.js-input-price-max')  // 1
	// 	];


	// 	priceRange.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
	// 		priceInputs[handle].value = values[handle];
	
	// 	});

	// 	priceInputs.forEach(function(input, handle) {
	// 		input.addEventListener('change', function() {
	

	// 			priceRange.noUiSlider.setHandle(handle, this.value);
	// 		});
	// 	});
	// }

	var priceRangeInputs = document.querySelectorAll('.js-range-input');
		console.log(priceRangeInputs);

	if(priceRangeInputs.length > 0) {

		for(var i = 0; priceRangeInputs.length > 0; i++) {
			var priceRangeInput = priceRangeInputs[i];

			var priceRangeInputsParent = priceRangeInput.closest('.js-range-inputs-parent');



			var priceInputs = [
				priceRangeInputsParent.querySelector('.js-range-input-val-min'), // 0
				priceRangeInputsParent.querySelector('.js-range-input-val-max')  // 1
			];



			noUiSlider.create(priceRangeInput, {
				connect: true,
				behaviour: 'tap',
				start: [0, 1000000],
				range: {
					'min': [0],
					'max': [1000000]
				}
			});

			priceRangeInput.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
				priceInputs[handle].value = values[handle];
			});

			priceInputs.forEach(function(input, handle) {

				input.addEventListener('change', function() {
					priceRangeInput.noUiSlider.setHandle(handle, this.value);
				});

			});


		}

	}
});