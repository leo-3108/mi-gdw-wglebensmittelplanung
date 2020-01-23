exports.create = (collection, data, wg_id) => {

    // Add id
    var tmp = collection.find({
        wg_id: parseInt(wg_id)
    })
    data.id = tmp.length
    data.wg_id = parseInt(wg_id)

    // Add visability
    data.vis = true

    // Save
    collection.save(data)

    // Log
    console.log('[Log] Add new element', data.id, 'to list from WG', data.wg_id)

    return data.id
}

exports.readall = (collection, wg_id) => {

    var items = collection.find({
        wg_id: parseInt(wg_id),
        vis: true
    })

    for (n in items) {
        // Remove intern id
        delete items[n]._id

        // Remove visability
        delete items[n].vis
    }

    // Log
    console.log('[Log] Read all elements of list from WG', wg_id)

    return items
}

exports.readone = (collection, wg_id, element_id) => {

    const items = collection.find({
        id: parseInt(element_id),
        wg_id: parseInt(wg_id),
        vis: true
    })

    if (items.length) {
        // Remove intern id
        delete items[0]._id

        // Remove visability
        delete items[0].vis
    }

    // Log
    console.log('[Log] Read element', id, 'of list from WG', wg_id)

    return items
}

exports.update = (collection, element_id, wg_id, data) => {

    const tmp = collection.findOne({
        id: parseInt(id),
        wg_id: parseInt(wg_id),
        vis: true
    })

    const items = collection.update({
        _id: tmp._id
    }, data)

    // Log
    console.log('[Log] Update element', id, 'of list from WG', wg_id)

    return items
}

exports.deleteall = (collection, wg_id) => {

    const tmp = collection.findOne({
        wg_id: parseInt(wg_id),
        vis: true
    })

    for (item of tmp) {
        collection.update({
            _id: item._id
        }, {
            vis: false
        })
    }

    // Log
    console.log('[Log] Delete all elements of list from WG', wg_id)

    return true
}

exports.delete = (collection, wg_id, element_id) => {

    const tmp = collection.findOne({
        id: parseInt(element_id),
        wg_id: parseInt(wg_id),
        vis: true
    })

    const items = collection.update({
        _id: tmp._id
    }, {
        vis: false
    })

    // Log
    console.log('[Log] Delete element', id, 'of list from WG', wg_id)

    return items
}
