/**
 * Modul zum Speichern der Daten
 */
const db = require('diskdb')

exports.init = () => {
    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'ekmoeglichkeiten',
        'listenelement'
    ])

    return db
}
