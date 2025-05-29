import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.js';

// Ensure jQuery is available globally for plugins
window.jQuery = window.$ = $;

$(document).ready(function () {
    $(".home-slider").owlCarousel({
        loop: true,
        rtl: true,
        nav: true,
        navText: ["<svg class='size-8 text-black rotate-180'><use href='#arrow-icon' /></svg>", "<svg class='size-8 text-black'><use href='#arrow-icon' /></svg>"],
        items: 1,
        responsive: {
            0:
                {
                    dots: true,
                }
            ,
            1024:
                {
                    dots: false,
                }
        }
    });

    $(".counter-slider").owlCarousel({
        loop: true,
        rtl: true,
        nav: false,
        items: 1,
        responsive: {
            0: {
                dots: true,
                item: 1
            },
            768: {
                items: 2,
            },
            1024: {
                dots: false,
            }
        }
    });

    $(".blog-slider").owlCarousel({
        loop: true,
        rtl: true,
        nav: false,
        margin: 20,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
});
