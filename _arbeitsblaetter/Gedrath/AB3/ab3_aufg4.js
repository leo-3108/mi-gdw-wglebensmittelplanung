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

/**
 * Helper Functions
 */
async function conData(){
    const readFile = (file) => {
        return new Promise((resolve, reject) => {
            fs.readFile(file, (error, data) => {
                if(error) reject(error);
                resolve(JSON.parse(data));
            });
        });
    }

    let cities = await readFile('./cities.json');
    let users = await readFile('./users.json');

    console.log(users);
}
conData();
