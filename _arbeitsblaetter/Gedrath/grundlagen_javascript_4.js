/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 1
 */

 // Einbinden des readline moduls
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Ausgabe des Namens
console.log("Finn Nils Gedrath");

// Bewertungs-Definition
const max_bewertung = 4;
let bewertung = 0;
let anzahl_bewertung = 0;

// Zufällige Ganzzahl zw. [min] und [max]
const getRandom = function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

rl.question("Wie viele Bewertungen sollen berechnet werden?\n>> ", function(answer){
    if(answer > 0){
        for(let i = 0; i < answer; i++){
            let new_bewertung = getRandom(0, max_bewertung);
            bewertung = (bewertung * anzahl_bewertung + new_bewertung) / (anzahl_bewertung + 1);
            anzahl_bewertung++;
            console.log(`Anzahl Bewertung: ${anzahl_bewertung}`);
            console.log(`Aktuelle Bewertung: ${bewertung}`);
            console.log(`Abgegebene Bewertung: ${new_bewertung}\n\n`);
        }
    }
    else{
        console.log("Ihre Eingabe wurde nicht erkannt");
    }
    rl.close();
});
