document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Perform form validation (this is a simple example, you can expand it as needed)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const course = document.getElementById('course').value;

    if (name === '' || email === '' || phone === '' || course === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // If validation passes, display success message
    document.getElementById('successMessage').classList.remove('hidden');

    // Clear the form
    document.getElementById('registrationForm').reset();
});



////********** footer**********/
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = `&copy; ${currentYear} Tech Force Pakistan. All rights reserved.`;
});