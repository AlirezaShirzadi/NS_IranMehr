import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.js';

// Ensure jQuery is available globally for plugins
window.jQuery = window.$ = $;

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
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
});
