function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return `${this._password}hiteSh`;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true
    });
}

const user1 = new User("malik@example.com", "12345");
console.log(user1.email);     
console.log(user1.password);  
