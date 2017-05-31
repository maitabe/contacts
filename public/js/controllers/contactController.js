app.controller('contactCtrl', ['$scope', 'contactService', '$stateParams', function($scope, contactService, $stateParams) {

	//find contact by id
	console.log($stateParams.id);
	$scope.contact = contactService.findById($stateParams.id);



}]);

