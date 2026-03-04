const createDweller = require('../services/createDweller')

describe('Testando função de criação de residentes', () => {

    test('O objeto do residente deve receber todos os atributos', () => {
        expect(createDweller(2, 10, 22, 'guga')).toEqual({
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

    test('Residente novo, não deve ter valor acumulado', () => {
        expect(createDweller(2, 10, 22, 'guga').tax.accumulatedTax).toBe(0)
    })

    test('Residente novo, deve ter taxa paga', () => {
        expect(createDweller(2, 10, 22, 'guga').tax.isPaid).toBeTruthy()
    })

    test('O atributo manyResidents deve receber o valor especificado no parametro', () => {
        expect(createDweller(2, 10, 22, 'guga').manyResidents).toBe(2)
    })
});