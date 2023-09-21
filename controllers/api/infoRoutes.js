const express = require('express');
const router = express.Router();
const { Stats } = require('../models');

router.get('/info', async function(req, res, next) {
  const statsData = await Stats.findAll({ where: { profile_id: 1 } });
  const stats = statsData.map(stat => stat.get({ plain: true }));
  res.render('info', { title: 'Information', stats });
});


module.exports = router;
