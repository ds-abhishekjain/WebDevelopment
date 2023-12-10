// create promis and consume it

const { resolve } = require("path");

// promises : The Promise object represents the eventual completion (or failure) of an 
// asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async wait 1");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise 1 resolved");
})

// create promise 2 without saving it in a variable

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async await 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// create promise 3

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "abhishek",email : "ds.abhsihekjain@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

// create promise 4

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "abhishek", password : "1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    })
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either rejected or resolved")
})


// promise 6

const promise6 = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "javascript",password: "abc"})
        }
        else{
            console.log('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromise6(){
    try {
        const response = await promise6
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromise6()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("E:",error);
    }
}
getAllUsers()

   
// write same above method using then

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return resolve.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
