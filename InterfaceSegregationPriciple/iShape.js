//Node js dont have Interface,this is the alternate way

class ShapeInterface {
    constructor() {
        if (!this.area) { new Error('Area Method Need to be Implemented').message }
    }
}

module.exports = ShapeInterface;