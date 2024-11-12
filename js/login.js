document.getElementById('accountForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let otp = document.getElementById('otp').value;

    if (!name || !email || !phone || !otp) {
        alert("All fields are required!");
    } else {
        if (validateEmail(email) && validatePhone(phone)) {
            alert("Form Submitted Successfully!");
            // Perform further actions (like server-side submission) here
        }
    }
});

document.getElementById('getOtp').addEventListener('click', function() {
    let phone = document.getElementById('phone').value;
    if (validatePhone(phone)) {
        alert("OTP sent to " + phone);
    } else {
        alert("Please enter a valid phone number.");
    }
});

document.getElementById('verifyOtp').addEventListener('click', function() {
    let otp = document.getElementById('otp').value;
    if (otp === "1234") { // Mock OTP for simplicity
        alert("OTP Verified Successfully");
    } else {
        alert("Invalid OTP. Please try again.");
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}
