// Selecting the blueberry text element
let blueberryText = document.getElementById('blueberry-text');
let sections = document.querySelectorAll('.section');

// Storyline messages for each section
let messages = [
    'Meet the Fruit Friends',
    'Berry finds a glowing seed...',
    'Sunny helps plant it',
    'Crisp eats it alone!',
    'Together Forever Again YAYY!'
];

// Event listener for scrolling
document.addEventListener('scroll', function() {
    let scrollY = window.scrollY; // Get vertical scroll position
    let height = window.innerHeight; // Get viewport height
    let index = Math.floor(scrollY / height); // Determine section index
    let maxScroll = document.body.scrollHeight - height; // Total scrollable height
    let percentage = scrollY / maxScroll; // Scroll percentage
    
    // Update blueberry text based on the current section
    blueberryText.innerText = messages[index+1] || '<3';
    
    // Move text from left to right based on scroll position
    let moveDistance = percentage * (window.innerWidth - blueberryText.clientWidth);
    blueberryText.style.transform = `translateX(${moveDistance}px)`;
});

// Initial styling for smooth movement
blueberryText.style.position = 'absolute';