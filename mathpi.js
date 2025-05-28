const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);


Object.create(null);

const chai = {
    name: 'giner chai',
    price: 250,
    isAvaialbe: true
};

console.log("Before modification:", Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,       
    enumerable: false      
});

console.log("After modification:", Object.getOwnPropertyDescriptor(chai, "name"));
