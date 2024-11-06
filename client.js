function toggleDropdown(clickedCheckbox) {
    // Get all checkboxes and dropdowns
    const checkboxes = document.querySelectorAll('.menuCheckbox');
    const dropdowns = document.querySelectorAll('.dropdown-menu');

    checkboxes.forEach((checkbox, index) => {
        // If the current checkbox is the one clicked, toggle its state
        if (checkbox === clickedCheckbox) {
            dropdowns[index].style.display = checkbox.checked ? 'block' : 'none';
        } else {
            // Otherwise, uncheck all other checkboxes and hide their dropdowns
            checkbox.checked = false;
            dropdowns[index].style.display = 'none';
        }
    });
}

// Hide dropdown if clicked outside
document.addEventListener('click', function(event) {
    const checkboxes = document.querySelectorAll('.menuCheckbox');
    const dropdowns = document.querySelectorAll('.dropdown-menu');

    // Check if the click happened outside of any checkbox or dropdown
    if (![...checkboxes].some(checkbox => checkbox.contains(event.target)) &&
        ![...dropdowns].some(dropdown => dropdown.contains(event.target))) {
        // If yes, uncheck all checkboxes and hide all dropdowns
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = false;
            dropdowns[index].style.display = 'none';
        });
    }
});