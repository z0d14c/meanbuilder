'use strict';

// Configuring the Articles module
angular.module('sets').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Sets', 'sets', 'dropdown', '/sets(/create)?');
		Menus.addSubMenuItem('topbar', 'sets', 'List Sets', 'sets');
//		Menus.addSubMenuItem('topbar', 'sets', 'New Article', 'articles/create');
	}
]);