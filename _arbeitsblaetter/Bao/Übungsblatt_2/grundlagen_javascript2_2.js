//Aufgabe 2.2
console.log('Aufgabe 2.2')

//Maximale Höher der möglichen Bewertung
const max = 5;
//Aktuelle Anzahl der Bewertung
var anzahl = 0;
//Die Bewertung selbst
var bewertung = 3;

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

const bewerten = function(){

  rl.question('Wie viele Bewertungen sollen erstellt werden?',function(answer) {
  console.log(`Answer: ${answer}`);
  var bewertung2 = 0;
    for(let anzahl = 0; anzahl < answer; anzahl++){
      const minr = 0;
      const maxr = 5
      
      //Erzeugen der Zufallszahl
      bewertung = Math.round(Math.random()* (maxr - minr) + minr);

      aktuell = anzahl + 1;
      bewertung2 = (bewertung2 + bewertung)/aktuell;

      //Hinzufügen jeweiliger Werte
      arrayanzahl.push(anzahl);
      arraybewertung.push(bewertung);
      arrayname.push('Bewertung' + anzahl)

      //Objekterzeugung
      var ratings = {
        anzahlr: anzahl,
        ergebnis: bewertung,
        name: 'Bewertung ' + aktuell,
      }

      console.log(ratings.name);

      //Ausgabe der Länge des Arrays
      console.log('Arraylänge:' + arrayanzahl.length);

      console.log('Abgegebene Bewertung:' + bewertung, 'Anzahl:' + aktuell, 'Die aktuelle Bewertung beträgt' + bewertung2  );
    }
    rl.close();
  });
}

bewerten();
