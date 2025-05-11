// JavaScript for Copy to Clipboard functionality
document.getElementById('copy-button').addEventListener('click', function() {
  const emailText = document.getElementById('email-text').textContent; // Get the email text
  const textarea = document.createElement('textarea'); // Create a temporary textarea element

  textarea.value = emailText; // Set the email as the value of the textarea
  document.body.appendChild(textarea); // Append the textarea to the body
  textarea.select(); // Select the text inside the textarea
  document.execCommand('copy'); // Execute the copy command

  document.body.removeChild(textarea); // Remove the temporary textarea

  // Optionally, change button text to confirm copy action
  const copyButton = document.getElementById('copy-button');
  copyButton.textContent = 'Copied!'; // Update button text
  setTimeout(() => {
    copyButton.textContent = 'Copy Email'; // Reset after 2 seconds
  }, 2000);
});

// Create a new div for the custom cursor trail
const cursorTrail = document.createElement('div');
cursorTrail.classList.add('cursor-trail');
document.body.appendChild(cursorTrail);

// Update the cursor's position on mouse move
document.addEventListener('mousemove', (e) => {
  cursorTrail.style.left = `${e.pageX}px`;
  cursorTrail.style.top = `${e.pageY}px`;
});
