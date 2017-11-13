$(document)
	.ready(function () {

		//Funciones para el navbar
		$('.ui.menu .ui.dropdown').dropdown({
			on: 'hover'
		});
		$('.ui.menu a.item')
			.on('click', function () {
				$(this)
					.addClass('active')
					.siblings()
					.removeClass('active');
			});

		//funciones de transicion para la foto
		$('.foto')
			.transition({
				animation: 'pulse',
				duration: '1s'
			})

		
	});

function lmao(params) {
	console.log(params)
}