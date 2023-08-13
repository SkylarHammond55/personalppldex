// Is this a Model, a View, or a Controller? 
// This file is a Controller. 
// What is it responsible for handling?
// It routes commands to the Model and View parts.

const router = require('express').Router();
const { User } = require('../models');

// Add a comment describing the purpose of the 'get' route
// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'homepage' handlebars.js template. This is how we connect each route to the correct template.
    res.render('homepage');
});

router.post('/', async (req, res) => {
    // Sign-up Route - Creates a new user (Works)
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Login-Route - Logins existing user (Works)
router.post('/', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username }
        })

        if (!userData) {
            res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again.'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again.'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "You are now logged in!"});
        })
    } catch (err) {
        res.status(400).json(err);
    }
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
