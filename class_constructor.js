// ES6
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;

        this.password = password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123456789")

console.log(chai.encryptpassword());

// behind the Scence
function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptpassword = function(){
    return  `${this.password}abc`
}

const tea = new user("tea", "tripathidivyansh144@gmail.com")