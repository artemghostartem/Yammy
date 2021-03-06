$(document).ready(function() {
let header = $('header')
    let mainScreen = $('.opening-section')  
    $(window).on('scroll', function() {
        if (window.innerWidth > 768) {
            headerSticky()
        } else {
            header.addClass('active')
        }
        
    })

    // header functions
    
    function headerSticky() {

        
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
        loop: false,
        nav: false,
        dots: false,
        center: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    })


    let progressBarLine = document.querySelector('.blue-line')
    let owlChildrens = document.querySelectorAll('.crush-carousel .owl-item')
    let owlChildrensLength = owlChildrens.length
    let actives
    //carouselProgressBar
   

    function progressBar() {
        let i
        setTimeout(function(){
            for ( i = 0; i < owlChildrensLength; i++) {
                
                if (owlChildrens[i].classList.contains('active')) {
                    console.log(i);
                    actives = i +1
                    console.log(actives)
                    let initialwith
                    if (window.innerWidth > 768) {
                        initialwith = 100/3
                    } else {
                        initialwith = 100/4
                    }
                    
                    let newWidth = initialwith * actives
                    progressBarLine.style.width = `${newWidth}%`

                    break
                }

            }
        },100)
        
        
    }
    owlCrush.on('changed.owl.carousel', function(event) {
        progressBar()
       
    })

    progressBar()
       

    $('.crush-section .carousel-prev').on('click', function() {
        
        owlCrush.trigger('prev.owl.carousel');
    })
    $('.crush-section .carousel-next').on('click', function() {
        

        owlCrush.trigger('next.owl.carousel');
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


    // multilanguages
    getLanguage();

    $('.language-menu a').on('click',function () {
		event.preventDefault()
		let language = this.dataset.language
		setLanguage(language);
    })

    //pagescroll2id
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: function(){
            return offsetCustom()
        }
    });
    function offsetCustom() {
        let header = document.querySelector('header')
        let offset
        if (window.innerWidth > 768) {
            offset = header.offsetHeight-1
        } else {
            offset = 0 
        }
        return offset;
    }
    //mobile-menu
    $('.burger , .header .menu_mobile-main-list a').on('click',function () {
        event.preventDefault();
        $('.burger').toggleClass('active')
        $('.menu_mobile').toggleClass('active')
    })
})