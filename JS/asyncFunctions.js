// asyncronous function : it doesnt runs in a sequential manner , it can delegate tasks and context switch

function findsum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans+i;
    }
    return ans;
}

function findsumtil100(){
    console.log(findsum(100));
}

setTimeout(findsumtil100,1000) // it is an async function in JS

console.log("I print first and then the sum");


// some more async functions
// fs.readFile : to read file from your filesystem
// Fetch : to fetch some data from API endpoint

const fs = require("fs")
// filesystem module

fs.readFile("test.txt","utf-8",function(err,data) {
    console.log(data);
})

console.log("hi there"); // this runs before above statement
