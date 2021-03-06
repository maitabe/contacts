var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/nameDB');

var routes = require('./routes/index');
var users = require('./routes/users');*/

var app = express();

//populate the req.body with the data that we're sending from the client.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// public access from client-side
app.use(express.static('public'));
app.use(express.static('node_modules'));

/*app.use('/', routes);
app.use('/users', users);*/



//dummy data
var contacts = [
	{
		    id: 1,
		    name: "Leanne Graham",
		    email: "Sincere@april.biz"
		  },
		  {
		    id: 2,
		    name: "Ervin Howell",
		    email: "Shanna@melissa.tv"
		  },
		  {
		    id: 3,
		    name: "Clementine Bauch",
		    email: "Nathan@yesenia.net"
		  },
		  {
		    id: 4,
		    name: "Patricia Lebsack",
		    email: "Julianne.OConner@kory.org"
		  },
		  {
		    id: 5,
		    name: "Chelsey Dietrich",
		    email: "Lucio_Hettinger@annie.ca"
		  },
		  {
		    id: 6,
		    name: "Mrs. Dennis Schulist",
		    email: "Karley_Dach@jasper.info"
		  },
		  {
		    id: 7,
		    name: "Kurtis Weissnat",
		    email: "Telly.Hoeger@billy.biz"
		  },
		  {
		    id: 8,
		    name: "Nicholas Runolfsdottir V",
		    email: "Sherwood@rosamond.me"
		  },
		  {
		    id: 9,
		    name: "Glenna Reichert",
		    email: "Chaim_McDermott@dana.io"
		  },
		  {
		    id: 10,
		    name: "Clementina DuBuque",
		    email: "Rey.Padberg@karina.biz"
		  }
];

//api's or entry point to access the data

//"get" data
app.get('/contacts', function(req, res, next) {
	console.log('/contacts');
	res.json(contacts);

});

//add new data
app.post('/addContact', function(req, res, next) {
	console.log('/addContact');
	console.log(req.body);
	var addContact = req.body;
	addContact.id = contacts.length + 1;
	contacts.push(addContact);

	res.json(contacts);
	console.log(contacts);
});

// update a pre-existing item.
app.put('/update', function(req, res, next) {
	console.log(req.body.id);
	var replace;
	for (var i = 0; i < contacts.length; i++) {
		//find id of obj
		if(req.body.id.id === contacts[i].id) {
			contacts[i].name = req.body.id.name;
			contacts[i].email = req.body.id.email;
			replace = contacts[i];
		}
	}
	console.log(contacts);
	res.json(contacts);

});

//delete something
app.post('/remove', function(req, res, next) {
	console.log('/remove');
	console.log(req.body.id);
	var removeItem =  req.body.id;

	//find item to remove
	var toremove;
	for (var i = 0; i < contacts.length; i++) {
		if(removeItem === contacts[i].id) {
			toremove = i;
		}
	}
	contacts.splice(toremove, 1);
	res.json(contacts);

});

/*app.post('/contact/:id', function(req, res, next) {
	console.log('/contact/:id');
	console.log(req.params.id);
	res.send(req.params);
});*/

var port = process.env.PORT || '8000';

app.listen(port, function() {
	console.log('server is up and running on ' + port);
});











