const user = {
    username: "malik",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);   
    }
}

// user.welcomemessage();
// user.username = "Divyansh";
// user.welcomemessage()

console.log(this);


// function chai(){
//     let username = "malik"
//     console.log(this.username);
    
//     console.log(this);
// }
// chai();

// const chai = function(){
//     let username = "malik"
//     console.log(this.username);    
// }
const chai = ()=>{
    let username = "malik"
    // console.log(this.username);   
    console.log(this);
}
// chai();

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3,4));

const addTwo = (num1, num2) =>({username: "malik"});
console.log(addTwo(3, 400));

const myarray = [2, 4, 5, 6, 7,8,9, 10];

// myarray.forEach(() =>{

// })