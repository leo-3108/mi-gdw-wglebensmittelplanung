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
    // Add id
    data.id = collection.count();

    // Save
    collection.save(data);

    // Log
    console.log('> Adding new item #', data.id,' from ', collection.collectionName, ' with: ', data);

    return data.id;
}

exports.readone = (collection, id) => {
    console.log('Read item from: ', id);

    const items = collection.find({id: parseInt(id)});

    if(items.length){
        // Remove intern id
        delete items[0]._id;

        return items;
    }
    else{
        return { message: "404 Error" }
    }

    // Log
    console.log('> Read item #', data.id,' from ', collection.collectionName);
}

exports.readone2 = (collection, id1, id2) => {                   //Für den Fall, dass 2 IDs
    console.log('Adding new item from: ', id1, id2);             //als Suchkriterium vorhanden sind

    const items = collection.find({id1: parseInt(id1), id2: parseInt(id2)});

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

    const items = collection.find();

    // Remove intern id
    for(item in items){
        delete item._id
    }

    // Log
    console.log('> Read all items from ', collection.collectionName);

    return items;
}

exports.update = (collection, id, data) => {
    // Log
    console.log('> Editing item #', data.id,' from ', collection.collectionName, ' to be: ', data);

    return collection.update({id: parseInt(id), data})
}

exports.delete = (collection, id) => {
    // Log
    console.log('> Editing item #', data.id,' from ', collection.collectionName);

    return db.movies.remove({id: parseInt(id)});
}
