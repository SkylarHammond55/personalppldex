const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
// const characterRoutes = require('./characterRoutes')

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/characters', characterRoutes);

module.exports = router;
