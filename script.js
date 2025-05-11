// Select the form and elements
const form = document.querySelector('form');
const confirmationMessage = document.createElement('div');
confirmationMessage.style.color = 'green';
confirmationMessage.style.textAlign = 'center';
confirmationMessage.textContent = 'Your message has been sent! Thank you!';

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Send the form data to Formspree
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        // Append confirmation message
        form.reset(); // Clear the form fields
        form.appendChild(confirmationMessage); // Show success message
      } else {
        throw new Error('There was an error with the submission.');
      }
    })
    .catch(error => {
      console.error('Form submission error:', error);
      alert('Oops, something went wrong! Please try again.');
    });
});
