// JSON is a lightweight format for storing and transporting data

// JSON.stringify

const user = {
    "name" : "Abhishek Jain",
    "age" : 3,
    "gender" : "Male"
}

const finalString = JSON.stringify(user);
console.log(typeof finalString); // converted javascript object to a string
console.log(typeof user);

// JSON.parse

const finalUser = JSON.parse(finalString)
console.log(typeof finalUser) // converts string to js object