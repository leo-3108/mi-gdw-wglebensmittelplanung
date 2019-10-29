//Aufgabe 2.4
console.log('Aufgabe 2.4')

//Maximale Höher der möglichen Bewertung
const max = 5;
//Aktuelle Anzahl der Bewertung
var anzahl = 0;
//Die Bewertung selbst
var bewertung = 3;

var summe = 0;

// Erzeugen von Arrays
var arrayname = [];
var arrayanzahl = [];
var arraybewertung = [];

//Einbauen von readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('Wie viele Bewertungen sollen erstellt werden?',function(answer) {
  console.log(`Answer: ${answer}`);
  var bewertung2 = 0;
    for(let anzahl = 1; anzahl <= answer; anzahl++){
      const minr = 0;
      const maxr = 5;

      //Erzeugen der Zufallszahl
      bewertung = Math.round(Math.random()* (maxr - minr) + minr);

      aktuell = anzahl + 1;
      bewertung2 = (bewertung2 + bewertung)/aktuell;

      //Hinzufügen jeweiliger Werte
      arrayanzahl.push(anzahl);
      arraybewertung.push(bewertung);
      arrayname.push('Bewertung' + anzahl);

      summe = bewertung + summe;
      //Objekterzeugung
      var ratings = {
        anzahlr: anzahl,
        letzteBewertung: bewertung,
        name: 'Bewertung ' + aktuell,
        bewertungr: () => summe/this.anzahl //Arrow Function
                                            //unklar: wieso this.anzahl und nicht this.anzahlr?
      }
      console.log(ratings.bewertungr());

      console.log(ratings.name);

    }
    rl.close();
  });
