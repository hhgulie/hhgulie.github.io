  //  animated circles 
  const backgroundCircles = document.querySelector('.background-circles');

  function createCircle() {
      const circle = document.createElement('div');
      circle.classList.add('circle');

      // Random position and animation duration
      const size = Math.random() * 50 + 20; 
      const left = Math.random() * 100; 
      const duration = Math.random() * 10 + 5; 

      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${left}%`;
      circle.style.animationDuration = `${duration}s`;

      backgroundCircles.appendChild(circle);

      // Remove circle after animation ends
      setTimeout(() => {
          circle.remove();
      }, duration * 1000);
  }

  setInterval(createCircle, 1000); // Generate a new circle every second