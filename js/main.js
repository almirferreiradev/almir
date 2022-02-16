jQuery(document).ready(function ($) {



    //FIXAR HEADER
    window.onscroll = function () {
        if (window.pageYOffset > 80) {
            $("#sobre").addClass("sobre-animacao");
            
        } else {
            $("#sobre").removeClass("sobre-animacao");
            
        }

        if (window.pageYOffset > 620) {
            $("#menu-lateral").addClass("ativar-menu-lateral");
        } else{
                $("#menu-lateral").removeClass("ativar-menu-lateral")
            }
        }
    



    //ISOTOPE
    let btns = $("#portifolio .button-group button")
    btns.click(function (e) {
        $(btns).removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#portifolio .grid").isotope({ filter: selector });
    });

    $(window).on("load", function(){
        $("#portifolio .grid").isotope({ filter: "*" });
    });





    $(".tecnologias").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        lazyLoad: false,
        nav: false,
        animateOut: 'fadein',
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
    });

    $(".depoimento").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        lazyLoad: false,
        nav: false,
        animateOut: 'fadein',
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });


});

