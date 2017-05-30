app.controller('mainCtrl', ['$scope', 'contactService', function($scope, contactService) {

	contactService.getAll().then(function(data) {

		$scope.contacts = data.data;
	})

	$scope.addContact = function() {

		contactService.addContact($scope.contact)

		$scope.contact = '';
	}



}]);