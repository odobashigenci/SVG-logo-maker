class Shape {
constructor(shape, logo, shapeColor){
    this.textColor = ''
    this.shape = shape
    this.logo = logo
    this.shapeColor = shapeColor
}

setTextColor(color) {
    this.textColor = color
}
}



module.exports = Shape