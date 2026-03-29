const { clearData, addDwellers, listDwellers } = require('../controllers/dwellerController')

beforeEach(() => {

    clearData()

})

describe('Testando Controllers de Dwellers', () => {

    test('Deve armazenar os residentes no banco', () => {

         const objDweller = {
            manyResidents: 2,
            houseNumber: 22,
            blockNumber: 10,
            ownerName: 'guga',
            tax: {
                accumulatedTax: 0,
                isPaid: true
            }
        }

        addDwellers(objDweller)

        expect(listDwellers()).toContainEqual(objDweller)

    })

    test('deve conter residentes já cadastrados', () => {

        const objDweller1 = {
            manyResidents: 2,
            houseNumber: 22,
            blockNumber: 10,
            ownerName: 'guga',
            tax: {
                accumulatedTax: 0,
                isPaid: true
            }
        }

        addDwellers(objDweller1)

        const objDweller2 = {
            manyResidents: 2,
            houseNumber: 22,
            blockNumber: 10,
            ownerName: 'guga',
            tax: {
                accumulatedTax: 0,
                isPaid: true
            }
        }

        addDwellers(objDweller2)

        expect(listDwellers()).toContainEqual(objDweller1, objDweller2)

    })

    test('O banco deve começar vazio', () => {

        expect(listDwellers().length).toBe(0)

    })

})