  // Email form validation
  document.querySelector('.email-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const errorMessage = document.querySelector('.error-message');
  
    // Clear previous error message
    if (errorMessage) {
      errorMessage.remove();
    }
  
    // Simple validation for email and message fields
    if (!emailInput.value || !messageInput.value) {
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('error-message');
      errorDiv.style.color = 'red';
      errorDiv.style.textAlign = 'center';
      errorDiv.textContent = 'Please fill out both the email and message fields.';
      document.querySelector('.thank-you').appendChild(errorDiv);
      return;
    }
  
    // If both fields are filled, we can simulate sending the email (for demo purposes)
    alert('Form submitted successfully! We will get back to you soon.');
    emailInput.value = '';
    messageInput.value = '';
  });
  
  // Smoothly fade in elements as they enter the viewport
  window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
  
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  