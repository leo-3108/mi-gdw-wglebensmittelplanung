const {
    checkSchema
} = require('express-validator');

/**
 * CRUD-Befehle for Listenelement
 * @throws HTTP-Errors
 */

 exports.create = (collection, wg_id, data) => {

     try{
         // Add id
         var tmp = collection.find({
             wg_id: parseInt(wg_id)
         })
         data.id = tmp.length;
         data.wg_id = parseInt(wg_id);                         //ID-Vegabe wie bei Mitbewohner

         // Save
         collection.save(data);
     }
     catch(e){
         console.log(data)
         throw new error.InternalServerError('db-create', 'Internal Server Error')
     }
     // Log
     console.log('> Adding new item #', data.id,' from ', collection.collectionName, ' with: ', data);

     return data.id;
 }

 exports.readall = (collection) => {                //Muss noch angepasst werden

     const items = collection.find();

     // Remove intern id
     for(item in items){
         delete item._id
     }

     // Log
     console.log('> Read all items from ', collection.collectionName);

     return items;
 }

exports.readone = (collection, id, id_liste) => {
    // Log
    console.log('> Read item #', id,' #', id_liste, ' from ', collection.collectionName);

    const items = collection.find({id: parseInt(id), id_liste: parseInt(id_liste)});

    if(items.length){
        // Remove intern id
        delete items[0]._id;
    }

    return items;
}

exports.update = (collection, id, id_liste, data) => {
    // Log (Muss evtl. noch angepasst werden)
    console.log('> Editing item #', data.id_liste,' from ', collection.collectionName, ' to be: ', data);

    return collection.update({id: parseInt(id), id_liste: parseInt(id_liste), data})
}

exports.delete = (collection, id, id_liste) => {
    // Log
    console.log('> Editing item #', id_liste,' from ', collection.collectionName);

    return collection.remove({id: parseInt(id), id_liste: parseInt(id_liste)});
}
