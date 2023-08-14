const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const createRoutes = require('./createRoutes')

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/create', createRoutes);

module.exports = router;
