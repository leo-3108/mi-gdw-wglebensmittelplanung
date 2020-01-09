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
        res.contentType("application/json");
        res.send(JSON.stringify(db.getData("/wgs")))
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
