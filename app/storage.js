/**
 * Modul zum Speichern der Daten
 */
const db = require('diskdb');

exports.init = () => {
    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'ekmoeglichkeiten',
        'listenelement'
    ]);

    this.reset(db);

    return db
}

exports.reset = (db) => {
    if (!db.wg.find().length){
        // Test
        this.insert({
            Name: "String",
            Adresse: {
                Strasse: "String",
                Hausnummer: "String",
                PLZ: "String",
                Stadt: "String",
                Land: "String"
            },
            Telefonnummer: "Int"
        }, db.wg)
    }
}

/**
 * CRUD-Befehle
 * @throws HTTP-Errors
 */

exports.create = (collection, data) => {
    console.log('Adding new item from: ', data);

    // Add id
    data.id = collection.count();

    // Save
    collection.save(data);

    return id;
}

exports.readone = (collection, id) => {
    console.log('Adding new item from: ', id);

    const items = collection.find({id: parseInt(id)});

    if(items.length){
        // Remove intern id
        delete items[0]._id;

        return items;
    }
    else{
        return { message: "404 Error" }
    }
}

exports.readall = (collection) => {
    return collection.find();
}

exports.update = (collection, id, data) => {
    console.log("Editing item: ", id, " to be ", data);

    return collection.update({id: parseInt(id), data})
}

exports.delete = (collection, id) => {
    console.log("Delete item with id: ", itemId);

    return db.movies.remove({id: parseInt(id)});
}
