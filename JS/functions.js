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