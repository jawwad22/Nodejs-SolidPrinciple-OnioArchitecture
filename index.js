//Single Responsibilty Principle
const Person = require('./SingleResponsiblityPrinciple/person')
var Jawwad = new Person('Jawwad', 'Test', "testing123.com");
// console.log(Jawwad)

//Open Close Principle
const Rectangle = require('./OpenClosePrinciple/Rectangle')
var myShape = new Rectangle(2, 9);

//Liskov Subtitution Principle
const Shape = require('./LiskovSubtitutionPrinciple')
Shape.getArea(myShape)