var app_id = 'hDr78BRUEK7XFKrLIm2j'
var app_code = '7eGjD8JcxivXumb6wdzvig'

/**
* API:         Places API der HERE REST API
* Anfrage:     GET-Abfrage der Supermärkte in Gummersbach
*/

exports.getEmsInNaehe = function(){
  const fs = require('fs')
  const request = require("request");

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

      fs.writeFile('/einkaufsmoeglichkeiten', (body), (err) => {
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

exports.getRoutes = function(){

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

      fs.writeFile('./route_einkaufsmoeglichkeit', (body), (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
          process.exit();
      });
  });

}
