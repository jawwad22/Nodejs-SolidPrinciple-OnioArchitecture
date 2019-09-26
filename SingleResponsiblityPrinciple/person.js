const Email = require('./email')

class Person {
    constructor(name, surname, email) {
        this.email =  new Email(email);
        this.name = name;
        this.surname = surname;
    }
    greet() {
        console.log('Hello from Human')
    }
}
module.exports = Person;