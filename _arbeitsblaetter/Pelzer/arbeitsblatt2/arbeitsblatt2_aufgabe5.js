// Aufgabe 5
const hello = "Hello"

function konkatenieren1(){
  const world = "World";
  console.log(hello+world);
  }

  function konkatenieren2(){  //Funktion kann nicht auf world zugreifen, da diese lokal in "konkatenieren1" existiert
    console.log(world+hello);
    }

  konkatenieren1();
  //konkatenieren2();

//-------------------------- Aenderung

const hello2 = "Hello2"
const world2 = "World2";

function konkatenieren3(){
  console.log(hello2+world2);
  }

function konkatenieren4(){
  console.log(hello2+world2);
  }

konkatenieren3();
konkatenieren4();
