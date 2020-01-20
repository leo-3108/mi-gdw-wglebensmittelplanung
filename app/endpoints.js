/**
 * Erstellt alle REST-Ressourcen
 */
const { checkSchema } = require('express-validator');
const error = require('rest-api-errors');

const bewohnerModel = require('./models/bewohner.model.js');
const wgModel = require('./models/wg.model.js');

exports.create = (app, storage, db) => {
    app.get('/', function (req, res) {
        res.send('Hello World! :D');
    });

    /**
     * WG-------------------------------------------------------------------------
     */
    app.get('/wg', function(req, res){
        try{
            // access to db
            let wgs = wgModel.readall(db.wg)

            // throw errors
            if(!wgs.length){
                throw new error.NotFound(
                    'wg-get-404',
                    'Es konnten keine WGs gefunden werden.'
                );
            }

            // output
            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                },
                data: wgs
            }

            // success
            res.status(200).json(output).end()
        }
        catch(e){
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.post('/wg', function(req, res){
        try{
            // create
            let wg_id = wgModel.create(db.wg, req.body);

            // output
            let wg = wg.readone(db.wg, wg_id)
            let output = {
                response: {
                    status: 201,
                    message: 'Created'
                },
                data: wg
            }

            // success
            res.status(201).json(output).end()
        }
        catch(e){
            console.error(e)
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.get('/wg/:wg_id', function(req, res){
        try{
            // access to db
            let wg = wg.readone(db.wg, req.params.wg_id)

            // throw errors
            if(!wg.length){
                throw new error.NotFound(
                    'wgSingle-get-404',
                    'Es konnten keine WG mit der ID #' +  req.params.wg_id +' gefunden werden.'
                );
            }

            // output
            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                },
                data: wg
            }

            // success
            res.status(200).json(output).end()
        }
        catch(e){
            console.error(e)
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.put('/wg/:wg_id', function(req, res){
        try{
            // change
            let changelog = wg.update(db.wg, req.params.wg_id, req.body);

            // output
            let wg = wg.readone(db.wg, req.params.wg_id)
            let output = {
                response: {
                    status: 200,
                    message: 'Updated'
                },
                changelog: changelog,
                data: wg
            }

            // throw errors
            if(!wg.length){
                throw new error.NotFound(
                    'wgSingle-get-404',
                    'Es konnten keine WG mit der ID #' +  req.params.wg_id +' gefunden werden.'
                );
            }

            // success
            res.status(200).json(output).end()
        }
        catch(e){
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.delete('/wg/:wg_id', function(req, res){
        res.json(wg.delete(db.wg, req.params.wg_id));
    });

    /**
     * Einkaufsliste-------------------------------------------------------------------------
     */

    app.get('/wg/:wg_id/liste', function(req, res){
        try{
            // access to Database
            let wg = storage.readone(db.wg, req.params.wg_id)
            let le = storage.readone2(db.listenelement, req.params.wg_id, req.params.element_id)

            let output = le[0]

            // throw errors
            if(!wg.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten keine WG mit der ID #' +  req.params.wg_id +' gefunden werden.'
                );
            }

            // success
            res.status(200).json(output).end()
        }
        catch(e){
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.post('/wg/:wg_id/liste', function(req, res){
        res.json(storage.create(db.wg, req.params.wg_id, req.body))
    });

    app.delete('/wg/:wg_id/liste', function(req, res){
        res.json(storage.delete(db.wg, req.params.wg_id));
    });

    /**
     * Listenelement-------------------------------------------------------------------------
     */

    app.get('/wg/:wg_id/liste/:element_id', function(req, res){
        try{
            // access to Database
            let wg = storage.readone(db.wg, req.params.wg_id)
            let le = storage.readone2(db.listenelement, req.params.wg_id, eq.params.element_id)

            // throw errors
            if(!wg.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten keine WG mit der ID #' +  req.params.wg_id +' gefunden werden.'
                );
            }
            if(!le.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten keine Listenelement mit der ID #' +  req.params.element_id +' gefunden werden.'
                );
            }

            // success
            res.status(200).json(le[0]).end()
        }
        catch(e){
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.put('/wg/:wg_id/liste/:element_id', function(req, res){
        res.json(storage.update2(db.listenelement, req.params.wg_id, eq.params.element_id, req.body));
    });

    app.delete('/wg/:wg_id/liste/:element_id', function(req, res){
        res.json(storage.delete2(db.listenelement, req.params.wg_id, eq.params.element_id));
    });

    /**
     * Mitbewohner-------------------------------------------------------------------------
     */

    app.get('/wg/:id/mitbewohner', function(req, res){
        try{
            // access to Database
            let wg = bewohner.readone(db.wg, req.params.wg_id)
            let bw = bewohner.readall(db.bewohner, req.params.wg_id)

            let output = bw

            // throw errors
            if(!wg.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten keine WG mit der ID #' +  req.params.wg_id +' gefunden werden.'
                );
            }
            if(!bw.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten kein Bewohner in der WG #' +  req.params.wg_id +' gefunden werden.'
                );
            }

            // success
            res.status(200).json(output).end()
        }
        catch(e){
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.post('/wg/:wg_id/mitbewohner', function(req, res){
        res.json(bewohnerModel.create(db.bewohner, req.body, req.params.wg_id));
    });

    app.get('/wg/:id/mitbewohner/:mitbewohner_id', function(req, res){
        try{
            // access to Database
            let wg = wg.readone(db.wg, req.params.wg_id)
            let bw = bewohner.readone(db.bewohner, req.params.wg_id, req.params.mitbewohner_id)

            let output = bw[0]

            // throw errors
            if(!wg.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten keine WG mit der ID #' +  req.params.wg_id +' gefunden werden.'
                );
            }
            if(!bw.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten kein Bewohner in der WG #' +  req.params.wg_id +' mit der ID  #' + req.params.mitbewohner_id + ' gefunden werden.'
                );
            }

            // success
            res.status(200).json(output).end()
        }
        catch(e){
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });

    app.put('/wg/:id/mitbewohner/:mitbewohner_id', function(req, res){
        res.json(bewohner.update(db.bewohner, req.params.wg_id, req.params.mitbewohner_id, req.body));
    });

    app.delete('/wg/:id/mitbewohner/:mitbewohner_id', function(req, res){
        res.json(bewohner.delete(db.bewohner, req.params.wg_id, req.params.mitbewohner_id));
    });

    /**
     * Einkaufsmöglichkeit-------------------------------------------------------------------------
     */

    app.get('/wg/:id/mitbewohner/:id/einkaufsmoeglichkeiten', function(req, res){
        try{
            // access to Database
            let wg = storage.readone(db.wg, req.params.wg_id)
            let bw = storage.readone2(db.bewohner, req.params.wg_id, req.params.mitbewohner_id)

            // throw errors
            if(!wg.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten keine WG mit der ID #' +  req.params.wg_id +' gefunden werden.'
                );
            }
            if(!bw.length){
                throw new error.NotFound(
                    'wgList-get-404',
                    'Es konnten kein Bewohner in der WG #' +  req.params.wg_id +' mit der ID  #' + req.params.mitbewohner_id + ' gefunden werden.'
                );
            }

            // anwendungslogik
            let output = { api: 'error'};

            // success
            res.status(200).json(output).end()
        }
        catch(e){
            // error handling
            res.status(e.status || 500).json({
                response: {
                    status: e.status || 500,
                    message: e.message
                }
            });
        }
    });
}
