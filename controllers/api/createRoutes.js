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
        
        let newStats;
        if (req.body.stats.length) {
            newStats = await Stats.bulkCreate(req.body.stats.map(stat => ({...stat, profile_id: newProfile.id})));
        }

        let newSkill;
        if (req.body.skills.length) {
            newSkill = await Skill.bulkCreate(req.body.skills.map(skill => ({...skill, profile_id: newProfile.id})));
        }


        const newCharacter = {
            ...newProfile,
            ...newSkill,
            ...newStats
        };

        res.status(200).json(newCharacter);
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