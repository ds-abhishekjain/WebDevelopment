// my own async function
const fs = require('fs');

const { resolve } = require("path");

function readTextFile(){
    return new Promise(function (resolve) {
        console.log("inside promise");
        fs.readFile("test.txt","utf-8",function(err,data) {
            console.log("before resolve");
            resolve(data);
        });
    })
}

function onDone(data) {
    console.log(data);
}

var a = readTextFile();
a.then(onDone);

// else we can write is as

// readTextFile()
// .then(function(data){
//     console.log(data)
// })

const controlCheck = new Promise(function(resolve,reject) {
    console.log("control begins");
    setTimeout(function () {
        resolve({username : "abhishek",email : "123@234.com"});
    },1000);
})

function callBack() {
    console.log("second function");
    console.log(controlCheck);
}
console.log(controlCheck);
controlCheck.then(callBack);