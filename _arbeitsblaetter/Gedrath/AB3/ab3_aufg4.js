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

async function getJSON(uri){
    let data = await fs.promises.readFile(uri);

    let json = await JSON.parse(data);

    return json;
}

console.log(getJSON('./cities.json'))
