function generateSvg(data){
    let svgShape;
    if (data.shape === "circle"){
        svgShape = `<circle cx="100" cy="100" r="100" fill="${data.shapeColor}"/>
        <text x="33%" y="60%" font-size="70px" font-weight="bold" text-anchor="middle" 
        font-family="Arial" fill="${data.textColor}">${data.logo}</text>`
    }else if(data.shape === "triangle"){
        svgShape = `<polygon points="100 0, 200 200, 0 200" style="fill:${data.shapeColor}"/>
        <text x="34%" y="83%" font-size="50px" font-weight="bold" text-anchor="middle" 
        font-family="Arial" fill="${data.textColor}">${data.logo}</text>`
    }else {
        svgShape = `<rect width="200" height="200" style="fill:${data.shapeColor}"/>
        <text x="34%" y="60%" font-size="70px" font-weight="bold" text-anchor="middle" 
        font-family="Arial" fill="${data.textColor}">${data.logo}</text>`
    }
   
    console.log("Generated logo.svg");
   
    
    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="width:300px;height:200px;margin:100px">
    ${svgShape}
    </svg>`
    
}

module.exports = generateSvg;