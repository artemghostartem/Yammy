$(document).ready(function() {

    $(window).on('scroll', function() {
        headerSticky()
    })

    // header functions

    function headerSticky() {

        let header = $('header')
        let mainScreen = $('.opening-section')
        let headerOffsetTop = header.offset().top
        let mainScreenHeight = mainScreen.height()

        if (headerOffsetTop > 100 && (document.querySelector('header').classList.contains('active') == false)) {
            header.addClass('active')
            console.log('added')
        } else if (headerOffsetTop < 100 && document.querySelector('header').classList.contains('active')) {
            header.removeClass('active')
            console.log('removed')
        }

        if (headerOffsetTop > mainScreenHeight && (document.querySelector('.main_button').classList.contains('active') == false)) {
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


    //carousel hero
    let owlHero = $('.hero-carousel')
    owlHero.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
    })

    $('.opening-section .carousel-prev').on('click', function() {
        owlHero.trigger('prev.owl.carousel');
    })
    $('.opening-section .carousel-next').on('click', function() {
        owlHero.trigger('next.owl.carousel');
    })
    // carousel crush
    let owlCrush = $('.crush-carousel')
    owlCrush.owlCarousel({
        items: 3,
        loop: false,
        nav: false,
        dots: false,
        center: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    })



    //carouselProgressBar
    let j = 1
    let progressBarLine = document.querySelector('.blue-line')
    let owlChildrens = document.querySelectorAll('.crush-carousel .owl-item')
    let owlChildrensLength = owlChildrens.length

    function progressBar() {
        let initialwith = 100 / (owlChildrens.length - 2)
        let newWidth = initialwith * j
        progressBarLine.style.width = `${newWidth}%`
    }

    progressBar()

    $('.crush-section .carousel-prev').on('click', function() {
        owlCrush.trigger('prev.owl.carousel');
        if (j > 1) {
        	j--
        	progressBar()
        }
    })
    $('.crush-section .carousel-next').on('click', function() {
        owlCrush.trigger('next.owl.carousel');
        if (j < (owlChildrens.length - 2)) {
            j++
            progressBar()
        }
    })






    //marquee
    function animateMarquee(el, duration) {
        const innerEl = el.querySelector('.marquee__inner');
        const innerWidth = innerEl.offsetWidth;
        const cloneEl = innerEl.cloneNode(true);
        el.appendChild(cloneEl);

        let start = performance.now();
        let progress;
        let translateX;

        requestAnimationFrame(function step(now) {
            progress = (now - start) / duration;

            if (progress > 1) {
                progress %= 1;
                start = now;
            }

            translateX = innerWidth * progress;

            innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
            cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
            requestAnimationFrame(step);
        });
    }

    const marquee1 = document.querySelector('#marquee1');
    const marquee2 = document.querySelector('#marquee2');

    animateMarquee(marquee1, 30000);
    animateMarquee(marquee2, 30000);
})