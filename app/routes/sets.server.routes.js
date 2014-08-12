'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	sets = require('../../app/controllers/sets');

module.exports = function(app) {
	// Card Routes
	app.route('/sets')
		.get(cards.list);

	app.route('/cards/:cardId')
		.get(cards.read);

	// Finish by binding the Card middleware
	app.param('SetId', cards.setById);
};