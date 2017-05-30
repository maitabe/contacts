app.factory('contactService', ['$http', function($http) {

	var contactsList = {

		contacts: []
		// getAll: function(){
		// 	return $http.get('/contacts')
		// }
	};


	//get data from server
	contactsList.getAll = function(){
		return $http.get('/contacts')
	}

	contactsList.addContact = function(newContact) {
		return $http.post('/addContact', newContact ).then(function(data) {
			contactsList.contacts.push(data.data);
		})
	}

	// $http.get(dfkjdfkjdf).then(function(data){
	// 	console.log(data)
	// 	return data
	// }).then(function(data){
	// 	console.log(data)
	// })


	return contactsList;

}]);