// for loops

let answer = 0;

for (let i = 0; i <= 100; i++) {
    answer = answer+ i;
    console.log(answer)
}

// print even number
let arr = [1,2,3,4,5,6,7,8,9]

for(let i = 0;i < arr.length;i++){
    
    if(arr[i]%2 ==0){
        console.log(arr[i])
    }
}

// print biggest number in array

let arr2 = [5,8,9,7,1,6,4];
let maxi = arr2[0];

for(let i = 0;i < arr2.length;i++){
    
    if(arr2[i]>maxi){
        maxi = arr2[i]
        console.log("case when maxi was updated"+maxi)
    }
    else{
        console.log("case when maxi wasnt updated"+ maxi)
    }
}
console.log("Largest element in the array is " + maxi)

// print second largest number in an array

let arr3 = [5,9,9,7,1,8,6,4];
let largest = arr3[0];
let second_largest = -1;

for (let i = 0; i < arr3.length; i++) {
    if(arr3[i]>largest) {
        
        second_largest = largest
        largest = arr3[i]
        console.log("largest "+ largest + " second largest " + second_largest )    
    }
    else if(arr3[i]< largest && arr3[i] > second_largest){
        second_largest = arr3[i]
    }
}
console.log("The actual second lasrgest elemement is "+ second_largest)

// print male peoples first name in a complex object

let customers = [
    {
        fname : "Abhishek",
        gender : "M"
    },
    {
        fname : "Parul",
        gender : "F"
    },
    {
        fname : "Mahir",
        gender : "M"
    }

]

for(let i =0;i< customers.length;i++){
    if(customers[i]["gender"] == "M"){
        console.log(customers[i]["fname"])
    }
}

// for of loops
arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

// maps

const map = new Map()
map.set('IN','India')
map.set('UK','United kingdom')
map.set('FR','France')

console.log(map)

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':',value);
}

// for each loop

const coding = ["java","python","cpp","js"]

const values = coding.forEach((item) => {
    console.log(item);
})

console.log(values); // for each doesnt return any value

// another example map filter reduce

const nums= [1,2,3,4,5,6,7,8,9]

// nums.filter((item) => {
//     if (item > 4) {
//         console.log(item);
//     }
// })

const newNums = nums.filter((item) => item>4)
console.log(newNums);

const num2 = nums.map((num) => { return num+10})
console.log(num2);

// chaining

const num3 = nums.map((num) => num+10).map((num) => num+1).filter((num) => num>19 )
console.log(num3);

// reduce

const num4 = nums.reduce((acc,currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(num4);

const shoppingCart = [{
    itemNAme : "JS Course",
    price : 5999
},
{
    itemNAme : "python Course",
    price : 9999
},
{
    itemNAme : "ds Course",
    price : 6999
}
]

const totalPrice = shoppingCart.reduce((acc, currval) =>   {
    return acc + currval.price
},0)
console.log(totalPrice);