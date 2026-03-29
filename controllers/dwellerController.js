let dwellers = require('../database/database')

const addDwellers = (dweller) => {

    dwellers.push(dweller)

}

const listDwellers = () => {

    return dwellers

}

const clearData = () => {

    dwellers = []

}

module.exports = {
    addDwellers,
    listDwellers,
    clearData
}

