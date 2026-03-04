const createDweller = (manyResidents, houseNumber, blockNumber, ownerName) => {

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

    return objDweller

}

module.exports = createDweller