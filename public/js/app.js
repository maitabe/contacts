var app = angular.module('contactApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	// var home = {
	// 	name: 'home',
	// 	url: '/home',
	// 	// templateUrl: 'templates/firstpage.html'
	// };

	var contacts = {
		name: 'contacts',
		url: '/contacts',
		templateUrl: 'templates/contacts.html'
	};

	var about = {
		name: 'about',
		url: '/about',
		templateUrl: 'templates/about.html'
	};

	// $stateProvider.state(home);
	$stateProvider.state(contacts);
	$stateProvider.state(about);

	$urlRouterProvider.otherwise('/contacts');

	/*$stateProvider
	.state('firstpage', {
		url: '/firstpage',
		templateUrl: 'firstpage.html'
	});
*/

});