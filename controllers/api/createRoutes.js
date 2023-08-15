const router = require('express').Router();
const { Profile, Stats, Skill } = require('../../models');
const withAuth = require('../../utils/auth');
// const multer = require('multer');
// const path = require('path')

// Create character (working in insomnia for profile only)
router.post('/', withAuth, async (req, res) => {
    try {
        const newProfile = await Profile.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        // const newStats = await Stats.create(req.body);

        // const newSkill = await Skill.create(req.body);

        // const newCharacter = {
        //     ...newProfile,
        //     ...newSkill,
        //     ...newStats
        // };

        res.status(200).json(newProfile);
    } catch (err) {
        res.status(400).json(err);
    }
});

// // Renders upload option
// router.get('/upload', (req, res) => {
//     res.render('upload');
// });

// // Upload images
// router.post('/upload', upload.single('image'), withAuth, (req, res) => {
//     res.send('Image Uploaded');
// });


module.exports = router;