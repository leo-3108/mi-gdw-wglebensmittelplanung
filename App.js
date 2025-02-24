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

const express = require('express')
const app = express()
const storage = require('./app/storage')
const endpoints = require('./app/endpoints')

// Support for JSON-Body in HTTP-Request
app.use(express.json())

// Logging every access
app.use(function(req, res, next){
    let currDate = new Date()

    console.log(
        `\x1b[0m\x1b[31m[${currDate.toISOString()}]`,
        '\x1b[0m',
        'Anfrage an die Route',
        req.originalUrl,
        '\x1b[2m'
    )

    next()

    console.log('\x1b[0m')
})

// Create Database
const db = storage.init()

// Create Endpoints
endpoints.create(app, db)


app.listen(3000, '0.0.0.0', function () {
    console.log('WG-Lebensmittelplaner listening on port 3000 on any IPv4-Adress!')
})
