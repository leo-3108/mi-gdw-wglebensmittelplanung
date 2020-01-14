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
const storage = require('./app/storage');

// Create Database
const db = storage.init();

// Create Endpoints
endpoints.create(app, db);


app.listen(3000, '0.0.0.0', function () {
    console.log('WG-Lebensmittelplaner listening on port 3000 on any IPv4-Adress!');
});
