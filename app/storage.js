/**
 * Modul zum Speichern der Daten
 */

const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

exports.init = () => {
    const db = new JsonDB(new Config("app/storage/db", true, true, '/'));

    db.push("/wgs/testwg",{
        Name: "String",
        Adresse: {
            Strasse: "String",
            Hausnummer: "String",
            PLZ: "String",
            Stadt: "String",
            Land: "String"
        },
        Telefonnummer: "Int"
    })

    return db;
}
