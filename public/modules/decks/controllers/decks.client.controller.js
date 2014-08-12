'use strict';

angular.module('cards').controller('CardsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Cards',
	function($scope, $stateParams, $location, Authentication, Cards) {
		$scope.authentication = Authentication;
	}
]);