class Email {
    constructor(email) {
        if (this.validateEmail(email)) {
        this.email = email;
        } else { this.error=new Error('Invalid Email').message }
    }
    validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

}

module.exports = Email;