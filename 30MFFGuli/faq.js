// Select all elements with the class 'question'
const questions = document.querySelectorAll('.question');

// Loop through each question element
questions.forEach(question => {
      // Add a click event listener to each question
    question.addEventListener('click', () => {
        // Find the next sibling element (the answer) of the clicked question
        const answer = question.nextElementSibling;
        
         // Check if the answer is currently visible (display is 'block')
        const isVisible = answer.style.display === 'block';

         // Toggle the visibility of the answer: if it's visible, hide it, otherwise show it
        answer.style.display = isVisible ? 'none' : 'block';
    });
});