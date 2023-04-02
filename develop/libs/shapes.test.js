const Shape  = require('./shapes')

describe('Shape', () => {
  test('setTextColor sets the text color', () => {
    const shape = new Shape('circle', 'ABC', '#000')
    shape.setTextColor('#fff')
    expect(shape.textColor).toBe('#fff')
  })
})