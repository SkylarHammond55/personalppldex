const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');
// const multer = require('multer');
const path = require('path')

router.post('/', withAuth, async (req, res) => {
    try {
        const newProfile = await Profile.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProfile);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', upload.single('image'), withAuth, (req, res) => {
    res.send('Image Uploaded');
});
