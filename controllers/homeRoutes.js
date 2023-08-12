// Is this a Model, a View, or a Controller? 
// This file is a Controller. 
// What is it responsible for handling?
// It routes commands to the Model and View parts.

const router = require('express').Router();
// const { User } = require('../models');

// Add a comment describing the purpose of the 'get' route
// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'homepage' handlebars.js template. This is how we connect each route to the correct template.
    res.render('homepage');
});


// router.get('/', async (req, res) => {
//     try {
//         // Get all users, sorted by name
//         const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         order: [['name', 'ASC']],
//         });

//         // Serialize user data so templates can read it
//         const users = userData.map((project) => project.get({ plain: true }));

//         // Pass serialized data into Handlebars.js template
//         res.render('homepage', { users });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
