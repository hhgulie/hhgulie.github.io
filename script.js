document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
});

