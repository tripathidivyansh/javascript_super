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