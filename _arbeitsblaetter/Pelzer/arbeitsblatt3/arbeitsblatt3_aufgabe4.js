// Aufgabe 4
const m = require('./modul.js')
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

async function zusammenfassen() {
  const getJSON = (file) => {
      return new Promise((resolve, reject) => {
          fs.readFile(file, (error, data) => {
              if(error) reject(error);
              resolve(JSON.parse(data));
          });
      });
  }
  try{
    let cityData = await getJSON('./cities.json');
    let userData = await getJSON('./user.json');


  //zusammenfassen
  let neu = [];
  for(let i = 0; i < userData.user.length; i++){
    for(let o = 0; o < cityData.cities.length; o++){
      if (userData.user[i].wohnort == cityData.cities[o].stadtname){
        neu.push(Object.assign(userData.user[i],cityData.cities[o]));
      }
    }
  }

  for(let i = 0; i < neu.length; i++){
  console.log(neu[i]);
  console.log("---");
  }
  process.exit();
  }

  catch(error){
      console.error(error);
      process.exit();
    }

}

zusammenfassen()
