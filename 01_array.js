// array
const myArr = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(myArr[0]);

const myHeros = ["Shaktiman", "Naagraj"];


const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);

// array methods

myArr.push(6);
myArr.push(7);
myArr.push(8);
myArr.push(9);

myArr.pop(6);
console.log(myArr);


myArr.unshift(9);
myArr.shift(9);
console.log(myArr);

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log(myArr);
const myn2 = myArr.splice(1, 3);
console.log(myn2);

