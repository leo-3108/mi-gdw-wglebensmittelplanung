/**
 * Modul zum Speichern der Daten
 */
const db = require('diskdb');

exports.init = () => {
    db.connect('./app/storage', ['wg', 'ekm', 'mb', 'event']);
    db.connect('./app/storage/einkaufsliste', ['ek', 'element']);

    this.reset(db);

    return db
}

exports.reset = (db) => {
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

    if (!db.ek.find().length){
        // Test
        this.insert({
            Titel: "String",
            Elemente: {
            },
        }, db.ek)
    }

}


exports.insert = (data, collection) => {
    // add ID
    data.ID = collection.count();

    collection.save(data);
}

exports.get = (id, storage = this.db) => {

}
