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