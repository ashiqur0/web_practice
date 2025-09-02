/**
 * 
 * Module Summary: (Topic Name)
 * 1. var, let, const (difference), Hoisting
 * 2. Function: undefine, NaN, default parameter
 * 3. Template String(multi line string), or dynamic string using backtick and placeholder3. Template String(multi line string), or dynamic string using backtick and placeholder
 * 4. Arrow functon: 
 * 5. More About Arrow Function, Annonymous Function, Normal Function vs Arrow Function
 * 6. Spread Operator, Array Max, Copy Arrays
 * 7. Destructuring
 * 8. Keys, Values, Entries, Add, Delete, Seal, Freeze
 * 9. Loop on objects
 * 
 * 
 * ChatGPT Search: 
 * 1. Common ES6 Features
 * 2. Give me 10 practice problem on topic 1 to 6. Do not give me answer and any hints.
 * 
 * 
// 1. var, let, const (difference), Hoisting
    non primitive (object, array) constant হলেও চেঞ্জ করা যায়।

// 2. Function: undefine, NaN, default parameter
    function sum(num1 = 0, num2 = 0) {
        console.log('Sum:', num1 + num2);
    }

    function multiply(num1 = 1, num2 = 1) {
        console.log('Multiply:', num1 + num2);
    }

    function fullName(firstName, lastName = '') {
        console.log('Full Name:', firstName + lastName);
    }   

    sum(10);
    multiply(5, 10);
    fullName('Kamruzzaman');

// 3. Template String(multi line string), or dynamic string using backtick and placeholder
    function sum(num1, num2) {
        const result = num1 + num2;
        const output = `Sum of ${num1} and ${num2} is ${result}`;
        console.log(output);
    }

    sum(10, 20);

// 4. Arrow functon: 
    // Normal Function:
    function sum(x, y) {
        return x + y;
    }
    
    // Function Expression
    const sum2 = function(x, y) {
        return x + y;
    }
    
    // Arrow Function
    const sum3 = (x, y) => x + y;
    
    const result = sum(5, 7);
    console.log(double(2));
    
    // Multiline Arrow Function
    const doMath = (x, y) => {
        const makeDouble = x * 2;
        const againDouble = y * 2;
        const result = makeDouble + againDouble;
    
        return result
    }

    console.log(doMath(5, 10));

5. More About Arrow Function, Annonymous Function, Normal Function vs Arrow Function
    // No parameter Arrow Function
    const greet = () => console.log('Hello');
    greet();

    // Single Parameter Arrow Function
    const double = x => x * 2;
    const square = x => x * x;

    // Multi parameter Arrow Function
    const sum = (x, y) => x + y;

    // Annonymous Arrow Function
    document.getElementById('btn-clicked').addEventListener('click0', () => {
        // function body
    })

6. Spread Operator, Array Max, Copy Arrays
    // Spread Operator
    const numbers = [1, 2, 3, 4];
    console.log(numbers);
    console.log(...numbers);

    // Max element
    console.log('max: ', Math.max(12, 11, 22, 19));
    console.log('max: ', Math.max(...numbers));

    // Array Copy
    // const first = [1, 2, 3, 4, 5];
    // const second = first;
    // second.push(6);
    // console.log(first);
    // console.log(second);
    const first = [1, 2, 3, 4, 5];
    const second = [...first];
    second.push(6);
    console.log(first);
    console.log(second);

    const third = [0, ...first, 6, 7, 8];
    console.log(third);
    const fourth = [...first, ...second, ...third];
    console.log(third);

    // object এর ক্ষেত্রে
    const person = {name : 'Ashiqur', age : 27};
    const employee = {designation : 'developer', ...person};
    console.log(employee);

7. Destructuring
    // 7.1 Without Destructuring
    // const products = { name : 'Shirt', price : 700, quantity : 3 };
    // const discount = products.price * products.quantity * 20 / 100;
    // const payAmount = products.price * products.quantity - discount;
    // const vatAmount = products.price * products.quantity * 7 / 100;
    // const totalAmount = payAmount + vatAmount;
    // console.log(totalAmount);

    // 7.2 Using Destructuring (same way array element can also destructur)
    const { price, quantity } = { name: 'Shirt', price: 700, quantity: 3 };
    const discount = price * quantity * 20 / 100;
    const payAmount = price * quantity - discount;
    const vatAmount = price * quantity * 7 / 100;
    const totalAmount = payAmount + vatAmount;
    console.log(totalAmount);

    // 7.3 Destructuring for Array
    const marks = [98, 97, 99, 95];
    const [physics, chemistry] = marks;
    console.log(physics, chemistry);

    // 7.4 Define new variable with object destructuring
    const products = { name: 'Shirt', price: 700, quantity: 3 };
    const {price : p, quantity : q} = products;
    console.log(p);

8. Keys, Values, Entries, Add, Delete, Seal, Freeze
    const employee = {
        name : 'Ashiqur',
        designation : 'QA',
        salary : 20000,
        experience : 1
    }

    const keys = Object.keys(employee);
    const values = Object.values(employee);
    const entrys = Object.entries(employee);
    // console.log(keys); 
    // console.log(values); 
    // console.log(entrys); 

    // 8.1 Add Delete Property from Object
    console.log(employee);

    employee.location = 'Bogura';   // add property location
    console.log(employee);

    delete employee.name;     // delete property name
    console.log(employee);

    // 8.2 Freez -> prevent add, delete, and modification of an object
    // Object.freeze(employee);
    // employee.gender = 'Male';   // couldn't add the property gender
    console.log(employee);

    // 8.3 Seal -> prevent add and delete but allow modification
    Object.seal(employee);
    employee.salary = employee.salary + 5000;
    console.log(employee);

9. Loop on objects
    const employee = {
        name : 'Ashiqur',
        designation : 'QA',
        salary : 20000,
        experience : 1
    }

    for (const key in employee) {
        console.log(key, employee[key]);
    }

    const keys = Object.keys(employee);
    for (const key of keys) {
        console.log(key);
    }
 *  */

// Rest (reduce) 
// const numbers = [ 20, 30, 40, 50 ];
// const sum = numbers.reduce((a, b) => a + b);
// console.log(sum);

// Practice Problem 1: Write a program that declares a variable using let and tries to re-declare it inside the same block. Observe what happens.

// let num = 10;
// if (true) {
//     let num = 100;
//     console.log(num);
// }

// Observation: block variable executed in block scope

// Practice Problem 2: Create a constant object using const and try to modify one of its properties.
// const person = { name : 'Ashiqur', age : 27, nationality : 'Bangladeshi' };
// person.name = 'Ashiqur Rahman';
// console.log(person);

// Observation: Value of the constant object property changed

// Practice Problem 3: Convert the following function into an arrow function:
// function multiply(a, b) {
//   return a * b;
// }

// Arrow Function
// const multiply = (a, b) => a * b;

// Practice Prblem 4: Write a program that prints a greeting message using template literals with variables name and age.

// const name = 'Ashiqur';
// const age = 27;
// const message = `Hello ${name}, You are ${age} years old.`;
// console.log(message);

// Practice Prblem 5: Define a function greet with a default parameter name = "Guest". Call it with and without an argument.

// function greet(name = 'guest') {
//     console.log(`Hello ${name}`);
// }

// greet('Ashiqur');
// greet();

// Practice Prblem 6: Use array destructuring to extract the first and third elements from the array [10, 20, 30, 40].

// const [first, , third] = [10, 20, 30, 40];
// console.log(first, third);

// Practice Prblem 7: Use object destructuring to extract title and author from the object:
// const book = { title: "ES6 Guide", author: "John Doe", year: 2015 };
// const {title, author} = book;
// console.log(title, author);

// Practice Prblem 8: Write a function that accepts any number of arguments and returns their sum using the rest operator.

// function sum() {
//     const numbers = [...arguments];
//     return numbers.reduce((a, b) => a + b);
// }

// console.log(sum(10, 20, 30));

//  Practice Prblem 9: Create a new array [1, 2, 3, 4, 5] and use the spread operator to copy it into another array, then add two more numbers at the end.

// const array = [1, 2, 3, 4, 5];
// const array2 = [...array, 6, 7];

// console.log(array);
// console.log(array2);

//  Practice Prblem 10: Merge two objects using the spread operator:

// const user = { name: "Alice" };
// const info = { age: 25, country: "Bangladesh" };
// const userInfo = {...user, ...info};
// console.log(userInfo);