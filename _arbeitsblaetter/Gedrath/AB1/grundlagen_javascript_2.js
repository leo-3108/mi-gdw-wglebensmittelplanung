/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 1
 */

// Ausgabe des Namens
console.log("Finn Nils Gedrath");

// Bewertungs-Definition
const max_bewertung = 4;
let bewertung = 0;
let anzahl_bewertung = 0;

// Logging
const log = function(){
    console.log(bewertung);
    console.log(anzahl_bewertung);
}

log();

bewertung = 3;
anzahl_bewertung++;

log();

bewertung = "hi";
anzahl_bewertung++;

log();

// max_bewertung = 3;           // <= Type-Error
