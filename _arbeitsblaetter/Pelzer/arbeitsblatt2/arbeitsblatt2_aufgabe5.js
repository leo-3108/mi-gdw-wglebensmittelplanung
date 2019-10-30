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
