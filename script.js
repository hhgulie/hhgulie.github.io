function sendEmail() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  const mailtoLink = `mailto:gulihabibullayeva6@gmail.com?subject=${subject}&body=${body}`;

  // Trigger the mail app
  window.open(mailtoLink, '_blank');

  return false; // Prevent default form submission
}

