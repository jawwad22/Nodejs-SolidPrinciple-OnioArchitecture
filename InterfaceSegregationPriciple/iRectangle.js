//Node js dont have Interface,this is the alternate way

class RectangleInterface {
    constructor(){
        if (!this.width) { new Error('width need to be implemented').message }

    }
}