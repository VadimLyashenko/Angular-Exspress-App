var express = require('express');
var email = require("emailjs/email");
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order.js');

var server 	= email.server.connect({
	user:    "terateratera23@gmail.com", 
	password:"cvbn23as", 
	host:    "smtp.gmail.com",
	ssl:     true
});

/* GET ALL Orders */
router.get('/', function(req, res, next) {
  Order.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
	});
});

/* GET SINGLE Order BY ID */
router.get('/:id', function(req, res, next) {
  Order.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Order */
router.post('/', function(req, res, next) {
  Order.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
	});

	var a = [];
	req.body.cart_positions.forEach(element => {
		a.push(element.title + ': ' + element.count + ' шт.');
	});

	var message ={
		text:	"Новый заказ!\n " + 
		" Имя:" + req.body.title + 
		"\n Телефон:" + req.body.tel + 
		"\n Адрес:" + req.body.address +
		"\n Общая стоимость:" + req.body.allcost +
		"\n Заказ:\n" + a.join('\n'), 
		from:    "Система заказа", 
		to:      "terateratera23@gmail.com",
		subject: "Новый заказ!",
		attachment:
		[
			// {data: "<html> <p>Имя:</p> `req.body.title` </html>"}
		]
	}

	server.send( message, function(err, message) { console.log(err || message); });
});

/* UPDATE Order */
router.put('/:id', function(req, res, next) {
  Order.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Order */
router.delete('/:id', function(req, res, next) {
  Order.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;