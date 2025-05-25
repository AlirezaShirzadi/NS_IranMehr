import $ from "jquery";

// $(window).resize(function() {
//     let windowWidth = $(window).width();
//     if (windowWidth > 1024) {
//         $("#overlay").addClass('-right-full');
//     }
// });

// Main menu toggle for mobile
$("#nav-toggle").on('click', function(){
    $("#overlay").removeClass('hidden');
    $("#main-menu").addClass('active');
});

$("#overlay").on('click', function(){
    $("#overlay").addClass('hidden');
    $("#main-menu").removeClass('active');
    // Close all submenus when closing the main menu
    $(".submenu-active").removeClass('submenu-active');
});

$("#nav-close").on('click', function(){
    $("#overlay").addClass('hidden');
    $("#main-menu").removeClass('active');
    // Close all submenus when closing the main menu
    $(".submenu-active").removeClass('submenu-active');
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
