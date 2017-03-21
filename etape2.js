var http = require("http");
var ejs = require('ejs');
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
 		fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
		var obj = JSON.parse(data)
		  res.writeHead(200, {"Content-Type": "text/html"});
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

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   console.log('Server running.');
});