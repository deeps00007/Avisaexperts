const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    menuToggle.classList.toggle('cross'); // Toggles the cross effect
});


const image2 = "img/profile2.jpeg";
const image3= "img/profile3.jpeg";
const image4= "img/profile4.png";
const profiles = [
    {
      name: "Aarya Sharma",
      title: "U.S. Visa Consultant",
      description: "Offering personalized visa consultation and assistance for multiple countries, including the U.S., Canada, and Australia.",
      image: "./img/unsplash_g-Vl9Mom508.jpg", // Profile Image 1
    },
    {
      name: "John Doe",
      title: "UK Visa Consultant",
      description: "Expert in UK visa processes, helping clients with successful applications.",
      image: image2, // Profile Image 2
    },
    {
      name: "Jane Smith",
      title: "Canada Visa Consultant",
      description: "Providing guidance for Canadian visa applications and processes.",
      image: image3, // Profile Image 3
    },
    {
        name: "Rahul Kapoor",
        title: "Canada Visa Consultant",
        description: "Providing guidance for Canadian visa applications and processes.",
        image: image4, // Profile Image 3
      }
  ];
  
  let currentIndex1 = 0;
  
  function updateProfile() {
    const profile = profiles[currentIndex1];
    document.getElementById("profileName").textContent = profile.name;
    document.getElementById("profileTitle").textContent = profile.title;
    document.getElementById("profileDescription").textContent = profile.description;
    document.getElementById("profileImage").src = profile.image; // Update image source
  }
  
  // Next Arrow Click Event
  document.getElementById("nextArrow").addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % profiles.length; // Cycle through profiles
    updateProfile();
  });
  
  // Previous Arrow Click Event
  document.getElementById("prevArrow").addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + profiles.length) % profiles.length; // Cycle backwards
    updateProfile();
  });
  
  // Initialize the first profile
  updateProfile();
  

//   count js

const counters = document.querySelectorAll('.number');

counters.forEach((counter, index) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;

            // Check if it's the last counter and apply color
            if (index === counters.length - 1) {
                counter.style.color = '#FF7A00';
                counter.innerText=target+"+";  // Apply the orange color to the last counter
            }
        }
    };
    updateCount();
});


//Review Section Js

const reviewsContainer = document.querySelector('.reviews-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const totalReviews = document.querySelectorAll('.review-card').length;

    const updateCarousel = () => {
      const cardWidth = document.querySelector('.review-card').offsetWidth + 300; // including margin
      reviewsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalReviews - 1;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex < totalReviews - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });
