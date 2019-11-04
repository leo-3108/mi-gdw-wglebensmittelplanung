/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 3 / 2
 */

/**
 * Modules
 */
const fs = require('fs');
const cm = require('./cities_module.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Read File
let cities = fs.readFile('./cities.json', (data, error) => {
    if(error) throw error

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
    fs.writeFile('./cities.json', JSON.stringify(dataArray), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
