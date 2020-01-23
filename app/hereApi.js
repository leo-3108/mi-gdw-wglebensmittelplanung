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

        return places.results
    })

    // Log
    console.log('[Log] Get Places from HERE API at',coord)

    let output = []

    // Geht durch jedes Element durch (0 sind Meta-Daten der Anfrage)
    for(let i=1; i < places.length; i++){
        output[i-1] = places[i]

        // Berechne Routen zu allen Einkaufsmöglichkeiten
        let route = await anfrage(
            'GET',
            'https://route.api.here.com/routing/7.2/calculateroute.json',
            {
                waypoint0: coord,
                waypoint1: toCoord(output[i-1].position),
                departure: 'now',
                mode: 'fastestpublicTransport',
                combineChange: 'true'
            }
        )
        console.log('  [Log] Calculated Route #' + (i-1))

        output[i-1].route = route.response.route
    }

    console.log('[Log] Calculated all routes')

    // Filter for output
    return output
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
        console.log(`[HERE-API - Error #${e.error.status || 500}]`, e.error.message || e, e.error.incidentId || '')
        throw new error.InternalServerError('here-anfrage', 'Internal Server Error')
    })
}

/**
 * Transforms a Array of Coordinations to a String
 * @param  {Array|String} coord Die Koordinaten
 * @return {String}       Die Coordinaten im neuen Format {lo}
 */
const toCoord = function(coord){
    if(typeof(coord) == 'string')
        return coord

    if(Array.isArray(coord))
        return `${coord[0]},${coord[1]}`
}
