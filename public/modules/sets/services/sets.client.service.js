'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('cardSets').factory('CardSets', ['$resource',
	function($resource) {
		return $resource('cardSets/:cardSetId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);