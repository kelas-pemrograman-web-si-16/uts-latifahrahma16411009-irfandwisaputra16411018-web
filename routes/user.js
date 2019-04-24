var express = require('express');

var router = express.Router();

router.get('/index', function(req, res, next) {
    res.render('index', {nama: 'Project1'})
})
router.get('/about', function(req, res, next) {
    res.render('about', {nama: 'Project1'})
})
router.get('/cart', function(req, res, next) {
    res.render('cart', {nama: 'Project1'})
})
router.get('/checkout', function(req, res, next) {
    res.render('checkout', {nama: 'Project1'})
})
router.get('/contact', function(req, res, next) {
    res.render('contact', {nama: 'Project1'})
})
router.get('/shop', function(req, res, next) {
    res.render('shop', {nama: 'Project1'})
})
router.get('/shop-single', function(req, res, next) {
    res.render('shop-single', {nama: 'Project1'})
})
router.get('/thankyou', function(req, res, next) {
    res.render('thankyou', {nama: 'Project1'})
})

module.exports = router;