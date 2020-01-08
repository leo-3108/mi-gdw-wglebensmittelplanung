/**
 * Erstellt alle REST-Ressourcen
 */

exports.create = (app) => {
    app.get('/', function (req, res) {
        res.send('Hello World! :D');
    });

    app.get('/wg', function(req, res){
        res.contentType("application/json");
        res.send(JSON.stringify(db.getData("/wgs/testwg")))
    });

}
