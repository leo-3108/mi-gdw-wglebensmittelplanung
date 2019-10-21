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

rl.question("Wie lautet Ihre Bewertung? \n>> ", function(answer){
    if(!isNaN(answer)){ // Antwort ist eine Zahl
        if(answer < 0){
            // Zahl ist zu klein
            bewertung = 0
        }
        else if (answer > max_bewertung){
            // Zahl ist zu groß
            bewertung = max_bewertung
        }
        else{
            bewertung = answer
        }
        console.log(`Aktuelle Bewertung: ${bewertung}`);
        anzahl_bewertung++;
    }
    else{
        console.log("Ihre Eingabe wurde nicht erkannt")
    }
    rl.close();
 });
