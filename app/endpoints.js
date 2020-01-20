/**
 * Erstellt alle REST-Ressourcen
 */
const { checkSchema } = require('express-validator');
const error = require('rest-api-errors');

exports.create = (app, storage, db) => {
    app.get('/', function (req, res) {
        res.send('Hello World! :D');
    });

    /**
     * WG
     */

    app.get('/wg', function(req, res){
        try{
            // access to Database
            let wgs = storage.readall(db.wg)

            if(!wgs.length){
                throw new error.NotFound(
                    'wg-get-404',
                    'Es konnten keine WGs gefunden werden');
            }

            res.status(200).json(wgs).end()
        }
        catch(e){
            res.status(e.status).json({
                status: e.status,
                message: e.message
            });
        }
    });

    app.post('/wg', function(req, res){
        res.json(storage.create(db.wg, req.body))
    });

    app.get('/wg/:wg_id', function(req, res){
        res.json(storage.readone(db.wg, req.params.wg_id));
    });

    app.put('/wg/:wg_id', function(req, res){
        res.json(storage.update(db.wg, req.params.wg_id, req.body))
    });

    app.delete('/wg/:wg_id', function(req, res){
        res.json(storage.delete(db.wg, eq.params.wg_id));
    });

    /**
     * Einkaufsliste
     */

    app.get('/wg/:wg_id/liste', function(req, res){
        res.json(storage.readone(db.wg, req.params.wg_id));
    });

    app.post('/wg/:wg_id/liste', function(req, res){
        res.json(storage.create(db.wg, req.params.wg_id, req.body))
    });

    app.delete('/wg/:wg_id/liste', function(req, res){
        res.json(storage.delete(db.wg, req.params.wg_id));
    });

    /**
     * Listenelement
     */

    app.get('/wg/:wg_id/liste/:element_id', function(req, res){
        res.json(storage.readone2(db.listenelement, req.params.wg_id, eq.params.element_id));
    });

    app.put('/wg/:wg_id/liste/:element_id', function(req, res){
        res.json(storage.update2(db.listenelement, req.params.wg_id, eq.params.element_id, req.body));
    });

    app.delete('/wg/:wg_id/liste/:element_id', function(req, res){
        res.json(storage.delete2(db.listenelement, req.params.wg_id, eq.params.element_id));
    });

    /**
     * Mitbewohner
     */

    app.get('/wg/:id/mitbewohner', function(req, res){
        res.json(storage.readall(db.bewohner, req.params.wg_id));
    });

    app.post('/wg', function(req, res){
        res.json(storage.create(db.bewohner, req.body));
    });

    app.get('/wg/:id/mitbewohner/:mitbewohner_id', function(req, res){
        res.json(storage.readone2(db.bewohner, req.params.wg_id, req.params.mitbewohner_id));
    });

    app.put('/wg/:id/mitbewohner/:mitbewohner_id', function(req, res){
        res.json(storage.update2(db.bewohner, req.params.wg_id, req.params.mitbewohner_id, req.body));
    });

    app.delete('/wg/:id/mitbewohner/:mitbewohner_id', function(req, res){
        res.json(storage.delete2(db.bewohner, req.params.wg_id, req.params.mitbewohner_id));
    });

    /**
     * Einkaufsmöglichkeit
     */

    app.get('/wg/:id/mitbewohner/:id/einkaufsmoeglichkeiten', function(req, res){
        res.json(storage.readall(db.einkaufsmoeglichkeiten, req.params.wg_id));
    });
}
