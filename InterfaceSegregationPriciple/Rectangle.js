const iShape = require('./iShape')
class Rectangle extends iShape {
    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }

}

module.exports = Rectangle