const { createDweller, listingDwellers } = require('./services/dwellerService')

createDweller(2, 22, 10 , 'guga')
createDweller(4, 12, 41 , 'jao')
createDweller(3, 67, 32 , 'thierry')
createDweller(1, 69, 11, 'helder')

console.log(listingDwellers())