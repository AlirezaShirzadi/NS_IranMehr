import $ from "jquery";

// $(window).resize(function() {
//     let windowWidth = $(window).width();
//     if (windowWidth > 1024) {
//         $("#overlay").addClass('-right-full');
//     }
// });

$("#nav-toggle").on('click', function(){
    $("#overlay").removeClass('hidden');
    $("#main-menu").addClass('active');
})

$("#overlay").on('click', function(){
    $("#overlay").addClass('hidden');
    $("#main-menu").removeClass('active');
})

$("#nav-close").on('click', function(){
    $("#overlay").addClass('hidden');
    $("#main-menu").removeClass('active');
})
