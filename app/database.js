import { JsonDB } from '/jsonDB/db';

var db = new JsonDB(new Config("myDataBase", true, false, '/'));

db.push("/wgs/testwg",{
   Name: "String",
   Adresse: {
      Strasse: "String",
      Hausnummer: "String",
      PLZ: "String",
      Stadt: "String",
      Land: "String"
   },
   Telefonnummer: "Int"
})
