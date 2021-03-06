app.controller('contactCtrl', ['$scope', '$rootScope', 'contactService', '$stateParams', function($scope, $rootScope, contactService, $stateParams) {


	//find contact by id
	console.log($stateParams.id);
	$scope.contact = contactService.findById($stateParams.id);

	console.log($scope.contact);


	$scope.buttonText = 'EDIT';
	$scope.editContact = true;

	console.log($scope.contact);
	$scope.edit = function(contact) {

		if($scope.buttonText === 'EDIT') {
			$scope.buttonText = 'SAVE';
			$scope.editContact = false;
		}else{
			contactService.edit(contact);

			$scope.buttonText = 'EDIT';
			$scope.editContact = true;
		}

	};


}]);

