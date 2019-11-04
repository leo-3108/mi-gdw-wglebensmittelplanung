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
const cm = require('./cities_module');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Read File
fs.readFile('./cities.json', (error, data) => {
    if(error) throw error;

    let dataArray = JSON.parse(data);

    // suchen
    single_item = cm.search(dataArray.cities, 'Köln');

    // entfehrnen
    dataArray.cities = cm.delete(dataArray.cities, 'Frankfurt am Main');
    dataArray.cities = cm.delete(dataArray.cities, 'Stuttgart');

    // hinzufügen
    dataArray.cities = cm.add(dataArray.cities,
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
});
