/**
 * Erstellt alle REST-Ressourcen
 */
const { checkSchema } = require('express-validator');

exports.create = (app, db) => {
    app.get('/', function (req, res) {
        res.send('Hello World! :D');
    });

    /**
     * WG
     */

    app.get('/wg', function(req, res){
        res.json(db.wgs.find());
    });

    /**
     * Einkaufsliste
     */


    /**
     * Event
     */


    /**
     * Mitbewohner
     */


    /**
     * Einkaufsmöglichkeit
     */

}
