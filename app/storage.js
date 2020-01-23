/**
 * Modul zum Speichern der Daten
 */
const db = require('diskdb');
const error = require('rest-api-errors');

exports.init = () => {
    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'ekmoeglichkeiten',
        'listenelement'
    ]);

    return db
}
