var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.createReadStream(path.join(__dirname, '../public/test.html')).pipe(res);
});

module.exports = router;
