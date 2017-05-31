app.controller('mainCtrl', ['$scope', 'apiService', function($scope, apiService) {


apiService.fetch().then(function() {
		$scope.contacts = apiService.contacts;
	});

	$scope.addContact = function() {
		apiService.addContact($scope.contact);

		$scope.contact = {};
	};

	$scope.remove = function(id) {
		apiService.remove(id);
	};



}]);





