/**
 * Modul zum Speichern der Daten
 */

const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

exports.db = new JsonDB(new Config("app/storage/db", true, true, '/'));

exports.init = () => {
    this.reset()
}

exports.reset = (storage = this.db) => {
    storage.push("/wgs/1",{
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
}


exports.insert = (req, res, storage = this.db) => {

}

exports.get = (req, res, storage = this.db) => {

}

exports.list = (req, res, storage = this.db) => {

}
