function submitForm() {
    const formData = new FormData(document.getElementById('myForm'));
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => alert(data.message));
}

function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validate the inputs
    if (!name || !email) {
        alert('Please fill out all fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Submit the form data
    const formData = new FormData(document.getElementById('myForm'));
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
}

// Function to navigate to the login page
function navigateToLogin() {
    window.location.href = "login.html"; // Redirect to login.html
}

// Placeholder function for navigating to the register page
function navigateToRegister() {
    alert("Register page is under construction!");
}

// Hämta dropdown-knappen och innehållet
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Lägg till en klick-händelse på knappen
dropdownBtn.addEventListener('click', () => {
    dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Stäng dropdown om användaren klickar utanför
window.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.style.display = 'none';
    }
});


