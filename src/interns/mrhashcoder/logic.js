$(document).ready(() => {
	$('.welcomeMessage')
		.css('font-size', '70px')
		.text('Hey!')
		.fadeIn(1500)
		.fadeOut(1500, () => {
			$('.welcomeMessage')
				.css('font-size', '50px')
				.text('Welcome!')
				.fadeIn(1500)
				.fadeOut(1500, () => {
					$('.welcomeMessage')
						.text('I am Abhishek!')
						.fadeIn(1500)
						.fadeOut(1500, () => {
							$('.welcomeMessage')
								.text('Abhishek\'s Portfolio')
								.fadeIn();
							if ($(window).width() <= 1300) {
								$('.leftBox').css('height', '50%');
							} else {
								$('.leftBox').css('width', '50%');
							}
							$('.rightBox').fadeIn(1500);
							$('#nav').fadeIn(1500);
							$('.option').click(e => {
								$('#nav .option').removeClass('selected');
								$('#' + e.currentTarget.id).addClass('selected');
								$('.content').css('display', 'none');
								const id = e.currentTarget.dataset['target'];
								$(id).fadeIn(2000);
							});

						});
				});
		});
});
