'use strict';

// Setting up route
angular.module('cards').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listCards', {
			url: '/sets',
			templateUrl: 'modules/cards/views/list-sets.client.view.html'
		}).
//		state('createArticle', {
//			url: '/articles/create',
//			templateUrl: 'modules/articles/views/create-article.client.view.html'
//		}).
		state('viewCard', {
			url: '/cards/:cardId',
			templateUrl: 'modules/cards/views/view-card.client.view.html'
		});
//		state('editArticle', {
//			url: '/articles/:articleId/edit',
//			templateUrl: 'modules/articles/views/edit-article.client.view.html'
//		});
	}
]);