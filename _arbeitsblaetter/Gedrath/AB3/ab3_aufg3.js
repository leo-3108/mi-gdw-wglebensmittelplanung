/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 3 / 3
 */

/**
 * Modules
 */
const fs = require('fs');
const cm = require('./cities_module');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Read File
fs.readFile('./cities.json', (error, data) => {
    if(error) return;
    try{
        let dataArray = JSON.parse(data);

        // suchen
        single_item = cm.search(dataArray, 'Köln');

        // entfehrnen
        dataArray = cm.delete(dataArray, 'Frankfurt am Main');
        dataArray = cm.delete(dataArray, 'Stuttgart');

        // hinzufügen
        dataArray = cm.add(dataArray,
            'Bremen',
            569352,
            'Bremen'
        );

        console.log(dataArray);

        // write
        fs.writeFile('./cities_new.json', JSON.stringify(dataArray), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');

            process.exit();
        });
    }
    catch(error){
        console.log("Es ist ein Fehler bei der Datenveränderung aufgetreten.");
        process.exit();
    }
});
