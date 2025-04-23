const coading = ["js", "ruby", "java", "python", "cpp"];

// coading.forEach(   function  (item){
//     console.log(val);
// })

// coading.forEach( (item) =>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coading.forEach(printMe);


coading.forEach((item, index, arr) =>{
    // console.log(item, index, arr);
})

const myCoading = [
    {
        launagename: "javaScript",
        launagefilename: "js"
    },
    {
        launagename: "java",
        launagefilename: "java"
    },
    {
        launagename: "python",
        launagefilename: "js"
    },
    {
        launagename: "malik",
        launagefilename: "malik"
    }
]

myCoading.forEach((item) =>{
    console.log(item.launagefilename);
})
