var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/index');
});

router.get('/index', function(req,res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burger/create', function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
});

router.put('burger/devour/:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('index');
    });
});

module.exports = router;