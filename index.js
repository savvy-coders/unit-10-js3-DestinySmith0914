// JavaScript Coding Challenge

//:) 1. Create a function named 'createPerson' that returns an object named 'person' using object literal syntax. The object should have properties 'name' and 'age', with your name and age as the values.


// 2. Create a function 'logPersonProperties' that takes a 'person' object as an argument and returns the 'name' and 'age' properties of the 'person' object using dot notation.


// 3. Create a function 'modifyAge' that takes a 'person' object and a new age as arguments, modifies the 'age' property of the 'person' object to the new age, and returns the updated object.


// 4. Create a function 'addJob' that takes a 'person' object and a job as arguments, adds a new property 'job' to the 'person' object with the job as its value, and returns the updated object.


// 5. Create a function 'deleteAge' that takes a 'person' object as an argument, deletes the 'age' property from the 'person' object, and returns the updated object.


// 6. Create a function 'addGreet' that takes a 'person' object as an argument, adds a method 'greet' to the 'person' object that returns a greeting message using the 'name' property, and calls the 'greet' method.


// 7. Create a function 'createNumbersArray' that returns an array named 'numbers' with five numbers of your choice.


// 8. Create a function 'logFirstAndThird' that takes a 'numbers' array as an argument and returns the first and third elements of the 'numbers' array using their indices.


// 9. Create a function 'modifySecond' that takes a 'numbers' array and a new number as arguments, modifies the second element of the 'numbers' array to the new number, and returns the updated array.


// 10. Create a function 'logLength' that takes a 'numbers' array as an argument and returns its length.


// 11. Create a function 'iterateWithFor' that takes a 'numbers' array as an argument and uses a for loop to iterate over the 'numbers' array and return each element.


// 12. Create a function 'iterateWithWhile' that takes a 'numbers' array as an argument and uses a while loop to iterate over the 'numbers' array and return each element.


// 13. Create a function 'iterateWithForOf' that takes a 'numbers' array as an argument and uses a for...of loop to iterate over the 'numbers' array and return each element.


// 14. Create a function 'createJSON' that takes a 'person' object as an argument, creates a JSON string named 'json' representing the 'person' object, and returns the JSON string.


// 15. Create a function 'parseJSON' that takes a 'json' string as an argument, parses the 'json' string into a JavaScript object, and returns the object.


// 16. Create a function 'stringifyPerson' that takes a 'person' object as an argument, stringifies the 'person' object into a JSON string, and returns the string.


function createPerson() {
    const person = {
        name: 'Destiny',
        age: 18
    };
    return person;
}

function logPersonProperties(person) {
    return `Name: ${person.name}, Age: ${person.age}`;
}

function modifyAge(person, newAge) {
    person.age = newAge;
    return person;
}

function addJob(person, job) {
    person.job = job;
    return person;
}

function deleteAge(person) {
    delete person.age;
    return person;
}

function addGreet(person) {
    person.greet = function() {
     return `Hello, my name is ${this.name}`;
    };
    return person.greet();
}

function createNumbersArray() {
    return [1, 2, 3, 4, 5];
}

function logFirstAndThird(numbers) {
    return `First: ${numbers[0]}, Third: ${numbers[2]}`
}
 
function modifySecond(numbers, newNumber) {
    numbers[1] = newNumber;
    return numbers;
}

function logLength(numbers) {
    return numbers.length;
} 

function iterateWithFor(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i]);
    }
    return result;
}

function iterateWithWhile(numbers) {
    let result = [];
    let i = 0;
    while (i < numbers.length) {
        result.push(numbers[i]);
    i++;
 }
 return result;
}

function iterateWithForOf(numbers) {
    let result = [];
    for (const number of numbers) {
        result.push(number);
    }
    return result;
}

function createJSON(person) {
    return JSON.stringify(person);
}

function parseJSON(json) {
    return JSON.parse(json);
}

function stringifyPerson(person) {
    return JSON.stringify(person);
}