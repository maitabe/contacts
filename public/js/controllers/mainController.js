app.controller('mainCtrl', ['$scope', 'contactService','$rootScope', function($scope, contactService, $rootScope) {


$scope.contacts = [];

	contactService.getAll().then(function() {
		$scope.contacts = contactService.contacts;
	});



	$scope.addContact = function() {
		contactService.addContact($scope.contact);

		$scope.contact = {};
	};

	$scope.remove = function(id) {
		contactService.remove(id);
	};



}]);





