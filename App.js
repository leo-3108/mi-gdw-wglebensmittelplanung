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

const express = require('express');
const app = express();
const endpoints = require('./app/endpoints');

// Create Endpoints
endpoints.create(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
