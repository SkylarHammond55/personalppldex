const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const createRoutes = require('./createRoutes')
const infoRoutes = require('./infoRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/create', createRoutes);
router.use('/info', infoRoutes);

module.exports = router;
