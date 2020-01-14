/**
 * Erstellt alle REST-Ressourcen
 */
const { checkSchema } = require('express-validator');

exports.create = (app, storage, db) => {
    app.get('/', function (req, res) {
        res.send('Hello World! :D');
    });

    /**
     * WG
     */

    app.get('/wg', function(req, res){
        res.json(storage.readall(db.wg));
    });

    app.post('/wg', function(req, res){
        //...
        res.send('POST request to homepage')
    });

    app.get('/wg/:wg_id', function(req, res){
        res.json(storage.readone(db.wg, req.params.wg_id));
    });

    app.put('/wg', function(req, res){
        //...
        res.send('POST request to homepage')
    });

    app.delete('/wg/:wg_id', function(req, res){
        res.json(storage.delete(db.wg, eq.params.wg_id));
    });

    /**
     * Einkaufsliste
     */

    app.get('/wg/:wg_id/liste', function(req, res){
        res.json(storage.readone(db.ek, req.params.wg_id));
    });

    app.post('/wg/:wg_id/liste', function(req, res){
        // bug
        res.json()
    });

    app.delete('/wg/:wg_id/liste', function(req, res){
        res.json(storage.delete(db.wg, req.params.wg_id));
    });

    /**
     * Element der Einkaufsliste
     */

    app.get('/wg/:wg_id/liste:element_id', function(req, res){
        res.json(storage.readone2(db.listenelement, req.params.wg_id, eq.params.element_id));
    });

    app.put('/wg/:wg_id/liste:element_id', function(req, res){
        //...
        res.send('POST request to homepage')
    });

    app.delete('/wg/:wg_id/liste:element_id', function(req, res){
        res.json(db.wg.remove(
            {
                wg_id: req.params.wg_id,
                ELEMENT_id: req.params.element_id
            }
        ));
    });

    /**
     * Mitbewohner
     */

    app.get('/wg/:id/mitbewohner', function(req, res){
        res.json(db.bewohner.find(
            {id: req.params.wg_id}
        ));
    });

    app.post('/wg', function(req, res){
        res.json();
    });


    /**
     * Einkaufsmöglichkeit
     */

    app.get('/wg/:id/mitbewohner/:id/einkaufsmoeglichkeiten', function(req, res){
        res.json(db.ekmoeglichkeiten.find(
            {id: req.params.wg_id}
        ));
    });
}
