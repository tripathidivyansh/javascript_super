var c = 300
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); 
// console.log(b); 
// console.log(c);   

let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // console.log("inner: ", a);
}
// console.log(a);

function one(){
    const username = "malik"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "malik"
    if(username === "malik"){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//  +++++++++++++++++++++++++++++++++++++++++++++//
console.log(addone(5));

function addone(num){
    return num + 1;
}

const addtwo = function(num){
    return num+2;
}
addtwo(5);
