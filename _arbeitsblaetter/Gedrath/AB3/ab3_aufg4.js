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
 * Ausgabe der Datensätze
 */
async function conData(){

    // Helper Function
    const getJSON = (file) => {
        return new Promise((resolve, reject) => {
            fs.readFile(file, (error, data) => {
                if(error) reject(error);
                resolve(JSON.parse(data));
            });
        });
    }

    try{
        let cities = await getJSON('./cities.json');
        let users = await getJSON('./users.json');

        for(var i in users){
            let city = cm.search(cities, users[i].wohnort);

            // Ausgabe
            console.log('Vorname: ' + users[i].vorname);
            console.log('Nachname: ' + users[i].name);
            console.log('E-Mail: ' + users[i].email);
            console.log('Wohnort: ' + city.stadt_name);
            console.log('Einwohner: ' + city.einwohner);
            console.log('Bundesland: ' + city.bundesland);
            console.log('- - -');
        }
        process.exit();
    }
    catch(error){
        console.error(error);
        process.exit();
    }
}

conData();
