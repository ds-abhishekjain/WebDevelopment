// function showThis() {
//     console.log(this);
// }
// showThis();

// const obj = {
//     name : "Abhishek",
//     logName : function () {
//         console.log(this.name);
//         console.log(this);
//     }
// }

// obj.logName();

function greet() {
    console.log(`Hello ${this.name}`);
}

const user = {
    name : "Abhishek"
}

greet.call(user);