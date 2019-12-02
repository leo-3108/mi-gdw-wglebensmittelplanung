const request = require(‘request’);
request('https://places.cit.api.here.com/places/v1/discover/search
      ?app_id=hDr78BRUEK7XFKrLIm2j
      &app_code=7eGjD8JcxivXumb6wdzvig
      &at=52.531,13.3843
      &q=Brandenburg+Gate', { json: true }, (err, res, body) => {
if (err) { return console.log(err); }
console.log(body.url);
console.log(body.explanation);
});
