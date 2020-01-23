exports.create = (collection, data) => {

    // Add id
    data.id = collection.count()

    // Add visability
    data.vis = true

    // Save
    collection.save(data)

    // Log
    console.log('[Log] Add new WG', data.id)

    return data.id
}

exports.readall = (collection) => {

    const items = collection.find({
        vis: true
    })

    for (n in items) {
        // Remove intern id
        delete items[n]._id

        // Remove visability
        delete items[n].vis
    }

    // Log
    console.log('[Log] Read all WGs')

    return items
}

exports.readone = (collection, wg_id) => {

    const items = collection.find({
        id: parseInt(wg_id),
        vis: true
    })

    if (items.length) {
        // Remove intern id
        delete items[0]._id

        // Remove visability
        delete items[0].vis
    }

    // Log
    console.log('[Log] Read WG', wg_id)

    return items
}

exports.update = (collection, wg_id, data) => {

    const items = collection.update(
        {
            id: parseInt(wg_id),
            vis: true
        },
        data
    )

    // Log
    console.log('[Log] Update WG', wg_id)

    return items
}

exports.delete = (collection, wg_id) => {

    const tmp = collection.findOne({
        id: parseInt(wg_id),
        vis: true
    })

    const items = collection.update({
        _id: tmp._id
    }, {
        vis: false
    })

    // Log
    console.log('[Log] Delete WG', wg_id)

    return items
}
