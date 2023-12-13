// basic funtion syntax

function findSum(a,b) {
    return a+b;
}

console.log(findSum(5,2));

// callbacks : functions can take other functions as input

function sum(num1,num2,fnTocall){
     let result = num1+num2;
     fnTocall(result)
}

function displayResult(data) {
    console.log("Result of teh sum is " +data)
}

function displayResultPassive(data) {
    console.log("Sums result is " +data)
}

const ans = sum(1,2,displayResult)
console.log(ans)

const ans2 = sum(1,2,displayResultPassive)
console.log(ans2)

// another example of callback

function calc(a,b,fnTocall) {
     const res = fnTocall(a,b);
     return res;
}

function sum2(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const ans3 = calc(3,2,sub);
console.log(ans3);

// func

function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Abhishek"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

// how to avoid undefined

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter username");
    }
    else{
        return `${username} just logged in`
    }
    
}

console.log(loginUserMessage());

// scope : {} curly brackets denotes scope of the program

let a = 30 // gloval scope

function varNums() {
    a= 300 // local scope
    console.log("inner value ",a);
}

console.log("outer value: ",a);
varNums();

// this 

const user = {
    username : "Abhishek",
    email : "123@123"
}

function callUser(obj) {
    console.log(`${obj.username} is the username and email is ${obj.email}`);
}

callUser(user);

// wher eto use this

const user2 = {
    username : "Abhishek",
    email : "123@123",
    welcomMessage : function callUser() {
        console.log(`${this.username} is the username and email is ${this.email}`)
        console.log("inner this : ", this);
    }
    
}
console.log("outer this : ", this);
user2.welcomMessage();

user2.email = "abhi@123";

user2.welcomMessage();

// this doesnt works inside function scope

function user3() {
    let username = "Abhishek"
    console.log(this.username);
}
user3();


// another way

const user4 = () => {
    let username = "MAhir"
    console.log(this);
}

user4();

// IIFE : immidiately invoked function execution : to avoid pollution from global scope

(function chai() {
    // named iife
    console.log(`DB Connected`);
})();

(() => {
    // unamed iife
    console.log(`DB2 connected`);
})();

((name) => {
    //iife passing variable
    console.log(`DB3 connected ${name}`);
})('Hitesh');
