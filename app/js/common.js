$(document).ready(function() {

	$(window).on('scroll', function () {
		headerSticky()
	})

	// header functions

	function headerSticky() {

		let header = $('header')
		let mainScreen = $('.opening-section')
		let headerOffsetTop = header.offset().top
		let mainScreenHeight = mainScreen.height()
		
		if ( headerOffsetTop > 100 && (document.querySelector('header').classList.contains('active') == false )) {
			header.addClass('active')
			console.log('added')
		} else if ( headerOffsetTop < 100 && document.querySelector('header').classList.contains('active')) {
			header.removeClass('active')
			console.log('removed')
		}

		if (headerOffsetTop > mainScreenHeight && (document.querySelector('.main_button').classList.contains('active') == false )) {
			$('.main_button').addClass('active')
		} else if (headerOffsetTop < mainScreenHeight && document.querySelector('.main_button').classList.contains('active')) {
			$('.main_button').removeClass('active')

		}
	}
	//language dropdown

	dropdownLanguage();

	function dropdownLanguage() {
		let droppdownLanguages = $('.language-menu')
		let dropdown = $('.language')

		droppdownLanguages.css("display", "flex")
		droppdownLanguages.hide();

		dropdown.on('click', function() {
			droppdownLanguages.fadeToggle(0)
			dropdown.toggleClass('active')
		})
	}
	

	//carousel
	let owlHero = $('.hero-carousel')	
	owlHero.owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		// autoplay: true,
		// autoplayTimeout: 3000,
	})

	$('.carousel-prev').on('click', function () {
		owlHero.trigger('prev.owl.carousel');
	})
	$('.carousel-next').on('click', function () {
		owlHero.trigger('next.owl.carousel');
	})
})