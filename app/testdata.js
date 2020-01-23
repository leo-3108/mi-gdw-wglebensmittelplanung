const db = require('diskdb')

// Datatypes
const bewohnerModel = require('./models/bewohner.model.js')
const wgModel = require('./models/wg.model.js')
const listenelementModel = require('./models/listenelement.model.js')

const reset = () => {

    // clear database
    resetclear()
    console.log('[Log] Successfully resetted DB')

    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'listenelement'
    ])


    wgModel.create(db.wg, {
        "Name": "Test-WG0",
        "Adresse": {
            "Strasse": "teststraße",
            "Hausnummer": "1",
            "PLZ": "12345",
            "Stadt": "Musterstadt",
            "Land": "Musterland"
        },
        "Telefonnummer": "123456789"
    })
    wgModel.create(db.wg, {
        "Name": "Test-WG1",
        "Adresse": {
            "Strasse": "teststraße",
            "Hausnummer": "1",
            "PLZ": "12345",
            "Stadt": "Musterstadt",
            "Land": "Musterland"
        },
        "Telefonnummer": "123456789"
    })
    wgModel.create(db.wg, {
        "Name": "Test-WG2",
        "Adresse": {
            "Strasse": "teststraße",
            "Hausnummer": "1",
            "PLZ": "12345",
            "Stadt": "Musterstadt",
            "Land": "Musterland"
        },
        "Telefonnummer": "123456789",
    })

    bewohnerModel.create(db.bewohner, {
        "Name": "Susi",
        "Vorname": "Sonnenschein",
        "Geburtsdatum": "12.12.1997",
        "Rolle": "String",
        "Telefonnummer": "234567876543456"
    }, 0)
    bewohnerModel.create(db.bewohner, {
        "Name": "Hanna",
        "Vorname": "Heiter",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false"
    }, 0)
    bewohnerModel.create(db.bewohner, {
        "Name": "Max",
        "Vorname": "Mustermann",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false"
    }, 1)
    bewohnerModel.create(db.bewohner, {
        "Name": "Fridolin",
        "Vorname": "Fröhlich",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false"
    }, 1)
    bewohnerModel.create(db.bewohner, {
        "Name": "Susi",
        "Vorname": "Sonnenschein",
        "Geburtsdatum": "12.12.1997",
        "Rolle": "String",
        "Telefonnummer": "234567876543456"
    }, 2)
    bewohnerModel.create(db.bewohner, {
        "Name": "Hanna",
        "Vorname": "Heiter",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false",
    }, 2)

    listenelementModel.create(db.listenelement, {
        "Produktname": "Tomaten",
        "Geschäft": "Tomatengeschaeft"
    }, 0)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Bananen",
        "Geschäft": "Bananengeschaeft"
    }, 0)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Zitronen",
        "Geschäft": "Zitronengeschaeft"
    }, 0)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Gurken",
        "Geschäft": "Gurkengeschaeft"
    }, 1)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Gurken",
        "Geschäft": "Gurkengeschaeft"
    }, 1)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Zitronen",
        "Geschäft": "Zitronengeschaeft"
    }, 1)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Tomaten",
        "Geschäft": "Tomatengeschaeft"
    }, 1)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Bananen",
        "Geschäft": "Bananengeschaeft"
    }, 1)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Tomaten",
        "Geschäft": "Tomatengeschaeft"
    }, 2)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Bananen",
        "Geschäft": "Bananengeschaeft"
    }, 2)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Gurken",
        "Geschäft": "Gurkengeschaeft"
    }, 2)
    listenelementModel.create(db.listenelement, {
        "Produktname": "Zitronen",
        "Geschäft": "Zitronengeschaeft"
    }, 2)

    console.log('[Log] Successfully inserted Test Data')
}

const resetclear = () => {
    // connect to database
    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'listenelement'
    ])

    // remove all data
    db.wg.remove()
    db.listenelement.remove()
    db.bewohner.remove()
}


reset()
