'use strict';

angular.module('cards').controller('CardsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Cards',
	function($scope, $stateParams, $location, Authentication, Cards) {
		$scope.authentication = Authentication;



//
//		$scope.create = function() {
//			var article = new Articles({
//				title: this.title,
//				content: this.content
//			});
//			article.$save(function(response) {
//				$location.path('articles/' + response._id);
//			}, function(errorResponse) {
//				$scope.error = errorResponse.data.message;
//			});
//
//			this.title = '';
//			this.content = '';
//		};
//
//		$scope.remove = function(article) {
//			if (article) {
//				article.$remove();
//
//				for (var i in $scope.articles) {
//					if ($scope.articles[i] === article) {
//						$scope.articles.splice(i, 1);
//					}
//				}
//			} else {
//				$scope.article.$remove(function() {
//					$location.path('articles');
//				});
//			}
//		};
//
//		$scope.update = function() {
//			var article = $scope.article;
//
//			article.$update(function() {
//				$location.path('articles/' + article._id);
//			}, function(errorResponse) {
//				$scope.error = errorResponse.data.message;
//			});
//		};
//
		$scope.find = function() {
			$scope.cards = Cards.query();
		};

//		$scope.findOne = function() {
//			$scope.article = Articles.get({
//				articleId: $stateParams.articleId
//			});
//		};
	}
]);