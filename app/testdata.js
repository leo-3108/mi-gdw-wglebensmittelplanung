const db = require('diskdb');

db.connect('./storage', [
    'wg',
    'bewohner',
    'ekmoeglichkeiten',
    'listenelement'
]);

const bewohnerModel = require('./models/bewohner.model.js');
const wgModel = require('./models/wg.model.js');
const listenelementModel = require('./models/listenelement.model.js');
const ekmoeglichkeitenModel = require('./models/ekmoeglichkeiten.model.js');


db.wg.remove()
db.listenelement.remove()
db.ekmoeglichkeiten.remove()
db.bewohner.remove()


//db.add()
