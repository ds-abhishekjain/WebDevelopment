// if else statements

let age = 18;
let country = "India";

if(age > 15 && country == "India"){
    console.log("Entry Half Approved")
}
else if(age > 17){
    console.log("Entry Full Approved")
}
else{
    console.log("Entry Restricted")
}


// switch statements

let value = "Abhishek";

switch(typeof value){
    case "number":
        console.log("Number")
        break;
    case "string":
        console.log("String")
        break;
    case "boolean":
        console.log("boolean")
        break;
    default:
        console.log("Other");
        break;
}


// ternary operator

// condition ? value_if_true : value_if_false

let age_1 = 20;

let msg = (age_1>=18) ? "YOU ARE AN ADULT" : "YOU ARE A MINOR";

console.log(msg)

// practice if else

let firstNAme = "Abhishek";
let hisage  = 15;
let isMarried = false;

if(isMarried == true){
    console.log("Person is married")
}
else{
    console.log("Person is not married")
}