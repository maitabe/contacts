app.factory('apiService', [ '$http', function($http) {

	var apiurl = "https://jsonplaceholder.typicode.com/users";


	var contactsList = {
		contacts: []
	};

	//get data from api

	contactsList.fetch = function() {
		return $http.get(apiurl).then(function(data) {
			console.log(data);
			angular.copy(data.data, contactsList.contacts);
		});
	};

	contactsList.addContact = function() {

	};

	return contactsList;


}]);