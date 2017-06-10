app.controller('listContactsCtrl', ['$scope', 'contactService','$timeout', '$rootScope', function($scope, contactService, $timeout, $rootScope) {

/*
$scope.contacts = [];
console.log($scope.contacts);*/
	var currentLength = contactService.contacts.length;

	$scope.$parent.calmMsg = 'i am passing to the brother';

	contactService.getAll().then(function() {
		$scope.contacts = contactService.contacts;

		console.log($scope.contacts.length);
		console.log(contactService.contacts.length);
	});



	$scope.addContact = function() {
		contactService.addContact($scope.contact);

		//access the parent controller and display a message when contact had been added
		$scope.$parent.messageadd = 'contact ' + $scope.contact.name + ' had been added';

		$timeout(function() {


			$scope.$parent.messageadd ='';

		}, 3000);

		$scope.contact = {};

	};

	$scope.remove = function(id) {
		contactService.remove(id);
	};

	$scope.$watch('contacts', function(newVal, oldVal) {

			console.log('watch newVal', newVal);
			console.log('watch oldVal', oldVal);
	}, true);

	//true check the value of the reference

}]);





