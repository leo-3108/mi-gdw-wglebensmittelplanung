var request = require("request");

var options = { method: 'GET',
  url: 'https://places.cit.api.here.com/places/v1/autosuggest',
  qs:
   { at: '40.74917,-73.98529',
     q: 'chrysler',
     app_id: 'hDr78BRUEK7XFKrLIm2j',
     app_code: '7eGjD8JcxivXumb6wdzvig' },
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
