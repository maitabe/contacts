app.controller('contactCtrl', ['$scope', 'contactService', '$stateParams', function($scope, contactService, $stateParams) {


	//find contact by id
	console.log($stateParams.id);
	$scope.contact = contactService.findById($stateParams.id);

	$scope.buttonText = 'EDIT';
	$scope.editContact = true;

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

