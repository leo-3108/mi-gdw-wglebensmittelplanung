//Aufgabe 2.5
console.log('Aufgabe 2.5')

const hello = "hello";

function concat1(){
  const world = "world";
  console.log(hello + world);
}

function concat2(){
  console.log(world + hello); //"const world" ist lokal in function concat1, kein Zugriff möglich
}


//Änderung: Sobald const world global ist,ist ein Zugriff möglich
const world = "world";

function concat3(){
  console.log(hello + world);
}

function concat4(){
  console.log(world + hello);
}

concat3();
concat4();
