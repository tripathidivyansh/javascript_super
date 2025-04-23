const score = 400;
console.log(score);
const  balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(typeof(balance));
const balance1 = 100.3223;
console.log(balance1.toFixed(1));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.896661 
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 1213.44532;
console.log(otherNumber2.toPrecision(3));

const hunders = 10000000000000;
// console.log(hunders.toLocaleString('en-IN '));


// +++++++++++++++++++++++mathS+++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));


console.log(Math.min(4,3,2,6,8));
console.log(Math.max(4,3,2,6,8));

console.log(Math.random());
console.log(Math.random()*10);    
console.log((Math.random()*10 )+ 1);
console.log(Math.floor(Math.random()*10 )+ 1);

const min = 10;
const max = 20;

console.log((Math.random((Math.random() * (max - min + 1) + min)) + min));
