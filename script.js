  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!email || !message) {
      alert('Please fill out both the email and message fields.');
      return;
    }

    const subject = `Message from ${name || 'Website User'}`;
    const body = `From: ${name} <${email}>\n\n${message}`;

    // This opens the default mail app with pre-filled fields
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });


