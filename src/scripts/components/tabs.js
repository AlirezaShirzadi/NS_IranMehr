/**
 * Tab functionality for the English level section
 * Using jQuery for DOM manipulation
 */

$(document).ready(function() {
    // Add click event listener to each tab button
    $('.eng-level-tab').on('click', function() {
        // Get the tab identifier from the data-tab attribute
        const tabId = $(this).attr('data-tab');

        // Remove active class from all tab buttons
        $('.eng-level-tab').removeClass('active text-white bg-secondary')
                          .addClass('text-black bg-transparent');

        // Add active class to the clicked tab button
        $(this).addClass('active text-white bg-secondary')
               .removeClass('text-black bg-transparent');

        // Hide all tab content
        $('.tab-content').addClass('hidden').removeClass('active');

        // Show the selected tab content
        $(`[data-tab-content="${tabId}"]`).removeClass('hidden').addClass('active');
    });
});
