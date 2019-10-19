$(document).ready(function() {

    /* superslides */
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    /* Typed */
    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Web Developer.", "Student."],
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
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });



    /* easyPie */

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function() {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


        }

        /***** Counter **********/

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;

        }


    });


    /******* FANCY BOX ***********/

    $("[data-fancybox]").fancybox();


    /***********  Isotope ***************/
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });



    /***********  Navigation ************/
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickNavigation);

    function stickNavigation() {
        var body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px"); //make the nav smotthlyyyyyyyyy
            body.addClass('FixedNav');
        } else {
            body.css("padding-top", 0);
            body.removeClass('FixedNav');
        }
    }

});