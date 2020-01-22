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
 * @param  {String} coord   Der aktuelle Standord des Nutzers
 * @return {Promise}        Das Promise Objekt der Anfrage
 *                          mit allen Routen Optionen
 */
exports.main = async function(coord, wg, bw, list){

    // Get Einkaufsmoeglichkeiten in der Nähe
    let places = await anfrage(
        'GET',
        'https://places.cit.api.here.com/places/v1/autosuggest',
        {
            at: coord,
            q: 'Supermarkt'
        },
    ).then(places => {
        // Filter die Einkausmöglchkeiten heraus, die Elemente der Liste anbieten

        return places
    })

    // Berechne Routen zu allen Einkaufsmöglichkeiten
    let routes = await anfrage(
        'GET',
        'https://route.api.here.com/routing/7.2/calculateroute.json',
        {
            waypoint0: '51.02496075183629,7.561652965277074',
            waypoint1: '50.941278,6.958281',
            departure: 'now',
            mode: 'fastest;publicTransport',
            combineChange: 'true'
        }
    )

    console.log({
        places: places,
        routes: routes
    })

    // Filter for output
    return {
        places: places,
        routes: routes
    }
}

/**
 * Stellt eine Anfrage an einen Server mit einer JSON-REST-Schnittstelle
 * @param  {String} method          HTTP-Verb der anfrage
 * @param  {String} url             URL der Anfrage
 * @param  {Object of Strings} qs   URL-Parameter
 * @return {Promise}                Das Promise Objekt der Anfrage
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
            // Request ist Promise
            'User-Agent': 'Request-Promise',

            // Testing the API
            // @see https://developer.here.com/documentation/places/dev_guide/topics/http-request-headers-overview.html
            'X-NLP-Testing': 1
        },
        json: true
    }
    options.qs = Object.assign(qs, options.qs)

    return request(options).catch(e => {
        console.log(`[HERE-API - Error #${e.error.status || 500}]`, e.error.message, e.error.incidentId || '')
        throw new error.InternalServerError('here-anfrage', 'Internavl Server Error')
    })
}

const cache = function(){

}
