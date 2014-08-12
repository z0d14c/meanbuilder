'use strict';

// Configuring the Articles module
angular.module('cardSets').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'CardSets', 'cardSets', 'dropdown', '/cardSets(/create)?');
		Menus.addSubMenuItem('topbar', 'cardSets', 'List CardSets', 'cardSets');
//		Menus.addSubMenuItem('topbar', 'cardSets', 'New Article', 'articles/create');
	}
]);