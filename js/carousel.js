const slider = document.querySelector('.slider'); 
function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length - 1]);

  // After rearranging, apply the scale to the second item
  scaleNextItem();
}

function scaleNextItem() {
  const items = document.querySelectorAll('.item');
  
  // Reset scale for all items first
  items.forEach(item => {
    item.classList.remove('scale-up'); // Remove scale effect
  });

  // Apply scale to the second item
  if (items[1]) {
    items[1].classList.add('scale-up'); // Apply scale-up class
  }
}

// Automatic sliding logic
function autoSlide() {
  const items = document.querySelectorAll('.item');
  slider.append(items[0]);  // Move the first item to the end
  
  // Apply scale to the second item after sliding
  scaleNextItem();
}

// Trigger auto-slide every 3 seconds
setInterval(autoSlide, 3000);

// Apply scaling on initial load
scaleNextItem();

document.addEventListener('click', activate, false);


//Highlighted Section Js
const steps = document.querySelectorAll('.process-step');

// Add click event listener to each step
steps.forEach(step => {
  step.addEventListener('click', function() {
    // Remove highlight from all steps
    steps.forEach(s => s.classList.remove('highlight-step'));
    
    // Add highlight to the clicked step
    this.classList.add('highlight-step');
  });
});


//faq Section Js

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
        // Close all other answers
        faqItems.forEach(otherItem => {
            const otherAnswer = otherItem.querySelector('.answer');
            const otherIcon = otherItem.querySelector('.faq-icon');
            
            if (otherItem !== item) {
                otherAnswer.style.display = 'none'; // Close other answers
                otherIcon.classList.remove('rotate'); // Reset other icons
            }
        });

        // Toggle current answer visibility
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
   

        // Rotate current icon
        icon.classList.toggle('rotate');
    });
});
