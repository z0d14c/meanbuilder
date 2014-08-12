'use strict';

// Setting up route
angular.module('cards').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listCards', {
			url: '/cards',
			templateUrl: 'modules/cards/views/list-cards.client.view.html'
		}).
//		state('createArticle', {
//			url: '/articles/create',
//			templateUrl: 'modules/articles/views/create-article.client.view.html'
//		}).
		state('viewCards', {
			url: '/cards/:cardId',
			templateUrl: 'modules/cards/views/view-card.client.view.html'
		});
//		state('editArticle', {
//			url: '/articles/:articleId/edit',
//			templateUrl: 'modules/articles/views/edit-article.client.view.html'
//		});
	}
]);