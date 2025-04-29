const user = {
    username: "malik",
    logicCount: 8,
    signedIn: true,
    getuserDetails: function(){
        // // console.log("Got user detauls from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getuserDetails());

// console.log(this);


const promise = new Promise()
const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userone = new User("malik", 12, true);
const usertwo = new User("chaiaurcode", 11, false);

console.log(userone);
console.log(usertwo);
console.log(userone.constructor);