'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('cards').factory('Cards', ['$resource',
	function($resource) {
		return $resource('cards/:cardId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);