const { addDwellers, listDwellers } = require('../controllers/dwellerController')

const createDweller = (manyResidents, houseNumber, blockNumber, ownerName) => {

    if (Number.isInteger(manyResidents) && Number.isInteger(houseNumber) && Number.isInteger(blockNumber)) {

        const objDweller = {
            manyResidents: manyResidents,
            houseNumber: houseNumber,
            blockNumber: blockNumber,
            ownerName: ownerName,
            tax: {
                accumulatedTax: 0,
                isPaid: true
            }
        }

        addDwellers(objDweller)

        return true

    }

    return false

}

const listingDwellers = () => {

    return listDwellers()

}

module.exports = {
    createDweller,
    listingDwellers
}