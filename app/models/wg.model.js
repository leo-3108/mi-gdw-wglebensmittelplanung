const {
    checkSchema
} = require('express-validator');

/**
 * CRUD-Befehle for WG
 * @throws HTTP-Errors
 */

exports.create = (collection, data) => {

    try{
        // Add id
        data.id = collection.count();

        // Save
        collection.save(data);
    }
    catch(e){
        console.log(data)
        throw new error.InternalServerError('db-create', 'Internal Server Error')
    }
    // Log
    //console.log('> Adding new item #', data.id,' from ', collection.collectionName, ' with: ', data);

    return data.id;
}

exports.readall = (collection) => {

    console.log(collection)

    let items = collection.find();

    // Remove intern id
    for (n in items) {
        delete items[n]._id
    }

    return items
}

exports.readone = (collection, wg_id) => {

    // Log
    //console.log('> Read item #', id, ' from ', collection.collectionName);
    const items = collection.find({
        id: parseInt(wg_id)
    });

    if (items.length) {
        // Remove intern id
        delete items[0]._id;
    }
    return items;
}

exports.update = (collection, id, data) => {
    // Log
    //console.log('> Editing item #', id,' from ', collection.collectionName, ' to be: ', data);

    return collection.update({id: parseInt(id)}, data)
}

exports.delete = (collection, id) => {
    // Log
    //console.log('> Editing item #', id,' from ', collection.collectionName);

    return collection.remove({id: parseInt(id)});
}
