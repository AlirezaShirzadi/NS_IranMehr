/* components */
import "./components/menu.js"
import "./components/slider.js"

/* libraries */
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {

});

/* goto top */
$(document).ready(function () {
    $('#goto-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
})