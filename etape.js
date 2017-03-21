var http = require("http");
var ejs = require('ejs');
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/etape1', function (req, res) {
 		fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
		var obj = JSON.parse(data)
		  res.end(data);
		});
});

app.get('/etape2', function (req, res) {
 	fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
			obj = JSON.parse(data)
			console.log(obj);
		  	res.render('index.ejs', {provinces: obj});
		});
})

app.get('/etape3', function (req, res) {
 	fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
			obj = JSON.parse(data)
			console.log(obj);
		  	res.render('index.ejs', {provinces: obj});
		});
})

app.get('/etape4', function (req, res) {

})

app.get('/etape5', (req, res) => {
 var id = req.params.id
 console.log(id)
 db.collection('adresse')
 .findOneAndDelete({"_id": ObjectID(req.params.id)}, (err, resultat) => {

if (err) return console.log(err)
 res.redirect('/')  // redirige vers la route qui affiche la collection
 })
})

app.get('/etape6', function (req, res) {

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   console.log('Server running.');
});