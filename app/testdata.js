const db = require('diskdb');

db.connect('./storage', [
    'wg',
    'bewohner',
    'ekmoeglichkeiten',
    'listenelement'
]);

const bewohnerModel = require('./models/bewohner.model.js');
const wgModel = require('./models/wg.model.js');
const listenelementModel = require('./models/listenelement.model.js');
const ekmoeglichkeitenModel = require('./models/ekmoeglichkeiten.model.js');


db.wg.remove()
db.listenelement.remove()
db.ekmoeglichkeiten.remove()
db.bewohner.remove()

db.connect('./storage', [
    'wg',
    'bewohner',
    'ekmoeglichkeiten',
    'listenelement'
]);

db.wg.save({
    "Name": "Test-WG0",
    "Adresse": {
        "Strasse": "teststraße",
        "Hausnummer": "1",
        "PLZ": "12345",
        "Stadt": "Musterstadt",
        "Land": "Musterland"
    },
    "Telefonnummer": "123456789"
}, {
    "Name": "Test-WG1",
    "Adresse": {
        "Strasse": "teststraße",
        "Hausnummer": "1",
        "PLZ": "12345",
        "Stadt": "Musterstadt",
        "Land": "Musterland"
    },
    "Telefonnummer": "123456789"
}, {
    "Name": "Test-WG2",
    "Adresse": {
        "Strasse": "teststraße",
        "Hausnummer": "1",
        "PLZ": "12345",
        "Stadt": "Musterstadt",
        "Land": "Musterland"
    },
    "Telefonnummer": "123456789"
}, {
    "Name": "Test-WG3",
    "Adresse": {
        "Strasse": "teststraße",
        "Hausnummer": "1",
        "PLZ": "12345",
        "Stadt": "Musterstadt",
        "Land": "Musterland"
    },
    "Telefonnummer": "123456789"
})
