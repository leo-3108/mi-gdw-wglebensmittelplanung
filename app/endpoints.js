/**
 * Definiert alle Express Endpoints
 * @see https://expressjs.com/en/guide/routing.html
 */

// Modules
const { checkSchema } = require('express-validator')
const error = require('rest-api-errors')
const hereAPI = require('./hereAPI.js')

// Datatypes
const bewohnerModel = require('./models/bewohner.model.js')
const wgModel = require('./models/wg.model.js')
const listenelementModel = require('./models/listenelement.model.js')

/**
 * Haupt-Funktion, die alle Endpoints definiert
 * @param  {Object} app Die Express.js Instanz
 * @param  {Object} db  Die DiskDB Instanz
 */
exports.create = (app, db) => {
    app.get('/', function(req, res) {
        res.json({
            name: 'WG-Lebensmittelplaner',
        })
    })

    // WG
    wgEndpoints(app, db)

    // Einkaufsliste
    listeEndpoints(app, db)

    // Listenelement
    listenelementEndpoints(app, db)

    // Bewohner
    bewohnerEndpoints(app, db)

    // Einkaufsmoeglichkeiten
    einkaufsmoeglichkeitenEndpoints(app, db)
}

/**
 * Definiert alle Endpoints die zur Ressource 'WG' gehören
 * @param  {Object} app Die Express.js Instanz
 * @param  {Object} db  Die DiskDB Instanz
 */
const wgEndpoints = (app, db) => {

    app.get('/wg', function(req, res) {
        try {
            // access to db
            let wgs = wgModel.readall(db.wg)

            // throw errors
            if (!wgs.length) {
                throw new error.NotFound(
                    'wg_get-404',
                    'Es konnten keine WGs gefunden werden.'
                )
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
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.post('/wg', function(req, res) {
        try {
            // create
            let wg_id = wgModel.create(db.wg, req.body)

            // output
            let wg = wgModel.readone(db.wg, wg_id)
            let output = {
                response: {
                    status: 201,
                    message: 'Created'
                },
                data: wg
            }

            // success
            res.status(201).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.get('/wg/:wg_id', function(req, res) {
        try {
            // access to db
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id_get-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
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
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.put('/wg/:wg_id', function(req, res) {
        try {
            // change
            let changelog = wgModel.update(db.wg, req.params.wg_id, req.body)

            // output
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let output = {
                response: {
                    status: 200,
                    message: 'Updated'
                },
                changelog: changelog,
                data: wg
            }

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id_put-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.delete('/wg/:wg_id', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg) {
                throw new error.NotFound(
                    'wg-id_delete-404',
                    'Es konnte keine WG mit der ID #' + req.params.wg_id + 'gefunden werden.'
                )
            }

            // delete wg and recursive bewohner & listen
            let wgDelete = wgModel.delete(db.wg, req.params.wg_id)
            let bewohnerDelete = bewohnerModel.deleteall(db.bewohner,req.params.wg_id)
            let listDelete = listenelementModel.deleteall(db.listenelement, req.params.wg_id)

            // throw errors
            if (!wgDelete || !bewohnerDelete || !listDelete) {
                throw new error.InternalServerError(
                    'wg-id_delete-500',
                    'Internal Server Error'
                )
            }

            // output
            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                }
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })
}

/**
 * Definiert alle Endpoints die zur Ressource 'Liste einer WG' gehören
 * @param  {Object} app Die Express.js Instanz
 * @param  {Object} db  Die DiskDB Instanz
 */
const listeEndpoints = (app, db) => {
    app.get('/wg/:wg_id/liste', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let le = listenelementModel.readall(db.listenelement, req.params.wg_id, req.params.element_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-liste_get-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // output
            let output = le

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })


    app.delete('/wg/:wg_id/liste', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-liste_delete-404',
                    'Es konnte keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // delete liste
            let listDelete = listenelementModel.deleteall(db.listenelement, req.params.wg_id)

            // throw errors
            if (!listDelete) {
                throw new error.InternalServerError(
                    'wg-id-liste_delete-500',
                    'Internal Server Error'
                )
            }

            // output
            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                }
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })
}

/**
 * Definiert alle Endpoints die zur Ressource 'Listenelement' gehören
 * @param  {Object} app Die Express.js Instanz
 * @param  {Object} db  Die DiskDB Instanz
 */
const listenelementEndpoints = (app, db) => {
    app.get('/wg/:wg_id/liste/:element_id', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let le = listenelementModel.readone(db.listenelement, req.params.wg_id, req.params.element_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-liste-id_get-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }
            if (!le.length) {
                throw new error.NotFound(
                    'wg-id-liste-id_get-404',
                    'Es konnten keine Listenelement mit der ID #' + req.params.element_id + ' in der WG mit der ID #' + req.params.wg_id + 'gefunden werden.'
                )
            }

            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                },
                data: le[0]
            }

            // success
            res.status(200).json(le[0]).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.post('/wg/:wg_id/liste', function(req, res) {
        try {
            // access to database
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-liste_post-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // create
            let list_id = listenelementModel.create(db.listenelement, req.params.wg_id, req.body)

            // output
            let listenelement = wgModel.readone(db.wg, list_id)
            let output = {
                response: {
                    status: 201,
                    message: 'Created'
                },
                data: listenelement
            }

            // success
            res.status(201).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.put('/wg/:wg_id/liste/:element_id', function(req, res) {
        try {
            // access to db
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-liste-id_put-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // change
            let changelog = listenelementModel.update(db.listenelement, req.params.wg_id, req.params.element_id, req.body)

            // output
            let le = wgModel.readone(db.listenelement, req.params.wg_id, req.params.element_id)
            let output = {
                response: {
                    status: 200,
                    message: 'Updated'
                },
                changelog: changelog,
                data: le
            }

            // throw errors
            if (!le.length) {
                throw new error.NotFound(
                    'wg-id-liste-id_put-404',
                    'Es konnten kein Listenelement mit der ID #' + req.params.element_id + ' in der WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.delete('/wg/:wg_id/liste/:element_id', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let le = listenelementModel.readone(db.listenelement, req.params.wg_id,  req.params.element_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-liste-id_delete-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }
            if (!le.length) {
                throw new error.NotFound(
                    'wg-id-liste-id_delete-404',
                    'Es konnten keine Listenelement mit der ID #' + req.params.element_id + ' gefunden werden.'
                )
            }

            // delete listenelement
            let listDelete = listenelementModel.delete(db.listenelement, req.params.wg_id, req.params.element_id)

            // throw errors
            if (!listDelete) {
                throw new error.InternalServerError(
                    'wg-id-liste-id_delete-500',
                    'Internal Server Error'
                )
            }

            // output
            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                }
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })
}

/**
 * Definiert alle Endpoints die zur Ressource 'Bewohner' gehören
 * @param  {Object} app Die Express.js Instanz
 * @param  {Object} db  Die DiskDB Instanz
 */
const bewohnerEndpoints = (app, db) => {
    app.get('/wg/:wg_id/bewohner', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let bw = bewohnerModel.readall(db.bewohner, req.params.wg_id)

            let output = bw

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-bewohner_get-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }
            if (!bw.length) {
                throw new error.NotFound(
                    'wg-id-bewohner_get-404',
                    'Es konnten kein Bewohner in der WG #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.post('/wg/:wg_id/bewohner', function(req, res) {
        try {
            // access to database
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-bewohner_post-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // create
            let bw_id = bewohnerModel.create(db.bewohner, req.body, req.params.wg_id)

            // output
            let bw = bewohnerModel.readone(db.wg, bw_id)
            let output = {
                response: {
                    status: 201,
                    message: 'Created'
                },
                data: bw
            }

            // success
            res.status(201).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.get('/wg/:wg_id/bewohner/:bewohner_id', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let bw = bewohnerModel.readone(db.bewohner, req.params.wg_id, req.params.bewohner_id)

            let output = bw[0]

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id_get-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }
            if (!bw.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id_get-404',
                    'Es konnten kein Bewohner in der WG #' + req.params.wg_id + ' mit der ID  #' + req.params.bewohner_id + ' gefunden werden.'
                )
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.put('/wg/:wg_id/bewohner/:bewohner_id', function(req, res) {
        try {
            // access to db
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id_put-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // change
            let changelog = bewohnerModel.update(db.bewohner, req.params.wg_id, req.params.bewohner_id, req.body)

            // output
            let bw = bewohnerModel.readone(db.bewohner, req.params.wg_id, req.params.bewohner_id)
            let output = {
                response: {
                    status: 200,
                    message: 'Updated'
                },
                changelog: changelog,
                data: bw
            }

            // throw errors
            if (!bw.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id_put-404',
                    'Es konnten kein Listenelement mit der ID #' + req.params.element_id + ' in der WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.delete('/wg/:wg_id/bewohner', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-bewohner_delete-404',
                    'Es konnte keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }

            // delete liste
            let bewDelete = bewohnerModel.deleteall(db.bewohner, req.params.wg_id)

            // throw errors
            if (!bewDelete) {
                throw new error.InternalServerError(
                    'wg-id-bewohner_delete-500',
                    'Internal Server Error'
                )
            }

            // output
            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                }
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })

    app.delete('/wg/:wg_id/bewohner/:bewohner_id', function(req, res) {
        try {
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let bw = bewohnerModel.readone(db.bewohner, req.params.wg_id, req.params.bewohner_id)

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id_delete-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }
            if (!bw.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id_delete-404',
                    'Es konnte kein Bewohner mit der ID #' + req.params.bewohner_id + ' gefunden werden.'
                )
            }

            // delete listenelement
            let bewohnerDelete = bewohnerModel.delete(db.bewohner, req.params.wg_id, req.params.bewohner_id)

            // throw errors
            if (!bewohnerDelete) {
                throw new error.InternalServerError(
                    'wg-id-bewohner-id_delete-500',
                    'Internal Server Error'
                )
            }

            // output
            let output = {
                response: {
                    status: 200,
                    message: 'OK'
                }
            }

            // success
            res.status(200).json(output).end()
        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })
}

/**
 * Definiert alle Endpoints die zur Anwendungslogik bzw. zur Beschaffung der Einkaufsmoeglichkeiten gehören
 * @param  {Object} app Die Express.js Instanz
 * @param  {Object} db  Die DiskDB Instanz
 */
const einkaufsmoeglichkeitenEndpoints = (app, db) => {
    app.get('/wg/:wg_id/bewohner/:bewohner_id/einkaufsmoeglichkeiten', function(req, res){
        try{
            // access to Database
            let wg = wgModel.readone(db.wg, req.params.wg_id)
            let bw = bewohnerModel.readone(db.bewohner, req.params.wg_id, req.params.bewohner_id)
            let list = listenelementModel.readall(db.listenelement, req.params.wg_id)
            let coord = req.query.coord

            // throw errors
            if (!wg.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id-einkaufsmoeglichkeiten_get-404',
                    'Es konnten keine WG mit der ID #' + req.params.wg_id + ' gefunden werden.'
                )
            }
            if (!bw.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id-einkaufsmoeglichkeiten_get-404',
                    'Es konnten kein Bewohner in der WG #' + req.params.wg_id + ' mit der ID  #' + req.params.bewohner_id + ' gefunden werden.'
                )
            }
            if (!list.length) {
                throw new error.NotFound(
                    'wg-id-bewohner-id-einkaufsmoeglichkeiten_get-404',
                    'Es konnten keine Routen zu Einkaufsmoeglichkeiten berechnet werden, da die Einkaufsliste der WG #' + req.params.wg_id + ' leer ist.'
                )
            }

            if (!coord) {
                throw new error.NotAcceptable(
                    'wg-id-bewohner-id-einkaufsmoeglichkeiten_get-406',
                    'Es wurde kein Standord als Query Parameter angegeben: coord'
                )
            }

            // anwendungslogik
            hereAPI.main(coord, wg, bw, list).then(result => {
                result = {
                    response: {
                        status: 200,
                        message: 'OK'
                    },
                    request: {
                        coord: coord
                    },
                    data: result
                }

                res.status(200).json(result).end()
            }).catch(e => {
                throw e
            })

        } catch (e) {
            // error handling
            res.status(e.status || 500).json(errhandling(e))
        }
    })
}

/**
 * Help-Funktion
 * Definiert wie mit Fehlern umgegangen werden soll
 * @param  {Object} e Error-Object
 * @return {Object}   Ausgabe für JSON
 */
function errhandling(e){
    console.log(`[Error #${e.status || 500}]`, e.message, e.fileName || '', e.lineNumber || '')

    return {
        response: {
            status: e.status || 500,
            message: e.message,
            code: e.code
        }
    }
}
