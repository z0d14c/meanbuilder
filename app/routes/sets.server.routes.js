'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	cardSets = require('../../app/controllers/cardSets');

module.exports = function(app) {
	// Card Routes
	app.route('/cardSets')
		.get(cardSets.list);

	app.route('/cardSets/:cardSetId')
		.get(cardSets.read);

	// Finish by binding the Card middleware
	app.param('cardSetId', cardSets.setByID);
};