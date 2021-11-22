const { double } = require('./double')

describe('math', () => {
  it.each(new Array(1000).fill(0).map((_, index) => index))(
    'should multiple by two (%d)',
    (interaction) => {
      expect(double(interaction)).toBe(interaction * 2)
    }
  )
})
