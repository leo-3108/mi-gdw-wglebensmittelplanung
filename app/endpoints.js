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

<<<<<<< HEAD

    /**
     * Einkaufsmöglichkeiten
=======
    /**
     * Einkaufsmöglichkeit
>>>>>>> 5103af4ad1925f19bab6133af59e61e12eb86485
     */
}
