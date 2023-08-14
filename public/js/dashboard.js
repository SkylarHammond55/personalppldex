const deleteButton = document.querySelector('#delete-button')

const deleteBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        // console.log(id)

        const response = await fetch(`/api/dashboard/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete profile.');
        }
    }
};

document
    .querySelector('.profiles-list')
    .addEventListener('click', deleteBtnHandler);


// document.addEventListener('DOMContentLoaded', function () {
//     // Simulated data for profiles (replace with actual data from API)
//     const profiles = [
//         { name: 'Profile 1' },
//         { name: 'Profile 2' },
//         // Add more profiles as needed
//     ];

//     // Compile Handlebars template
//     const profilesTemplate = Handlebars.compile(document.getElementById('profiles-template').innerHTML);

//     // Render profiles using Handlebars
//     const profilesHtml = profilesTemplate({ profiles });
//     document.querySelector('.profiles-list ul').innerHTML = profilesHtml;

//     // Handle home button click (refresh the page)
//     const homeButton = document.getElementById('home-button');
//     homeButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         location.reload();
//     });

//     // Handle logout button click (you should handle your actual logout logic here)
//     const logoutButton = document.getElementById('logout-button');
//     logoutButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         // Perform logout actions (e.g., clear session, redirect to login page)
//     });
//     // Handle "Create New Character" button click to navigate to the character creator page
//     const createCharacterButton = document.querySelector('.create-character-button a');
//     createCharacterButton.addEventListener('click', function (event) {
//         // Prevent default behavior to stop navigation
//         event.preventDefault();

//         // Redirect to the character creator page
//         window.location.href = 'character-creator.html'; // Replace with the actual path
//     });
// });