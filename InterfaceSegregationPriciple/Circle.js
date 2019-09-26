const iShape = require('./iShape')
class Circle extends iShape {
    constructor(radius) {
        this.area = area(radius)
    }
    get area(radius) {
        return radius * radius * Math.PI;
    }

}

module.exports = Circle