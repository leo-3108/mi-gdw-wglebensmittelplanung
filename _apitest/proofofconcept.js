const fs = require('fs')
var request = require("request");

var options = { method: 'GET',
  url: 'https://places.cit.api.here.com/places/v1/autosuggest',
  qs:
   { at: '51.02496075183629,7.561652965277074',
     q: 'Supermarkt',
     app_id: 'hDr78BRUEK7XFKrLIm2j',
     app_code: '7eGjD8JcxivXumb6wdzvig' },
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  fs.writeFile('./output.json', (body), (err) => {
              if (err) throw err;
              console.log('The file has been saved!');

              process.exit();
          });

});
