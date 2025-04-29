// Constructor function
function createUser(username, score) {
    this.username = username;
    this.score = score; 
}

createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
};

const chai = new createUser("CHAI", 25);
const tea = new createUser("TEA", 250);

chai.printMe();       
// chai.increment();
// chai.printMe();       

// tea.printMe();        




