class User {
    constructor(email, password) {
        this._email = email;      
        this._password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;      
    }

    get password() {
        return `${this._password}hitesh`;  
    }

    set password(value) {
        this._password = value;  
    }
}

const hitesh = new User("Malik", "123");
console.log(hitesh.password);
