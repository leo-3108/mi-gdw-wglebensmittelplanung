/**
 * Modul zum Speichern der Daten
 */
const db = require('diskdb');

exports.init = () => {
    db.connect('./app/storage', ['wgs']);

    this.reset(db);

    return db
}

exports.reset = (db) => {
    if (!db.wgs.find().length){
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
        }, db.wgs)
    }
}


exports.insert = (data, collection) => {
    // add ID
    data.ID = collection.count();

    collection.save(data);
}

exports.get = (id, storage = this.db) => {

}
