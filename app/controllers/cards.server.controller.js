'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Card = mongoose.model('Card'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Card already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a card
 */
exports.create = function(req, res) {
	var card = new Card(req.body);
	card.user = req.user;

	card.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(card);
		}
	});
};

/**
 * Show the current card
 */
exports.read = function(req, res) {
	res.jsonp(req.card);
};

/**
 * Update a card
 */
exports.update = function(req, res) {
	var card = req.card;

	card = _.extend(card, req.body);

	card.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(card);
		}
	});
};

/**
 * Delete an card
 */
exports.delete = function(req, res) {
	var card = req.card;

	card.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(card);
		}
	});
};

/**
 * List of Cards
 */
exports.list = function(req, res) {
	Card.find().sort('-created').populate('user', 'displayName').exec(function(err, cards) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(cards);
		}
	});
};

/**
 * Card middleware
 */
exports.cardByID = function(req, res, next, id) {
	Card.findById(id).populate('user', 'displayName').exec(function(err, card) {
		if (err) return next(err);
		if (!card) return next(new Error('Failed to load card ' + id));
		req.card = card;
		next();
	});
};

/**
 * Card authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.card.user.id !== req.user.id) {
		return res.send(403, {
			message: 'User is not authorized'
		});
	}
	next();
};