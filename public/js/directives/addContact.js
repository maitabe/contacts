app.directive('addContactDir', ['apiService', function(apiService) {

	return {
		restrict: 'AE',
		replace: true,
		templateUrl: 'templates/addContact.html'
	};

}]);