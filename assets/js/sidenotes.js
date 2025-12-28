/**
 * Sidenotes.js - Progressive enhancement for Tufte-style sidenotes
 * Provides keyboard navigation and ARIA support
 */

(function () {
    'use strict';

    // Initialize sidenotes on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidenotes);
    } else {
        initSidenotes();
    }

    function initSidenotes() {
        const sidenotes = document.querySelectorAll('.sidenote');
        const sidenoteNumbers = document.querySelectorAll('.sidenote-number');

        // Add ARIA attributes for accessibility
        sidenotes.forEach((sidenote, index) => {
            const id = `sidenote-content-${index + 1}`;
            sidenote.setAttribute('id', id);

            // Link sidenote number to content
            const numberLabel = sidenoteNumbers[index];
            if (numberLabel) {
                numberLabel.setAttribute('aria-describedby', id);
                numberLabel.setAttribute('tabindex', '0');
                numberLabel.setAttribute('role', 'button');
                numberLabel.setAttribute('aria-expanded', 'false');

                // Keyboard support for mobile toggle
                numberLabel.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleSidenote(numberLabel, sidenote);
                    }
                });

                // Click support for mobile toggle
                numberLabel.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                        toggleSidenote(numberLabel, sidenote);
                    }
                });
            }
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                handleResize();
            }, 250);
        });
    }

    function toggleSidenote(numberLabel, sidenote) {
        const checkbox = numberLabel.nextElementSibling;
        if (checkbox && checkbox.classList.contains('margin-toggle')) {
            checkbox.checked = !checkbox.checked;
            numberLabel.setAttribute('aria-expanded', checkbox.checked.toString());
        }
    }

    function handleResize() {
        const sidenoteNumbers = document.querySelectorAll('.sidenote-number');

        // Reset ARIA expanded state on desktop
        if (window.innerWidth > 768) {
            sidenoteNumbers.forEach(function (number) {
                number.setAttribute('aria-expanded', 'false');
                const checkbox = number.nextElementSibling;
                if (checkbox && checkbox.classList.contains('margin-toggle')) {
                    checkbox.checked = false;
                }
            });
        }
    }

    // Expose initialization function globally for dynamic content
    window.initSidenotes = initSidenotes;
})();
