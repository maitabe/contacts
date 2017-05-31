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
		templateUrl: 'templates/contacts.html',
		controller: 'mainCtrl',
		resolve: {
			contacts:function(contactService){
				return contactService.getAll();
			}
		}
	};

	var contact = {
		name: 'contact',
		url: '/contacts/{id}',
		templateUrl: 'templates/contact.html',
		controller: 'contactCtrl',
		/*resolve: {
			contact: function(contactService, $transition$) {
				return contactService.findById($transition$.params().id);
			}
		}*/
	};

	var about = {
		name: 'about',
		url: '/about',
		templateUrl: 'templates/about.html'
	};


	$stateProvider.state(contacts);
	$stateProvider.state(about);
	$stateProvider.state(contact);

	$urlRouterProvider.otherwise('/contacts');

	/*$stateProvider
	.state('firstpage', {
		url: '/firstpage',
		templateUrl: 'firstpage.html'
	});
*/

});

//When a user switches back and forth between states of a single page web app,
//the app often needs to fetch application data from a server API,
//such as a REST endpoint.

//A state can specify the data it requires by using a resolve: block.
//When the user tries to activate a state which has a resolve: block,
//UI-Router will fetch the required data before activating the state.