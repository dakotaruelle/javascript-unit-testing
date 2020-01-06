var express = require('express');
var router = express.Router();
var myComponent = require('./components/myComponent');

/* GET home page. */
router.get('/', function(req, res, next) {
    var sum = myComponent.getSum(5, 6);
    res.render('index', { title: 'Express', sum: sum });
});

module.exports = router;
