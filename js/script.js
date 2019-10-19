$(document).ready(function() {

    /* superslides */
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    /* Typed */
    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Software Engineer", "Student"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });


    /* Owl Carousel */
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            786: {
                items: 3
            },
            938: {
                items: 5
            }
        }
    });




    /* easyPie */
    var skillsOffsetTop = $(".skills_section").offset().top;
    //console.log(skillsOffsetTop.top);
    $(window).scroll(function() {
        // console.log(window.pageYOffset);
        if (window.pageYOffset > skillsOffsetTop - $(window).height() + 200) {
            /* EasyPieChart */
            $('.chart').easyPieChart({
                //your options goes here
                easing: "easeInOut",
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidhth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            })
        }
    });


    /***** Counter **********/

    var StatOffsetTop = $(".statSection").offset().top;
    var CountUpFinished = false;
    $(window).scroll(function() {
        // console.log(window.pageYOffset);
        if (!CountUpFinished && window.pageYOffset > StatOffsetTop - $(window).height() + 400) {
            $(".counter").each(function() {
                var el = $(this);
                var endVal = parseInt(el.text());

                el.countup(endVal);
            });
            CountUpFinished = true;
        }
    })


    /******* FANCY BOX ***********/

    $('[data-fancybox]').fancybox({
        // Options will go here
    });

    /* Isotope */
    (".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});