const userEmail = "malik144@gmail.com"

if(userEmail){
    // console.log("Got user email");
}else{
    // console.log("Dont have user email");
}


const userEmail1 = " ";

if (userEmail1.trim().length === 0) {
    // console.log("String is empty");
} else {
    // console.log("String is not empty");
}

const emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    // console.log("object is empty");
}


// Nullish Coalescing oprator(??);

// let val1;
// val1 = 5 ?? 10

val1 = null ?? 10;
console.log(val1);

val2 = undefined ?? 15;
console.log(val2);

val3 = null ?? 10 ?? 20
console.log(val3);


// terniary operator
// codition ? true : false;

const incetreprice = 100;
incetreprice >= 80 ? console.log("less than 80") : console.log("more than 80");

