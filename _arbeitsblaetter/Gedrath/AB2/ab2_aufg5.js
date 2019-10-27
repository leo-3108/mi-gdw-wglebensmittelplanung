/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 2 / 3
 */

/**
 * Funktioniert nicht, da auf world nur lokal in helloWorld()
 * zugegriffen werden kann und diese Variable nicht in worldHello() existiert.
 * 

const hello = "hello";

function helloWorld(){
    const world = "World";

    console.log(hello + " " + world);

}

function worldHello(){
    console.log(world + " " + hello);
}


helloWorld();
worldHello();
*/
const hello = "hello";
const world = "World";

function helloWorld(){
    console.log(hello + " " + world);

}

function worldHello(){
    console.log(world + " " + hello);
}


helloWorld();
worldHello();
