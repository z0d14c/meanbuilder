'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	cards = require('../../app/controllers/cards');

module.exports = function(app) {
	// Article Routes
	app.route('/articles')
		.get(cards.list)
		.post(users.requiresLogin, articles.create);

	app.route('/articles/:articleId')
		.get(cards.read);

	// Finish by binding the article middleware
	app.param('cardId', cards.cardByID);
};