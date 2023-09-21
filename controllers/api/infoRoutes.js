const express = require('express');
const router = express.Router();

router.get('/info', function(req, res, next) {
  res.render('info', { title: 'Information' });
});

module.exports = router;
