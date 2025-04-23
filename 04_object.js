// const tinderUser = new Object() this is the Singltan object

const tinderUser = {};
// this is the not-singleton object
tinderUser.id = "12345qwdefr";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);


const  regularUser = {
    email : "tripathidivyansh144@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Malik",
            lastname: "Divyansh"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b", }
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2};
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const user = [
    {
        id:1,
        email: "tripathidivyansh144@gmail.com"
    },
    {
        id:1,
        email: "tripathidivyansh144@gmail.com"
    },
    {
        id:1,
        email: "tripathidivyansh144@gmail.com"
    },
    {
        id:1,
        email: "tripathidivyansh144@gmail.com"
    },
    {
        id:1,
        email: "tripathidivyansh144@gmail.com"
    }
]

user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstrucotor: "Malik"
};

// course.courseInstrucotor
const {courseInstrucotor} = course;
console.log(courseInstrucotor);

// {
//     "name": "Malik",
//     "coursename": "js in hindi",
//    " price": "free"
// }

[
    {},
    {},
    {}
]