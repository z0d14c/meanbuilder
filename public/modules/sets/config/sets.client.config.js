'use strict';

// Configuring the Articles module
angular.module('cardSets').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Deck Builder', 'cardSets', 'dropdown');
		Menus.addSubMenuItem('topbar', 'cardSets', 'Build a New Deck', 'cardSets');
//		Menus.addSubMenuItem('topbar', 'cardSets', 'New Article', 'articles/create');
	}
]);