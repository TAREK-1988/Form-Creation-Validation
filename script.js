document.addEventListener('DOMContentLoaded', function () {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Handle form submission
    form.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation state and messages
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Make feedback div visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // Show success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            // Show error messages
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
