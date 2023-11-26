// destructuring

let arr = [2,3,4]
let [a,b] = arr

console.log(a,b)

// ...rest

let arr2 = [2,3,4,5]
let [p,,q,...rest] = arr2

console.log(p,q,rest)

// another syntax
let {x,z} = {x:1,z:2}
console.log(x,z)

// spread operator: converts array into object

let arr4 = [3,4,5]
let obj1 = {...arr4}

console.log(obj1)

// one usecase of spread operator

function sum(v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr4))

// another usecase

let obj2 = {
    name : "Abhishek",
    company: "JBT",
    adress : "XYZ"
}

// name will be updated here
console.log({...obj2, name:"Harry"})

let obj3 = {
    name : "Abhishek",
    company: "JBT",
    adress : "XYZ"
}
// name wont be updated here as we have put changes before accesing obj3
console.log({name: "janvi",...obj3})