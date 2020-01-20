const {
    checkSchema
} = require('express-validator');

exports.readall = (collection) => {

    const items = collection.find();

    // Remove intern id
    for (item in items) {
        delete item._id
    }
}

exports.readone = (collection, id) => {

    // Log
    console.log('> Read item #', id, ' from ', collection.collectionName);
    const items = collection.find({
        id: parseInt(id)
    });

    if (items.length) {
        // Remove intern id
        delete items[0]._id;
    }
    return items;
}

exports.update = (collection, id, data) => {
    // Log
    console.log('> Editing item #', id,' from ', collection.collectionName, ' to be: ', data);

    return collection.update({id: parseInt(id)}, data)
}

exports.delete = (collection, id) => {
    // Log
    console.log('> Editing item #', id,' from ', collection.collectionName);

    return collection.remove({id: parseInt(id)});
}
