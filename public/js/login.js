const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const userData = {
        name: formData.get('signup-name'),
        email: formData.get('signup-email'),
        password: formData.get('signup-password')
    };

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            // Refresh the current page to show the login form
            window.location.reload();
        } else {
            // Handle error case
        }
    } catch (error) {
        // Handle fetch error
    }
});


