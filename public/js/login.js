const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Handles login
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect login data from login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Check both inputs and fetches to the login post under api/users
    if (username && password) {
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Directs to dashboard
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// Form that handles signup
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collects input values
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Checks that values were given before running the POST method from api/users
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // Replace current page with dashboard
            window.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
