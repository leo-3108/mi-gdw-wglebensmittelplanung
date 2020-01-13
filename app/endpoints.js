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

    app.post('/wg', function(req, res){
        //...
        res.send('POST request to homepage')
    });

    app.get('/wg/:wg_id', function(req, res){
        res.json(db.wg.find(
            {ID: req.params.wg_id}
        ));
    });

<<<<<<< HEAD
    app.put('/wg', function(req, res){
        //...
        res.send('POST request to homepage')
    });

    app.delete('/wg', function (req, res) {
      //...
      res.send('DELETE request to homepage')
    })
=======
    app.delete('/wg/:wg_id', function(req, res){
      res.json(db.wg.remove(ID: req.params.wg_id));
    });

    app.post('/wg', function(req, res){
      res.
    }
>>>>>>> f0e240864794160288e7bc541f99e0211e382629

    /**
     * Einkaufsliste
     */

     app.get('/wg/:wg_id/liste', function(req, res){
       res.json(db.ek.find(
           {WG_ID: req.params.wg_id}
       ));
     });

     app.post('/wg/:wg_id/liste', function(req, res){
       res.
     }

    /**
     * Event
     */

     app.get('/wg/:wg_id/events', function(req, res){
       res.json(db.event.find(
           {ID: req.params.wg_id}
       ));
     });

     app.post('/wg', function(req, res){
       res.
     }

    /**
     * Mitbewohner
     */

     app.get('/wg/:id/mitbewohner', function(req, res){
       res.json(db.mb.find(
           {ID: req.params.wg_id}
       ));
     });

     app.post('/wg', function(req, res){
       res.
     }


    /**
     * Einkaufsmöglichkeit
     */

     app.get('/wg/:id/mitbewohner/:id/einkaufsmoeglichkeiten', function(req, res){
       res.json(db.ekm.find(
           {ID: req.params.wg_id}
       ));
     });

     app.post('/wg', function(req, res){
       res.
     }

}
