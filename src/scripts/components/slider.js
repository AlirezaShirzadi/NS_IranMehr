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
        },
        onInitialized: function() {
            // Add aria-labels to home slider dots
            $(".home-slider .owl-dot").each(function(index) {
                $(this).attr("aria-label", "اسلاید " + (index + 1));
            });

            $(".home-slider .owl-nav button").each(function(index) {
                $(this).attr("aria-label", "nav " + (index + 1));
                $(this).attr("role", "button");
            })
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
        },
        onInitialized: function() {
            // Add aria-labels to counter slider dots
            $(".counter-slider .owl-dot").each(function(index) {
                $(this).attr("aria-label", "آمار " + (index + 1));
            });
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
        },
        onInitialized: function() {
            // Add aria-labels to blog slider dots
            $(".blog-slider .owl-dot").each(function(index) {
                $(this).attr("aria-label", "مقاله " + (index + 1));
            });
        }
    });

    $(".grad-slider").owlCarousel({
        loop: true,
        rtl: true,
        nav: false,
        margin: 20,
        dots: true,
        autoWidth: true,
        onInitialized: function() {
            // Add aria-labels to grad slider dots
            $(".grad-slider .owl-dot").each(function(index) {
                $(this).attr("aria-label", "فارغ التحصیل " + (index + 1));
            });
        }
    });
});
