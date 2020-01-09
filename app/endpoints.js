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
        res.json(db.wg.find());
    });

    app.get('/wg/:wg_id', function(req, res){
        res.json(db.wg.find(
            {ID: req.params.wg_id}
        ));
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
