// document.addEventListener('DOMContentLoaded', function () {
//     const navItems = document.querySelectorAll('.nav-item');
//     const tabContents = document.querySelectorAll('.tab-content');

//     navItems.forEach(item => {
//         item.addEventListener('click', function (event) {
//             event.preventDefault(); // Prevent default anchor behavior

//             // Remove active class from all nav items
//             navItems.forEach(nav => nav.classList.remove('active'));
//             // Hide all tab contents
//             tabContents.forEach(content => content.classList.remove('active'));

//             // Add active class to the clicked nav item
//             this.classList.add('active');

//             // Show the corresponding tab content
//             const targetTab = this.getAttribute('data-tab');
//             document.getElementById(targetTab).classList.add('active');
//         });
//     });
// });

const toggleCheckbox = document.getElementById('toggleCheckbox');
const toggleButton = document.getElementById('toggleButton');
const options = document.getElementById('options');
const timerDisplay = document.getElementById('timer');
let timer = null;
let timerRunning = false;  // Flag to indicate if a timer is currently running

// Event listener for the toggle button to show/hide options
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        options.classList.add('visible');
    } else {
        options.classList.remove('visible');
        clearInterval(timer);
        timerDisplay.textContent = '';
        toggleCheckbox.disabled = false;
        timerRunning = false;  // Allow new clicks on options
        toggleButton.classList.remove('timer-active');  // Reset background color
    }
});

// Loop through each option and add click event listeners
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        // Only allow click if no timer is running
        if (!timerRunning) {
            const time = option.getAttribute('data-time');

            // Turn off the toggle button, disable it, and change the background color
            toggleCheckbox.checked = false;
            toggleCheckbox.disabled = true;
            toggleButton.classList.add('timer-active');  // Apply red background color
            
            // Hide all options except the selected one
            options.querySelectorAll('.option').forEach(o => {
                if (o !== option) o.style.display = 'none';
            });

            timerRunning = true;  // Set flag to indicate timer is running
            startTimer(time);  // Start a new timer
        }
    });
});

// Timer function to start countdown and re-enable the toggle button after timeout
function startTimer(seconds) {
    let remaining = parseInt(seconds);
    timerDisplay.textContent = `${remaining}s`;

    // Start a new interval timer
    timer = setInterval(() => {
        remaining--;
        timerDisplay.textContent = `${remaining}s`;

        if (remaining <= 0) {
            clearInterval(timer);  // Stop the timer
            timer = null;
            timerRunning = false;  // Allow option clicks again

            toggleCheckbox.disabled = false;  // Re-enable the toggle button
            toggleButton.classList.remove('timer-active');  // Remove red background color

            // Show all options again and reset visibility
            options.querySelectorAll('.option').forEach(o => o.style.display = 'flex');
           setTimeout(() => {
            options.classList.remove('visible');
           }, 5000);
            timerDisplay.textContent = '';
        }
    }, 1000);
}


toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        toggleButton.classList.add('active-bg');  // Apply new background color
    } else {
        toggleButton.classList.remove('active-bg');  // Revert to default color
    }
});


//Calender Js
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
  if (month === 1 && isLeapYear(year)) {
    return 29;
  } else {
    return daysInMonth[month];
  }
}

function generateCalendar() {
  const calendarDates = document.getElementById('calendar-dates');
  calendarDates.innerHTML = '';

  const firstDay = (new Date(currentYear, currentMonth)).getDay();
  const days = getDaysInMonth(currentMonth, currentYear);

  let date = 1 - firstDay;
  for (let i = 0; i < 6; i++) {
    const calendarWeek = document.createElement('div');
    calendarWeek.classList.add('calendar-week');

    for (let j = 0; j < 7; j++) {
      const calendarDay = document.createElement('div');
      calendarDay.classList.add('calendar-day');

      if (date > 0 && date <= days) {
        calendarDay.innerHTML = `<div>${date}</div>`;
        calendarDay.setAttribute('data-date', `${currentYear}-${currentMonth + 1}-${date}`);
        calendarDay.addEventListener('click', function() {
          const selectedDate = this.getAttribute('data-date');
          document.getElementById('schedule-date').textContent = selectedDate;
          // TODO: update schedule list based on selected date
        });
      } else {
        calendarDay.innerHTML = '<div></div>';
      }

      date++;
      calendarWeek.appendChild(calendarDay);
    }

    calendarDates.appendChild(calendarWeek);
  }
}

function previousMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
}

function updateCalendar() {
  document.getElementById('calendar-month-year').textContent = `${months[currentMonth]} ${currentYear}`;
  generateCalendar();
}

updateCalendar();