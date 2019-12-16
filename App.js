/**
 * WG-Lebensmittelplaner
 *
 * Entwicklung einer REST-Schnittstelle im Rahmen des Moduls
 * Grundlagen des Web (Medieninformatik Ba.) der TH Köln, Campus Gummersbach
 *
 * WS 2019/20
 *
 * @author Lining Bao, Finn Nils Gedrath, Leonard Pelzer
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
