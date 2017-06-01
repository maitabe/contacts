app.factory('contactService', ['$http', function($http) {

	var contactsList = {

		contacts: []
		// getAll: function(){
		// 	return $http.get('/contacts')
		// }
	};


	//get data from server
	contactsList.getAll = function(){
		return $http.get('/contacts').then(function(data) {
			angular.copy(data.data, contactsList.contacts);
		}, function(data) {
			//error
			console.log('error: ' + data);
		});
	};

	contactsList.addContact = function(newContact) {
		return $http.post('/addContact', newContact ).then(function(data) {
			console.log(data.data);
			angular.copy(data.data, contactsList.contacts);
		})
		.catch(function(error) {
			console.log(error.message);
		});
	};

	contactsList.remove = function(contactId) {
		console.log(contactId);
		return $http.post('/remove', {"id": contactId}).then(function(data) {
			angular.copy(data.data, contactsList.contacts);
		})
		.catch(function(error) {
			console.err(error);
		});
	};

	contactsList.findById = function(id) {
		var contactId = parseInt(id);
		for (var i = 0; i < contactsList.contacts.length; i++) {
			if(contactId === contactsList.contacts[i].id) {
				return contactsList.contacts[i];
			}
		}
	};

	contactsList.edit = function(id){
		console.log(id);
		return $http.put('/update', {id: id}).then(function(data) {
			console.log(data);
			angular.copy(data.data, contactsList.contacts);
		});
	};


	// $http.get(dfkjdfkjdf).then(function(data){
	// 	console.log(data)
	// 	return data
	// }).then(function(data){
	// 	console.log(data)
	// })


	return contactsList;

}]);





// promise represents an operation that hasn't completed yet,
//but is expected in the future. When the promise is
//"fulfilled", that code will run.