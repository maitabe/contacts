app.factory('apiService', [ '$http', function($http) {

	var apiurl = "https://jsonplaceholder.typicode.com/users";


	var contactsList = {
		contacts: []
	};

	console.log(contactsList.contacts);

	//get data from api

	contactsList.fetch = function() {
		return $http.get(apiurl).then(function(data) {
			console.log(data);
			angular.copy(data.data, contactsList.contacts);
		});
	};

	// add new contact
	contactsList.addContact = function(newContact) {
		return $http.post(apiurl, newContact).then(function(data) {
			console.log(data);
			newContact.id = contactsList.contacts.length + 1;
			console.log(newContact.id);
			contactsList.contacts.push(newContact);
		})
		.catch(function(error) {
			console.log(error);
		});
	};

	//remove contact
	contactsList.remove = function(idContact) {
		var grabObj;
			for (var i = 0; i < contactsList.contacts.length; i++) {
				if(idContact === contactsList.contacts[i].id) {
					grabObj = i;
				}
			}

			contactsList.contacts.splice(grabObj, 1);
			var toDelete = "/" + (grabObj);


		return $http.post(apiurl + toDelete).then(function(data) {
			console.log(data);
		})
		.catch(function(error) {
			console.log(error);
		});
	};

	return contactsList;

}]);