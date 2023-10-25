// => Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.
function calculateTriangleArea(base, height) {
    const area = ((base * height) / 2);
    return area;
}
const areaResult = calculateTriangleArea(7, 8);
console.log(areaResult);


// Problem 2: Write a function to convert degrees to radians.
function degToRad(degrees) {
    let pi = Math.PI;
    let radian = (pi / 180) * degrees;
    return radian;
}
let resultInRadians = degToRad(45);
console.log(resultInRadians);


// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}
let factNum = calculateFactorial(6);
console.log(factNum);
// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumber(9));


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

// Problem 9: Write a function to find the maximum of five numbers.



// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

