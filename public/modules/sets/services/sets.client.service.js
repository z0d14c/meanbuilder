'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('sets').factory('Sets', ['$resource',
	function($resource) {
		return $resource('sets/:setId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);