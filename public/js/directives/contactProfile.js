app.directive('contactProfileDir', ['contactService', function(contactService) {


	return {
		restrict: 'AEC',
		replace: true,
		templateUrl: 'templates/contactProfileDirective.html',
		scope: {
			contactObject: '='
		},
		link: function(scope, elem, attrs) {
			scope.buttonText = 'EDIT';
			scope.editContact = true;

			console.log(scope.contact);
			var scopeContact = scope.contact;
			elem.bind('click', function(scopeContact) {
				if(scope.buttonText === 'EDIT') {
					scope.buttonText = 'SAVE';
					scope.editContact = false;
				}else{
					console.log(scopeContact);
					contactService.edit(scopeContact);

					scope.buttonText = 'EDIT';
					scope.editContact = true;
				}

			});

		}
	};



}]);