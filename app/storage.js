/**
 * Modul zum Speichern der Daten
 */
const db = require('diskdb');

exports.init = () => {
    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'ekmoeglichkeiten',
        'listenelement'
    ]);

    this.reset(db);

    return db
}

exports.reset = (db) => {
    db.
    if (!db.wg.find().length){
        // Test
        this.insert({
            Name: "String",
            Adresse: {
                Strasse: "String",
                Hausnummer: "String",
                PLZ: "String",
                Stadt: "String",
                Land: "String"
            },
            Telefonnummer: "Int"
        }, db.wg)
    }
}

/**
 * CRUD-Befehle
 * @throws HTTP-Errors
 */

exports.create = (collection, data) => {
    // add ID
    data.ID = collection.count();

    collection.save(data);
}

exports.readone = (collection, id) => {

}

exports.readall = (collection) => {

}

exports.update = (collection, id, data) => {

}

exports.delete = (collection, id) => {

}
