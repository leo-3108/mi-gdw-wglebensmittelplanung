/**
 * Erstellt alle REST-Ressourcen
 */
const { checkSchema } = require('express-validator');

exports.create = (app, db) => {
    app.get('/', function (req, res) {
        res.send('Hello World! :D');
    });

    app.get('/wgs', function(req, res){
        res.contentType("application/json");
        res.send(JSON.stringify(db.getData("/wgs")))
    });

}
