// JavaScript to handle form validation and confirmation message
document.querySelector('.email-form').addEventListener('submit', function (e) {
  // Prevent form submission so we can validate it first
  e.preventDefault();

  // Get the form inputs
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  
  // Validate that all fields are filled
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill out all fields before submitting.');
    return; // Stop submission if any field is empty
  }

  // If everything is filled out, submit the form (trigger the email client)
  this.submit();

  // Show a confirmation message (optional)
  alert('Your message is being sent. Thank you!');
});
