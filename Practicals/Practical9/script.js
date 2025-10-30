// Form validation script
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('registerForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const submitButton = form.querySelector('button[type="submit"]');
    const errorMessages = document.getElementById('errorMessages');

    // Simple validation rules
    function validateForm() {
        let isValid = true;
        let errors = [];

        // Username validation
        if (username.value.length < 3) {
            isValid = false;
            errors.push("Username must be at least 3 characters");
            username.classList.add('error');
        } else {
            username.classList.remove('error');
            username.classList.add('success');
        }

        // Email validation
        if (!email.value.includes('@')) {
            isValid = false;
            errors.push("Please enter a valid email");
            email.classList.add('error');
        } else {
            email.classList.remove('error');
            email.classList.add('success');
        }

        // Password validation
        if (password.value.length < 6) {
            isValid = false;
            errors.push("Password must be at least 6 characters");
            password.classList.add('error');
        } else {
            password.classList.remove('error');
            password.classList.add('success');
        }

        // Confirm password validation
        if (password.value !== confirmPassword.value) {
            isValid = false;
            errors.push("Passwords do not match");
            confirmPassword.classList.add('error');
        } else {
            confirmPassword.classList.remove('error');
            confirmPassword.classList.add('success');
        }

        // Update error messages
        errorMessages.innerHTML = errors.join('<br>');
        
        // Enable/disable submit button
        submitButton.disabled = !isValid;

        return isValid;
    }

    // Add input event listeners
    const inputs = [username, email, password, confirmPassword];
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert("Form submitted successfully!");
            // Reset form
            form.reset();
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
            });
            submitButton.disabled = true;
            errorMessages.innerHTML = '';
        }
    });
});