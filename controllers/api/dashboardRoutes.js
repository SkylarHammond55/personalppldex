const router = require('express').Router();
const Profile = require('../../models/Profile');
const withAuth = require('../../utils/auth');

// Gets User based on id and includes profile data for specific user
// router.get('/', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password']},
//             include: [{
//                 model: Profile,
//                 attributes: ['name', 'image'],
//             }],
//         });

//         const user = userData.get({ plain: true });

//         // Renders dashboard.handlebars
//         res.render('dashboard', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// TEST: Get route to get single profile data (working in insomnia)
// router.get('/:id', async (req, res) => {
//     try {
//         const profileData = await Profile.findByPk(req.params.id);

//         if (!profileData) {
//             res.status(404).json({ message: 'No profile found with this id!'});
//             return;
//         }

//         res.status(200).json(profileData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Delete route to delete single profile (working in Insomnia)
router.delete('/:id', async (req, res) => {
    try {
        const profileData = await Profile.destroy({
            where: {
                id: req.params.id
            }
        });

        if(!profileData) {
            res.status(404).json({
                message: 'No profile found with this id!'
            });
            return;
        }

        res.status(200).json(profileData);
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete route for a specific profile
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const profileData = await Profile.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
        });

        if (!profileData) {
        res.status(404).json({ message: 'No profile found with this id!' });
        return;
        }

        res.status(200).json(profileData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
