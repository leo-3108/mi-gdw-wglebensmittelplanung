// Aufgabe 2
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

const maxBewertung = 5;

let rating = new Object();
  rating.name = "Bewertung";
  rating.anzahl = 0;
  rating.letzteBewertung = 0;

//Funktion zu Erstellung einer Zufallszahl
const getRandom = function(min, max) {
      return Math.round(Math.random() * (max - min) + min);
}

//Berechnung der Bewertung
const berechneBewertung = function(anzahlBewertungen, tmp, neueBewertung){
      tmp = (anzahlBewertungen*tmp+neueBewertung)/(anzahlBewertungen);

      //Ausgabe
      console.log('abgegebene Bewertung:');
      console.log(neueBewertung);
      console.log('aktuelle Bewertung:');
      console.log(tmp);
      console.log('Anzahl der Bewertungen:');
      console.log(anzahlBewertungen);
      console.log('------------------');

      return tmp;
}

//Eingabe der Anzahl der Bewertungen
rl.question('Anzahl der Bewertungen: ', function(anzahlBewertungen){
    for (let i = 0; i < anzahlBewertungen; i++){
      rating.letzteBewertung = berechneBewertung(rating.anzahl++, rating.letzteBewertung, getRandom(0, maxBewertung));
    }

rl.close();
});
