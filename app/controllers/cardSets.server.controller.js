'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	CardSet = mongoose.model('CardSet'),
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
				message = 'CardSet already exists';
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
 * Create a cardSet
 */
exports.create = function(req, res) {
	var cardSet = new CardSet(req.body);
	cardSet.user = req.user;

	cardSet.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(cardSet);
		}
	});
};

/**
 * Show the current cardSet
 */
exports.read = function(req, res) {
	res.jsonp(req.cardSet);
};

/**
 * Update a cardSet
 */
exports.update = function(req, res) {
	var cardSet = req.cardSet;

	cardSet = _.extend(cardSet, req.body);

	cardSet.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(cardSet);
		}
	});
};

/**
 * Delete an cardSet
 */
exports.delete = function(req, res) {
	var cardSet = req.cardSet;

	cardSet.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(cardSet);
		}
	});
};

/**
 * List of CardSets
 */
exports.list = function(req, res) {
	CardSet.find().sort('-created').populate('user', 'displayName').exec(function(err, cardSets) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(cardSets);
		}
	});
};

/**
 * CardSet middleware
 */
exports.setByID = function(req, res, next, id) {
	CardSet.findById(id).populate('user', 'displayName').exec(function(err, cardSet) {
		if (err) return next(err);
		if (!cardSet) return next(new Error('Failed to load cardSet ' + id));
		req.cardSet = cardSet;
		next();
	});
};

/**
 * CardSet authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.cardSet.user.id !== req.user.id) {
		return res.send(403, {
			message: 'User is not authorized'
		});
	}
	next();
};