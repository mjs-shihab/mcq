

//section B
// 21) variable holo akti man rakhar storage..
let name = "Shihab"

// 22) object holo key value jekhane man structure hisebe sajano thake..
let person = {
    name : "shihab" ,
    age : 21
}

// 23) array hoilo list akare structure , jekhane akadhik man rakha jay....
let fruites = ["mango" , "banana" , "jackfruite"] ;


// 24)  function holo code ar block
function greet () {
    console.log("Assalamualaikum vai");
} 

// 25) Loop holo akoi kaj bar bar somponno kora
for (let i = 1 ; i <=5 ; i++ ) {
    console.log(i)
}


//Section C

// 26) let x= 5; let y='5'; console.log (x ==y , x===y);
let x = 5 ;
let y = '5' ;
 
console.log(x == y, x === y); // true false

// 27) let arr= [1,2,3]; arr.pop(); arr.push(4); console.log(arr);

let arr = [1, 2, 3];
arr.pop();
arr.push(4);
console.log(arr); // ans: 1,2.4


// 28) let obj = {name: 'John', age:25}; console.log(obj.name);

let obj = { name: 'John', age: 25 };
console.log(obj.name); // ans: John


// 29) let numbers = [2,4,6,8]; console.log (numbers[2]);
let numbers = [2, 4, 6, 8];
console.log(numbers[2]); // ans: 6

// 30) let text = 'JavaScript' ; console.log(text.slice(4,10));
let text = 'JavaScript' ;

console.log(text.slice(4,10)); // ans: Script


// Section D 
// 31) 

let num = 4;

function isEven(num) {
  if (num % 2 === 0) {
    return true;  
  } else {
    return false; 
  }
}

console.log(isEven(num)); // ans: true


// 32) 

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [10, 20, 30, 40];  
let result = sumArray(numbers);  

console.log(result);  // ans: 100


// 33) 
function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      count++;
    }
  }
  return count;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenCount = countEvenNumbers(numbers);

console.log(evenCount); // ans: 3




// 34) 
function largestNumber(arr) {
  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];  
    }
  }
  return max;
}

let numbers = [10, 25, 7, 99, 56];
console.log(largestNumber(numbers));  // ans: 99