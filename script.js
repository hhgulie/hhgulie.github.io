 // Handle email form submission
document.querySelector('.email-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop default form submission (we want to handle it manually)

  // Get input values
  const emailInput = document.querySelector('input[name="email"]'); // Or use getElementById('email')
  const messageInput = document.querySelector('textarea[name="message"]'); // Or use getElementById('message')

  // Remove old error message if it exists
  const errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }

  // Check if email or message is empty
  if (!emailInput.value || !messageInput.value) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.style.color = 'red';
    errorDiv.style.textAlign = 'center';
    errorDiv.textContent = 'Please fill out both the email and message fields.';
    document.querySelector('.thank-you').appendChild(errorDiv);
    return;
  }

  // If valid, show success message (simulate email sending)
  alert('Form submitted successfully! We will get back to you soon.');
  emailInput.value = '';
  messageInput.value = '';
});

// Fade-in effect for elements as you scroll
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('visible'); // Trigger CSS animation
    }
  });
});
