app.directive('contactsSummary', ['contactService', '$timeout', '$rootScope', function(contactService, $timeout, $rootScope) {
	return {
		restrict: 'AE',
		replace:true,
		templateUrl: 'templates/contactsSummaryDir.html',
		//isolated scope
		// scope:{
		// 	contactObject:'=',
		// },
		controller: function($scope, $element, $timeout, $rootScope) {

			$scope.remove = function(id) {

				var parent = $scope.$parent;
				contactService.remove(id);

				$scope.$parent.messageRemoved = 'contact ' + $scope.contact.name + ' had been removed';
				$timeout(function() {
					parent.messageRemoved = '';
			}, 3000);

			};


		}
	};
}]);