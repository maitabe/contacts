app.controller('contactCtrl', ['$scope', '$rootScope', 'contactService', '$stateParams', function($scope, $rootScope, contactService, $stateParams) {


	//find contact by id
	console.log($stateParams.id);
	$scope.contact = contactService.findById($stateParams.id);


	//example of watch
	/*$scope.$watch('contact', function(newValue, oldValue) {
		console.log('new '+ newValue);
		console.log('old' + oldValue);

		$scope.test = {
				newVal: 'this is the new' + newVal,
				oldVal: 'this is the old' + oldVal
			};
	}, true);*/



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

