/**
 * PROOF-OF-CONCEPT
 *
 * API:         Weather API der HERE REST API
 * Anfrage:     GET-Abfrage des aktuellen Wetters in Gummersbach
 */

const fs = require('fs')
const request = require("request");

const options = { method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather',
  qs:
   { q: 'Gummersbach,de',
     appid: 'fa05354691c1ad9808f0381d24e2af5d' },
};


request(options, function(error, response, body){
    if(error) throw new Error(error);

    fs.writeFile('./weather_output.json', (body), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        process.exit();
    });
});
