const { createDweller, listingDwellers } = require('../services/dwellerService')
const { clearData } = require('../controllers/dwellerController')

beforeEach(() => {

    clearData()

})

describe('Testando função de criação de residentes', () => {

    test('O objeto do residente deve receber todos os atributos', () => {

        createDweller(2, 10, 22, 'guga')

        expect(listingDwellers()[0]).toEqual({
            manyResidents: 2,
            houseNumber: 10,
            blockNumber: 22,
            ownerName: 'guga',
            tax: {
                accumulatedTax: 0,
                isPaid: true
            }
        })
    })

    test('Residente novo, não deve ter taxa acumulado', () => {

        createDweller(2, 10, 22, 'guga')

        expect(listingDwellers()[0].tax.accumulatedTax).toBe(0)
    })

    test('Residente novo, deve ter taxa paga', () => {
        
        createDweller(2, 10, 22, 'guga')
        
        expect(listingDwellers()[0].tax.isPaid).toBeTruthy()
    })

    test('Residente novo deve receber o nome do locátario', () => {
        
        createDweller(2, 10, 22, 'guga')

        expect(listingDwellers()[0].manyResidents).toBe(2)
    })

    test('Residente novo deve receber número de seu bloco', () => {
        
        createDweller(2, 10, 22, 'guga')

        expect(listingDwellers()[0].blockNumber).toBe(22)
    })

    test('Residente novo deve receber número da sua casa', () => {
    
        createDweller(2, 10, 22, 'guga')

        expect(listingDwellers()[0].houseNumber).toBe(10)
    })

    test('Residente novo deve receber número de pessoas que tem na sua casa', () => {

        createDweller(2, 10, 22, 'guga')

        expect(listingDwellers()[0].manyResidents).toBe(2)
    })
});