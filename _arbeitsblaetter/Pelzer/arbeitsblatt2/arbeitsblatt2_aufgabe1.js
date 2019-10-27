// Aufgabe 1
const readline = require('readline');
const rl1 = readline.createInterface(process.stdin,process.stdout);
const rl2 = readline.createInterface(process.stdin,process.stdout);

let bewertung = 0;

//Eingabe der Anzahl der Bewertungen
rl1.question('Anzahl der Bewertungen: ', function(anzahlBewertungen){

for (let i = 0; i < anzahlBewertungen; i++){
  rl2.question('Bewertung eingeben: ', function(tmp){
    bewertung.push(tmp)
  }
rl2.close();
});
rl1.close();
});
