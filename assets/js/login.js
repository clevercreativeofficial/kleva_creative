// Toggle password visibility
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.getElementById('passwordToggleIcon');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fi-rr-eye');
            toggleIcon.classList.add('fi-rr-eye-crossed');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fi-rr-eye-crossed');
            toggleIcon.classList.add('fi-rr-eye');
        }
    }

    // Form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Add your form submission logic here
        console.log('Form submitted:', { email, password, remember });
        
        // Show loading state on button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = `
            <span class="relative z-10 flex items-center justify-center gap-2">
                <i class="fi fi-rr-spinner animate-spin"></i>
                Signing in...
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-primary/70"></div>
        `;
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message or redirect
            // window.location.href = '/dashboard';
        }, 1500);
    });