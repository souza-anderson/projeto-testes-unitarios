const juros = require('./juros')
const expect = require('chai').expect

describe('calculo juros', () => {
  it('calculando juros compostos', () => {
    const test1010 = juros.calculoJuros(1000, 0.01, 1)
    expect(test1010).to.equal(1010)

    const test2020 = juros.calculoJuros(1000, 0.02, 1)
    expect(test2020).to.equal(1020)
  })
})