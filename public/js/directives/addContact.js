app.directive('addContactDir', ['contactService', function(contactService) {

	return {
		restrict: 'AE',
		replace: true,
		templateUrl: 'templates/addContactDirective.html'
	};

}]);