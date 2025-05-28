class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is $(this.username)`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }
}

const chai = new Teacher("Chai", "Chai@teacher.com", "123");
chai.addCourse();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai instanceof User);
