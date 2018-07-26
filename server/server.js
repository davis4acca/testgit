const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();
const port = 3000;

function callback() {
	console.log('yo');
}

function PromiseFactory(cb) {
	return new Promise(function(resolve, reject) {
		resolve(cb);
	});
}
app.listen(
	port,
	PromiseFactory(callback)
		.then(function() {
			console.log('you are running on PORT ' + port);
		})
		.catch((err) => {
			console.log(err);
		})
);
