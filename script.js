// Exercise 1:

// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}

const arr = [10, 20, 30, 40]

function destructureExample(object, array) {
    const {name, age} = object;
    const [val1,, val3] = array;

    return {name, age}
}
const result = destructureExample(obj, arr)
console.log(result);

// Exercise End

// Exercise 2:

// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

function sumNumbers(...allNumber) {
    return allNumber.reduce((preValue, currentValue) => preValue + currentValue, 0)
}

console.log(sumNumbers(1, 2, 3, 4, 5,))

// Exercise End

// Exercise 3:

// Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."

function createGreeting(name) {
    return `"Hello, ${name}! Welcome to our website."`
}
console.log(createGreeting('Alice'))

// Exercise End

// Exercise 4:

// Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.

function isEven(number) {
    return Number % 2 === 0 ? "Even" : "Odd"
}
console.log(isEven(7))

// Exercise End

// Exercise 5:

// Convert the following function to an arrow function:
// function multiply(a, b) {
// return a * b;
// }

const multiply = (a, b) => a * b
console.log(multiply(5, 6))

// Exercise End

// Exercise 6:

// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

function getLargestNumber(a, b) {
    return a > b ? a : b
}

console.log(getLargestNumber(10, 5))

// Exercise End

// Exercise 7:

// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

const address = {
    street: '123 Main St',
    country: 'USA'
};

function getAddressCity(address) {
    return address ?. city ?? 'Unknown';
}

console.log(getAddressCity(address))

// Exercise End

// Exercise 8

// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

function doubleNumbers(numbers) {
    return numbers.map ((num) => num*2) 
}

console.log(doubleNumbers([1, 2, 3, 4, 5]))

// Exercise End

// Exercise 9: 

// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

function filterEvenNumbers(numbers) {
    return numbers.filter((number)=>number % 2 === 0)
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5]))

// Exercise End

// Exercise 10: 

// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

function sumArray(num) {
   return num.reduce((preeValue, curreentValue)=> preeValue + curreentValue, 0)
}
console.log(sumArray([1, 2, 3, 4, 5]))

// Exercise End

// Exercise 11: 

// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

function sortNumbers(numbers) {
    return numbers.slice().sort((a,b) => a - b)
}
console.log(sortNumbers([5, 2, 8, 1, 4]))

// Exercise End