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

app.get('/wg', function(req, res){
    var json = {
        name: "Test-WG",
        adresse: {
            Strasse: "Im Merheimer Felde",
            Hausnummer: "14a",
            PLZ: "51067",
            Stadt: "Köln",
            Land: "Deutschland"
        },
        Telefonnummer: 1230940218
    };

    res.contentType("application/json");
    res.send(JSON.stringify(json))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
