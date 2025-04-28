const promiseOne = new Promise(function(resolve, reject){
  // Do an async task
  // DB calls, cryptography, network

  setTimeout(function(){
    console.log('Async task is compelete');
    resolve();
  }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 reloved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);  
})

const promiseFour = new promiseFour(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "malik", password: "123"});
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then ((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() =>console.log("The promise is either resolve or rejected")
)
// console.log(username);


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javaScript", password: "123"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000)
});

async function ConsumePromiseFive() {
    const response = await promiseFive;
    console.log(response);
}

ConsumePromiseFive()

async function getAlluse(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = response.json()

    console.log(data);
}

// getAllusers();

fetch('https://jsonplaceholder.typicode.com/users')  
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

