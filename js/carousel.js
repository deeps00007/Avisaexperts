
  const slider = document.querySelector('.slider');
  
  function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
  }

  // Automatic sliding logic
  function autoSlide() {
    const items = document.querySelectorAll('.item');
    slider.append(items[0]);  // Move the first item to the end
  }

  // Trigger auto-slide every 3 seconds
  setInterval(autoSlide, 3000);

  document.addEventListener('click', activate, false);

