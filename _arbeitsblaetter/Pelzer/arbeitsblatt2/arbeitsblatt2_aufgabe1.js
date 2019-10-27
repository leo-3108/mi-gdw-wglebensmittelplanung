// Aufgabe 1
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let bewertung = ['Bewertung', 0, 0];
const maxBewertung = 5;

//Funktion zu Erstellung einer Zufallszahl
const getRandom = function(min, max) {
      return Math.round(Math.random() * (max - min) + min);
}

//Berechnung der Bewertung
const berechneBewertung = function(anzahlBewertungen, tmp, neueBewertung){
      bewertung = (anzahlBewertungen*tmp+neueBewertung)/(anzahlBewertungen)

      //Ausgabe
      console.log('abgegebene Bewertung:');
      console.log(neueBewertung);
      console.log('aktuelle Bewertung:');
      console.log(tmp);
      console.log('Anzahl der Bewertungen:');
      console.log(anzahlBewertungen);
      console.log('------------------');

      return bewertung
}

//Eingabe der Anzahl der Bewertungen
rl.question('Anzahl der Bewertungen: ', function(anzahlBewertungen){
    for (let i = 0; i < anzahlBewertungen; i++){
      bewertung[2] = berechneBewertung(bewertung[1]++, bewertung[2], getRandom(0, maxBewertung))
    }

rl.close();
});
