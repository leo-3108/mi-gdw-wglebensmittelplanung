// Aufgabe 4
const m = require('./modul.js')
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let cityData = fs.readFile('cities.json', (err, cityData)=>{
  if(err){
    console.log("Fehler");
  }
  else{
    var cityData = JSON.parse(cityData);

    let userData = fs.readFile('user.json', (err, userData)=>{
      if(err){
        console.log("Fehler");
      }
      else{
        var userData = JSON.parse(userData);

        //Daten zusammenfügen

        let neu = [];
        for(let i = 0; i < userData.user.length; i++){
          for(let o = 0; o < cityData.cities.length; o++){
            if (userData.user[i].wohnort == cityData.cities[o].name){
              neu.push({userData.user[i].concat(cityData.cities[o])});
            }
          }
        }
        console.log(neu);


        process.exit();
      }
    });
  }
});
