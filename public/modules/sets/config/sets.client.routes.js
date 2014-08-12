'use strict';

// Setting up route
angular.module('set').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listSets', {
			url: '/sets',
			templateUrl: 'modules/sets/views/list-sets.client.view.html'
		}).
//		state('createArticle', {
//			url: '/articles/create',
//			templateUrl: 'modules/articles/views/create-article.client.view.html'
//		}).
		state('viewSet', {
			url: '/sets/:setId',
			templateUrl: 'modules/sets/views/view-set.client.view.html'
		});
//		state('editArticle', {
//			url: '/articles/:articleId/edit',
//			templateUrl: 'modules/articles/views/edit-article.client.view.html'
//		});
	}
]);