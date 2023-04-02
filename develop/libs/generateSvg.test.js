const generateSvg = require('./generateSvg.js')

describe('generateSvg', () => {
  test('returns valid svg data', () => {
    const data = {
      shape: 'circle',
      characters: 'ABC',
      shapeColor: '#000',
      textColor: '#fff',
    }
    const svgData = generateSvg(data)
    expect(svgData).toMatch(/<svg.*>.*<\/svg>/s)
  })
})