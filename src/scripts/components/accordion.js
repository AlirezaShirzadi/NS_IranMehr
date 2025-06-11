/**
 * Accordion functionality for the FAQ section
 * Using jQuery for DOM manipulation
 */

$(document).ready(function() {
    // Initialize the FAQ items
    initFAQ();

    function initFAQ() {
        // Add click event listener to each FAQ question
        $('.faq-question').on('click', function() {
            const faqIndex = $(this).attr('data-faq');
            const answerElement = $(this).next('.faq-answer');
            const iconElement = $(this).find('.faq-icon');

            // Toggle the answer visibility
            answerElement.slideToggle(300);

            // Toggle the icon (plus/minus)
            if (answerElement.hasClass('hidden')) {
                answerElement.removeClass('hidden');
                $(this).addClass('text-primary');
                iconElement.html('<svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +
                    '  <path d="M11.9199 22C17.4199 22 21.9199 17.5 21.9199 12C21.9199 6.5 17.4199 2 11.9199 2C6.41992 2 1.91992 6.5 1.91992 12C1.91992 17.5 6.41992 22 11.9199 22Z" stroke="#0052B4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '  <path d="M7.91992 12H15.9199" stroke="#0052B4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg>')
            } else {
                setTimeout(() => {
                    answerElement.addClass('hidden');
                }, 300);
                $(this).removeClass('text-primary');
                iconElement.html('<svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +
                    '  <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#0052B4"/>\n' +
                    '</svg>')
            }
        });
    }
});
