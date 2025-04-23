const coading = ["js", "ruby", "java", "python", "cpp"]

const values = coading.forEach((item) =>{
    // console.log(item);
    // return item;    
})


// console.log(item);

const mynumS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newnumS = mynumS.filter((num) =>  num > 4);
// console.log(newnumS);

// also write like
// const newnumS = mynumS.filter( (num) => {
//     return  num > 4
// })
// console.log(newnumS);


// const newnumS = []
// mynumS.forEach((num) =>{
//     if(num  > 4){
//         newnumS.push(num);
//     }
// })
// console.log(newnumS);

const books = [
    { title: "Sapiens", genre: "History", publish: 2011 },
    { title: "The Alchemist", genre: "Fiction", publish: 1988 },
    { title: "Guns, Germs, and Steel", genre: "History", publish: 1997 },
    { title: "Harry Potter", genre: "Fantasy", publish: 2001 }
];

const userBooks = books.filter((bk) => bk.genre === "History");

userBooks.forEach((book) => {
    console.log(`Found history book: ${book.title}`);
});

const userBooks1 = books.filter((bk) => bk.publish >= 2000);

userBooks1.forEach((book) => {
    console.log(`Found book published after 2000: ${book.title}`);
});
