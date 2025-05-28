let myName = "malik";
let mychannel = "chai";
// console.log(myName.length);
// console.log(my);

// console.log(myName.trim().len);


let myHeros = ["thor", "Spiderman"]

let myPowerS = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spideman}`);
    }
}

Object.prototype.hithes = function(){
    console.log(`hitesh is present in all object`);
}

Array.prototype.heyHitesh = function(){
    console.log(`malik say hello`);
}
// heroPower.hithes()
myHeros.hithes();

// inheritance

const User = {
    name: "chai",
    email: "tripathdivyansh144@gmail.com"
}
const Teacher = {
    makeVideo: true;
}

const TeacherSupport = {
    isAvaibale: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TechingSupport
}

Teacher.__proto__ = User

// mordern Syntak

Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "Chiaaurcode "

String.prototype.trueLength(){
    console.log(`${this}`);
    console.log(`True length us: ${this.clearTimeout().length}`);
}

anotherUsername.trueLength()
"malik".trueLength()
"iceTea".trueLength();


