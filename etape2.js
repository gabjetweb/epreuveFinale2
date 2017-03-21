const fs = require("fs");
const express = require('express');
const bodyParser= require('body-parser')
//const MongoClient = require('mongodb').MongoClient
//const ObjectID = require('mongodb').ObjectID;
const app = express();
app.set('view engine', 'ejs'); // générateur de template 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))  // pour utiliser le dossier public
app.use(bodyParser.json())  // pour traiter les données JSON

var obj;

function affiche_objet(obj) {
	var ch='<table>'
for (propriete in  obj) {
	ch+="<tr>"+"<td>"+propriete+'</td>'+'<td>'+obj[propriete]+'</td>'+"</tr>"
}
ch += '</table>'
return ch;
}

app.get('/', function (req, res) {
 		fs.readFile('public/text/collection_provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
		obj = JSON.parse(data)
		  res.writeHead(200, {"Content-Type": "text/html"});
		  res.write(affiche_objet(obj));
		  res.end();
		});
})

var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

