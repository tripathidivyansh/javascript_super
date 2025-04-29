function saymyname(){
    console.log("m");
    console.log("a");
    console.log("l");
    console.log("i");
    console.log("k");
}
// saymyname();

// function addtwonumber(number1, number2){
//     console.log(number1 + number2);
// }
function addtwonumber(number1, number2){
//     let result = (number1 + number2);
//     return result;
        return number1 + number2;
}
addtwonumber(3, 4);
addtwonumber(3, null);
const result = addtwonumber(3, 5);

console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        // console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Malik"));
// console.log(loginUserMessage("Malik"));


function calculatecarprice(val1, val2, ...num1){
    return num1;
}

// console.log(calculatecarprice(200, 400, 500));

// function calculatecarprice

const username ={
    username: "malik",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user);
handleobject(user);

handleobject({
    username: "name",
    price: 399
})

const mynewArray = [200, 400, 100, 6000];

function returnsecondvalue(getArray){
    return getArray[1];
}

console.log(returnsecondvalue(mynewArray));
console.log(returnsecondvalue([200, 400, 500, 1000]));


// Scope



