const db = require('diskdb');

db.connect('./storage', [
    'wg',
    'bewohner',
    'ekmoeglichkeiten',
    'listenelement'
]);

db.wg.remove()
db.listenelement.remove()
db.ekmoeglichkeiten.remove()
db.bewohner.remove()
