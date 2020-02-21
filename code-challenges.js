// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


const divisible = (num) => {
    if(num % 3 === 0){
    return num + " is divisible by three"
} else if (num % 3 !== 0){
    return num + " is not divisible by three"
}else{
    return "must type in a number"
}
}
console.log(divisible(num1))
console.log(divisible(num2))
console.log(divisible(num3))



// // --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
const capitalizer = (array) => {
    let eachItem = array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return eachItem.join(", ")
}
console.log(capitalizer(randomNouns))


// // --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// // Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNum = mixedDataArray.filter(function (item) {
    return (parseInt(item) == item);
 
});

console.log(onlyNum.sort((a, b) => a - b))

// // --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// // Use the test variables provided.

var vowelTester1 = "learn" 
// // // Expected output: 1
var vowelTester2 = "throw"
// // // Expected output: 3


const getIndexOfFirstVowel = (word) => {
    var vowels = ["a","e","i","o","u"];
    for (let i=0; i < word.length; i++){
        for (let j=0; j < vowels.length; j++) {
           if (word.charAt(i) == vowels[j]){
              return i;
           }
        }
    }
}

console.log(getIndexOfFirstVowel(vowelTester1));
console.log(getIndexOfFirstVowel(vowelTester2));


// // --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"


function calculator(a, op, b) {
if (op == '/' && b === 0) return "Can't divide by 0!"
if (op == '+') return a + b;
if (op == '*') return a * b;
if (op == '-') return a - b;
if (op == '/') return a / b; 
}




// // Uncomment and use the following console logs to test your function
console.log(calculator(3, "*" ,9))
// // Expected output: 27

console.log(calculator(16, "+" ,3))
// // Expected output: 19

console.log(calculator(89, "/" ,0))
// // Expected output: "Can't divide by 0!"
