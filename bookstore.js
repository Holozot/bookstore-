document.addEventListener('DOMContentLoaded', function() {
    // --- "Show More" Button Functionality for Multiple Instances ---
    const showMoreButtons = document.querySelectorAll('.show-more-btn'); // Select all buttons with this class

    showMoreButtons.forEach(button => {
        // Find the parent .featured-text-content first
        const featuredTextContent = button.closest('.featured-text-content');
        // Then find the .additional-content within that parent
        const additionalContent = featuredTextContent ? featuredTextContent.querySelector('.additional-content') : null;

        if (additionalContent) { // Ensure the content div exists
            additionalContent.style.display = 'none'; // Ensure content is hidden initially
            button.textContent = 'Show More'; // Ensure button text is "Show More" initially

            button.addEventListener('click', function() {
                if (additionalContent.style.display === 'none') {
                    additionalContent.style.display = 'block'; // Show the content
                    this.textContent = 'Show Less'; // 'this' refers to the button that was clicked
                } else {
                    additionalContent.style.display = 'none'; // Hide the content
                    this.textContent = 'Show More'; // Change button text back
                }
            });
        }
    });

    // --- Newsletter Form Validation ---
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');

    // Function to validate email format
    function validateEmail() {
        const email = emailInput.value.trim();
        // A simple regex for email validation (can be more complex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = 'Email cannot be empty.';
            emailError.style.display = 'block';
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.textContent = ''; // Clear error message
            emailError.style.display = 'none';
            return true;
        }
    }

    // Real-time validation as user types
    emailInput.addEventListener('input', validateEmail);

    // Final validation on form submission
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (validateEmail()) {
            // If email is valid, you would typically send the form data to a server here.
            // For this example, we'll just show an alert.
            alert('Thank you for subscribing, ' + emailInput.value + '!');

            // Optionally, clear the form field after successful submission
            newsletterForm.reset();
            emailError.textContent = ''; // Clear any leftover error
            emailError.style.display = 'none';
        } else {
            // If validation fails, the error message is already displayed by validateEmail()
            // You might want to focus the input field
            emailInput.focus();
        }
    });
});
