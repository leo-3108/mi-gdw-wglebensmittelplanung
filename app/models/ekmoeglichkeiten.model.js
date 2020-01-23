const {
    checkSchema
} = require('express-validator')

/**
 * CRUD-Befehle for EInkaufsmöglichkeiten
 * @throws HTTP-Errors
 */

 exports.readone = (collection, id) => {

     const items = collection.find({id: parseInt(id), id_liste: parseInt(id_liste)})

     if(items.length){
         // Remove intern id
         delete items[0]._id
     }

     // Log
     console.log('[Log] Read Einkaufsmoeglichkeit',id)

     return items
 }

 exports.readall = (collection) => {

     const items = collection.find()

     // Remove intern id
     for(item in items){
         delete item._id
     }

     // Log
     console.log('[Log] Read all Einkaufsmoeglichkeite')

     return items
 }
