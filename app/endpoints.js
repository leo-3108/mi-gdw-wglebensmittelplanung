exports.create = (app) => {
    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    app.get('/wg', function(req, res){
        var json = {
            name: "Test-WG",
            adresse: {
                Strasse: "Im Merheimer Felde",
                Hausnummer: "14a",
                PLZ: "51067",
                Stadt: "Köln",
                Land: "Deutschland"
            },
            Telefonnummer: 1230940218
        };

        res.contentType("application/json");
        res.send(JSON.stringify(json))
    });

}
