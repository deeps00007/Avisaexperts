let currentIndex = 1; // Start at the first slide (not the cloned one)
const slideInterval = 3000; // Time in milliseconds (3 seconds)
let interval;

function moveSlide(direction) {
    const container = document.querySelector('.passport-container');
    const totalCards = container.children.length;
    const cardWidth = 311; // width of .passport-card + margin-right

    // Calculate new index
    currentIndex += direction;

    // Wrap around if at the end
    if (currentIndex < 0) {
        currentIndex = totalCards - 2; // Go to the second last slide
        setTimeout(() => {
            container.style.transition = 'none'; // Disable transition for instant move
            container.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move instantly
        }, 500); // Wait for transition time
    } else if (currentIndex >= totalCards - 1) {
        currentIndex = 1; // Go to the first slide
        setTimeout(() => {
            container.style.transition = 'none'; // Disable transition for instant move
            container.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move instantly
        }, 500); // Wait for transition time
    } else {
        container.style.transition = 'transform 0.5s ease'; // Enable transition for normal slides
    }

    // Slide the container
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Reset interval on manual slide
    resetInterval();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => moveSlide(1), slideInterval);
}

// Start the automatic sliding
interval = setInterval(() => moveSlide(1), slideInterval);