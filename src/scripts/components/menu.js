import $ from "jquery";

// Ensure jQuery is available globally for plugins
window.jQuery = window.$ = $;

// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Main menu toggle for mobile
    $("#nav-toggle").on('click', function(){
        $("#overlay").removeClass('hidden');
        $("#main-menu").addClass('active');
        $('body').addClass('overflow-hidden');
    });

    $("#overlay").on('click', function(){
        $("#overlay").addClass('hidden');
        $("#main-menu").removeClass('active');
        // Close all submenus when closing the main menu
        $(".submenu-active").removeClass('submenu-active');
        $('body').removeClass('overflow-hidden');
    });

    $("#nav-close").on('click', function(){
        $("#overlay").addClass('hidden');
        $("#main-menu").removeClass('active');
        // Close all submenus when closing the main menu
        $(".submenu-active").removeClass('submenu-active');
        $('body').removeClass('overflow-hidden');
    });

    // Submenu toggle functionality
    $(".has-submenu > .nav__link, .submenu__item.has-submenu > .submenu__link").on('click', function(e){
        // Only handle submenu toggle on mobile
        if ($(window).width() < 1024) {
            e.preventDefault();
            e.stopPropagation();

            const $parent = $(this).parent();

            // If this submenu is already open
            if ($parent.hasClass('submenu-active')) {
                // Close this submenu
                $parent.removeClass('submenu-active');
            } else {
                // Close sibling submenus
                $parent.siblings('.submenu-active').removeClass('submenu-active');

                // Open this submenu
                $parent.addClass('submenu-active');
            }
        }
    });

    // Close submenus when clicking outside
    $(document).on('click', function(e) {
        if ($(window).width() < 1024) {
            if (!$(e.target).closest('.has-submenu').length) {
                $('.submenu-active').removeClass('submenu-active');
            }
        }
    });

    // Handle window resize
    $(window).on('resize', function() {
        if ($(window).width() >= 1024) {
            // Remove active classes on desktop as hover will handle it
            $('.submenu-active').removeClass('submenu-active');
        }
    });

    // Handle header on scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }
    });
});
