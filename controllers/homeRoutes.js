// Is this a Model, a View, or a Controller? 
// This file is a Controller. 
// What is it responsible for handling?
// It routes commands to the Model and View parts.

const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Add a comment describing the purpose of the 'get' route
// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'homepage' handlebars.js template. This is how we connect each route to the correct template.
    res.render('homepage');
});

// // Sign-up Route - Creates a new user (Works)
// router.post('/signup', async (req, res) => {
//     try {
//         const userData = await User.create(req.body);

//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.logged_in = true;

//             res.status(200).json(userData);
//         });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // Login-Route - Logins existing user (Works)
// router.post('/login', async (req, res) => {
//     try {
//         const userData = await User.findOne({
//             where: { username: req.body.username }
//         })

//         if (!userData) {
//             res
//             .status(400)
//             .json({ message: 'Incorrect username or password, please try again.'});
//             return;
//         }

//         const validPassword = await userData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res
//             .status(400)
//             .json({ message: 'Incorrect username or password, please try again.'});
//             return;
//         }

//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.logged_in = true;

//             res.json({ user: userData, message: "You are now logged in!"});
//         })
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// Gets User based on id and includes profile data for specific user
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{
                model: Profile,
                attributes: ['name', 'image'],
            }],
        });

        // res.status(200).json(userData)
        const user = userData.get({ plain: true });

        // Renders dashboard.handlebars
        res.render('dashboard', {
            ...user,
            logged_in: true
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
