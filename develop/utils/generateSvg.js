function generateSvg(data){
    console.log(data)
    let svgShape;
    if (data.shape === "circle"){
        svgShape = `<circle cx="100" cy="100" r="100" fill="${data.shapeColor}"/>
        <text x="40%" y="50%" font-size="70px" font-weight="bold" text-anchor="middle" 
        font-family="Arial" fill="${data.textColor}">${data.logo}</text>`
    }else if(data.shape === "triangle"){
        svgShape = `<polygon points="100 0, 200 200, 0 200" style="fill:${data.shapeColor}"/>
        <text x="39%" y="65%" font-size="50px" font-weight="bold" text-anchor="middle" 
        font-family="Arial" fill="${data.textColor}">${data.logo}</text>`
    }else {
        svgShape = `<rect width="0" height="200" style="fill:${data.shapeColor}"/>
        <text x="39%" y="50%" font-size="70px" font-weight="bold" text-anchor="middle" 
        font-family="Arial" fill="${data.textColor}">${data.logo}</text>`
    }
    return `
    <svg width="250" height="250">
    ${svgShape}
    </svg>
    `
}

module.exports = generateSvg