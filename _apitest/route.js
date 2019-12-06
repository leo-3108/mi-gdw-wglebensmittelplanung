//Route API; Einfache GET-Abfrage der Route von GM nach Köln

  var request = require("request");
  var fs = require('fs')

  var options = { method: 'GET',
    url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
    qs:
     { app_id: 'hDr78BRUEK7XFKrLIm2j',
       app_code: '7eGjD8JcxivXumb6wdzvig',
       waypoint0: '51.02496075183629,7.561652965277074',
       waypoint1: '50.941278,6.958281',
       departure: 'now',
       mode: 'fastest;publicTransport',
       combineChange: 'true' },
     };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

  fs.writeFile('./output_route.json', (body), (err) => {
              if (err) throw err;
              console.log('The file has been saved!');

              process.exit();
          });
          });
