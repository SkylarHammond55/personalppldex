const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');

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
