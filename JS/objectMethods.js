// object methods

function objectMethods(obj) {
    console.log("Original Object: " + obj);

    let keys = Object.keys(obj); // return keys
    console.log("After Object.keys(): ", keys); 

    let values = Object.values(obj); // return values 
    console.log("After Object.values(): ",values);
    
    let entries = Object.entries(obj);
    console.log("After Object.enteries(): ",entries); // return key value pairs individualy as arrays of arrays

    let hasProp = obj.hasOwnProperty("property"); // returns true false if some key is defined as property
    console.log("After hasOwnProperty(): ", hasProp);

    let newObj = Object.assign({},obj,{newProperty: "newValue"}); // adds new key value pair
    console.log("After Object.assign(): ",newObj);
}

const object1 = {
    "name" : "Abhishek Jain",
    "age" : 3,
    "gender" : "Male"
}

console.log(objectMethods(object1));