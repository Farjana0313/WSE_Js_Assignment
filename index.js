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
function mergeArrays(arr1, arr2) {
    let mergedArr = arr1.concat(arr2);
    console.log(mergedArr);
}
mergeArrays([1, 2, 3], [4, 5, 6]);

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return "It's leap year";
    } else {
        return "Not leap year"
    }
}
console.log(isLeapYear(2001));

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates() {
    const array = ['apple', 'banana', 'cherry', 'apple'];
    const newArray = [...new Set(array)];
    console.log(newArray);
}
removeDuplicates();


// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}
console.log(convertToCelsius(78));

// Problem 9: Write a function to find the maximum of five numbers.
function maxOfFiveNumbers(num1, num2, num3, num4, num5) {
    let max = Math.max(num1, num2, num3, num4, num5);
    return max;
}
console.log(maxOfFiveNumbers(1, 2, 3, 4, 5));


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
function evenOdd(string) {
    if (string.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }

}
console.log(evenOdd("JavaScript"));
console.log(evenOdd("hello"));


