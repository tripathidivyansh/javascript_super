console.log("hello" + "world");

const name = "Malik";
const repocount=  50;
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('Malik')
console.log(typeof(gamename));

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));

console.log(gamename.indexOf('t'));
const newString = gamename.substring(0, 4);
console.log(newString);

const anotherString = gamename.slice(0, 4);
console.log(anotherString);

const anotherString1 = gamename.slice(-8, 4);
console.log(anotherString1);

const newString1 = "          Malik                   ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://malik.com/malik%20tripathi";
// url.replace('%20', '-');

console.log(url.replace('%20', '-'));

console.log(url.includes('malik'));


const gamename2 = new String('malik-hc-photo');
console.log(gamename2.split('-'));
