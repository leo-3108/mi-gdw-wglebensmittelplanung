const db = require('diskdb')

const reset = () => {

    // clear database
    resetclear()
    console.log('[Log] Successfully resetted DB')

    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'listenelement'
    ])

    db.wg.save({
        "Name": "Test-WG0",
        "Adresse": {
            "Strasse": "teststraße",
            "Hausnummer": "1",
            "PLZ": "12345",
            "Stadt": "Musterstadt",
            "Land": "Musterland"
        },
        "Telefonnummer": "123456789",
        "id": 0
    })
    db.wg.save({
        "Name": "Test-WG1",
        "Adresse": {
            "Strasse": "teststraße",
            "Hausnummer": "1",
            "PLZ": "12345",
            "Stadt": "Musterstadt",
            "Land": "Musterland"
        },
        "Telefonnummer": "123456789",
        "id": 1
    })
    db.wg.save({
        "Name": "Test-WG2",
        "Adresse": {
            "Strasse": "teststraße",
            "Hausnummer": "1",
            "PLZ": "12345",
            "Stadt": "Musterstadt",
            "Land": "Musterland"
        },
        "Telefonnummer": "123456789",
        "id": 2
    })

    db.bewohner.save({
        "Name": "Susi",
        "Vorname": "Sonnenschein",
        "Geburtsdatum": "12.12.1997",
        "Rolle": "String",
        "Telefonnummer": "234567876543456",
        "wg_id": 0,
        "id": 0
    })
    db.bewohner.save({
        "Name": "Hanna",
        "Vorname": "Heiter",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false",
        "wg_id": 0,
        "id": 1
    })
    db.bewohner.save({
        "Name": "Max",
        "Vorname": "Mustermann",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false",
        "wg_id": 1,
        "id": 0
    })
    db.bewohner.save({
        "Name": "Fridolin",
        "Vorname": "Fröhlich",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false",
        "wg_id": 1,
        "id": 1

    })
    db.bewohner.save({
        "Name": "Susi",
        "Vorname": "Sonnenschein",
        "Geburtsdatum": "12.12.1997",
        "Rolle": "String",
        "Telefonnummer": "234567876543456",
        "wg_id": 2,
        "id": 0
    })
    db.bewohner.save({
        "Name": "Hanna",
        "Vorname": "Heiter",
        "Geburtsdatum": "12.12.1997",
        "Telefonnummer": "234567876543456",
        "Auto": "false",
        "wg_id": 2,
        "id": 1
    })

    db.listenelement.save({
        "Produktname": "Tomaten",
        "Geschäft": "Tomatengeschaeft",
        "id": 0,
        "wg_id": 0
    })
    db.listenelement.save({
        "Produktname": "Bananen",
        "Geschäft": "Bananengeschaeft",
        "id": 1,
        "wg_id": 0
    })
    db.listenelement.save({
        "Produktname": "Zitronen",
        "Geschäft": "Zitronengeschaeft",
        "id": 2,
        "wg_id": 0
    })
    db.listenelement.save({
        "Produktname": "Gurken",
        "Geschäft": "Gurkengeschaeft",
        "id": 3,
        "wg_id": 0
    })
    db.listenelement.save({
        "Produktname": "Gurken",
        "Geschäft": "Gurkengeschaeft",
        "id": 0,
        "wg_id": 1
    })
    db.listenelement.save({
        "Produktname": "Zitronen",
        "Geschäft": "Zitronengeschaeft",
        "id": 1,
        "wg_id": 1
    })
    db.listenelement.save({
        "Produktname": "Tomaten",
        "Geschäft": "Tomatengeschaeft",
        "id": 2,
        "wg_id": 1
    })
    db.listenelement.save({
        "Produktname": "Bananen",
        "Geschäft": "Bananengeschaeft",
        "id": 3,
        "wg_id": 1
    })
    db.listenelement.save({
        "Produktname": "Tomaten",
        "Geschäft": "Tomatengeschaeft",
        "id": 0,
        "wg_id": 2
    })
    db.listenelement.save({
        "Produktname": "Bananen",
        "Geschäft": "Bananengeschaeft",
        "id": 1,
        "wg_id": 2
    })
    db.listenelement.save({
        "Produktname": "Gurken",
        "Geschäft": "Gurkengeschaeft",
        "id": 2,
        "wg_id": 2
    })
    db.listenelement.save({
        "Produktname": "Zitronen",
        "Geschäft": "Zitronengeschaeft",
        "id": 3,
        "wg_id": 2
    })

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
