/**
 * Anwendungslogik der Webapplication
 */

// SECRECTS
const app_id = 'hDr78BRUEK7XFKrLIm2j'
const app_code = '7eGjD8JcxivXumb6wdzvig'

// Modules
const request = require('request-promise')
const error = require('rest-api-errors')

/**
 * Gets
 * @param  {String} currLocation    Der aktuelle Standord des Nutzers
 * @return {Promise}                Das Promise Objekt der Anfrage
 *                                  mit allen Routen Optionen
 */
exports.main = async function(currLocation){

    // Get Einkaufsmoeglichkeiten in der Nähe
    return anfrage(
        'GET',
        'https://places.cit.api.here.com/places/v1/autosuggest',
        {
            at: currLocation,
            q: 'Supermarkt'
        },
        (response, body) => {
            console.log(body)
            return (body)
        }
    )
}

/**
 * Stellt eine Anfrage an einen Server mit einer JSON-REST-Schnittstelle
 * @param  {String}             method      HTTP-Verb der anfrage
 * @param  {String}             url         URL der Anfrage
 * @param  {Object of Strings}  qs          URL-Parameter
 * @return {Promise}                        Das Promise Objekt der Anfrage
 */
const anfrage = (method, url, qs) => {
    // options
    let options = {
        method: method,
        url: url,
        qs: {
            app_id: app_id,
            app_code: app_code
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }
    options.qs = Object.assign(qs, options.qs)

    return request(options).catch(err => {
        throw new error.InternavlServerError('here-anfrage', 'Internavl Server Error')
    })
}

const cache = function(){

}
