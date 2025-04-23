let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate.toDateString());
let myCreateDate1 = new Date(2023, 0, 23, 5, 3);

console.log(myCreateDate.toLocaleDateString());


let myCreateDate2 = new Date("2023-01-14");
console.log(myCreateDate2.toLocaleDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate2.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now()/ 1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

`${newDate.getDay()}`
newDate.toLocaleString('default', {
    weekday: "long",
})

