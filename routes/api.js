var express = require('express');
var router = express.Router();


router.get('/create_db', function(req, res, next) {
});

router.get('*', function(req, res, next) {
  res.send('Not Found');
});

module.exports = router;
