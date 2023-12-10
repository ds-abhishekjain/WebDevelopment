// object constructor creates singleton
// object.create

// object literals

const mySymb = Symbol("mykey")

const jsUser = {
    name : "abhi",
    "full name": "Abhishek Jain",
    [mySymb] : "mykey1", // way to use symbol
    email : "123@123",
    isLogedIn : false,
    lastLoginDays: ["Monday","S aturday"] 
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // cant access with dot
console.log(jsUser[mySymb]);
console.log(typeof mySymb);

jsUser.email = "abhi@gmail.com"; // email is updated

// Object.freeze(jsUser); // now we cant update the values

jsUser.email = "jj@chat.com"

console.log(jsUser.email);

// create greeting

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.lastLoginDays}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());