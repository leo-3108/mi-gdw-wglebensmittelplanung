/**
 * HERE API
 */
const app_id = 'hDr78BRUEK7XFKrLIm2j'
const app_code = '7eGjD8JcxivXumb6wdzvig'

const request = require('request')
const error = require('rest-api-errors')


/**
 * Gets
 * @param  {[type]} currLocation [description]
 * @return {[type]}              [description]
 */
exports.main = (currLocation) => {
    this.anfrage(
        'GET',
        'https://places.cit.api.here.com/places/v1/autosuggest',
        {
            at: '51.02496075183629,7.561652965277074',
            q: 'Supermarkt'
        },
        (response, body) => {
            return {
                response: response,
                body: body
            }
        }
    )
}

exports.anfrage = (method, url, qs, fun) => {
    // options
    let options = {
        method: method,
        url: url,
        qs: {
            app_id: app_id,
            app_code: app_code
        }
    }
    options.qs = Object.assign(qs, options.qs)

    request(options, function(error, response, body){
        if(error) throw new error.InternalServerError('here-anfrage', 'InternalServerError')

        fun(response, body)
    })
}

/**
* API:         Places API der HERE REST API
* Anfrage:     GET-Abfrage der Supermärkte in Gummersbach
*/

var getEmsInNaehe = function(){
    const fs = require('fs')
    const request = require("request")

    const options = {
        method: 'GET',
        url: 'https://places.cit.api.here.com/places/v1/autosuggest',
        qs: {
            at: '51.02496075183629,7.561652965277074',
            q: 'Supermarkt',
            app_id: 'hDr78BRUEK7XFKrLIm2j',
            app_code: '7eGjD8JcxivXumb6wdzvig'
        },
    };

    request(options, function(error, response, body){
        if(error) throw new Error(error);

        fs.writeFile('./storage/einkaufsmoeglichkeiten.json', (body), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            process.exit();
        });
    });
}

/*
* API:         Route API der HERE REST API
* Anfrage:     GET-Abfrage der Route von Gummersbach nach Köln
*/

var getRoutes = function(){

    const fs = require('fs')
    const request = require("request");

    const options = {
        method: 'GET',
        url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
        qs: {
            app_id: 'hDr78BRUEK7XFKrLIm2j',
            app_code: '7eGjD8JcxivXumb6wdzvig',
            waypoint0: '51.02496075183629,7.561652965277074',
            waypoint1: '50.941278,6.958281',
            departure: 'now',
            mode: 'fastest;publicTransport',
            combineChange: 'true'
        }
    };

    request(options, function(error, response, body){
        if(error) throw new Error(error);

        fs.writeFile('./storage/route.json', (body), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            process.exit();
        });
    });
}
