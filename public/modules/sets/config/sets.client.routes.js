'use strict';

// CardSetting up route
angular.module('cardSets').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listCardSets', {
			url: '/cardSets',
			templateUrl: 'modules/cardSets/views/list-cardSets.client.view.html'
		}).
//		state('createArticle', {
//			url: '/articles/create',
//			templateUrl: 'modules/articles/views/create-article.client.view.html'
//		}).
		state('viewCardSet', {
			url: '/cardSets/:cardSetId',
			templateUrl: 'modules/cardSets/views/view-cardSet.client.view.html'
		});
//		state('editArticle', {
//			url: '/articles/:articleId/edit',
//			templateUrl: 'modules/articles/views/edit-article.client.view.html'
//		});
	}
]);