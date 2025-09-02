/**
30.1 Recap Basic ES6 
    1. var, let, const (difference), Hoisting 
    2. Function: undefine, NaN, default parameter
    3. Template Literals(multi line string), or dynamic string using backtick and placeholder
    4. Arrow functon: 
    5. More About Arrow Function, Annonymous Function, Normal Function vs Arrow Function
    6. Spread Operator, Array Max, Copy Arrays
    7. Destructuring Assignment
    8. Keys, Values, Entries, Add, Delete, Seal, Freeze
    9. Loop on objects

30.2 Access Value, nested object, Optional chaining, Dot notation vs bracket notation
    // const student = {
    //     name : 'Ashiqur',
    //     9 : 70,
    //     'home-address' : 'Islampur',
    //     marks : 97
    // }

    // // 2.1 Dot Notation and Bracket Notation
    // console.log('marks', student.marks);    // dot notation
    // console.log(student['9']);              // bracket notation
    // console.log(student['home-address']);   // bracket notation

    // 2.2 Optional Chaining
    const student = {
        name : 'Ashiqur',
        9 : 70,
        'home-address' : 'Islampur',
        marks : 97,
        family : {
            title : 'mondol',
            mother : {
                name : 'Saleha',
                age : 65
            }
        }
    }

    console.log(student.family.mother?.age);    // '?' 


30.3 Map, Call back Function(which function is passed as argument of anoter function calling time)

    const numbers = [ 20, 30, 40, 50 ];
    
    // const double = [];
    // for (const num of numbers) {
    //     const result = num * 2;
    //     double.push(result);
    // }
    
    const doubleIt = x => x * 2;            
    const double = numbers.map(doubleIt);   // doubleIt is a call back function here
    console.log(double);
    
    const friends = ['Alim', 'Rabbi', 'Munna', 'Sabid', 'Pollob'];
    const firstLetterOfFriends = friends.map(friend => friend[0]);
    console.log(firstLetterOfFriends);
    
    const num = numbers.map((n, index) => {
        console.log(n * index);
        return index;
    });
    console.log(num);

30.4 foreach, filter, find, and differences between them
    // 4.1 forEach()
    const numbers = [2, 3, 4, 5, 6];
    numbers.forEach(x => console.log(x));

    // 4.2 filter()
    const even = numbers.filter(x => x % 2 == 0);
    console.log(even);

    // 4.3 find()
    const firstOdd = numbers.find(x => x % 2 !== 0);
    console.log(firstOdd);]

30.5 (Recap) Map, forEach, filter, find, reduce
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    console.log(sum);

30.6 Class and objects
    class Player {
        constructor(name, age) {
            this.name = name;
            this.location = 'Bangladesh';
            this.age = age;
            // console.log('calling the constructor method');
        }

        goal() {
            console.log('score a goal');
        }

        getTeamName() {
            return 'Barsa';
        }
    }

    const player1 = new Player('Alim', 22);
    const player2 = new Player('Sabid', 21);
    console.log(player1);
    console.log(player2);

    console.log(player1 instanceof Player);

30-7 Inheritance, prototypical, instance
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        eat() {
            console.log(`${this.name} is eating`);
        }
    }

    class Dog extends Animal {
        constructor(name, breed, age) {
            super(name, age);
            this.breed = breed;
        }

        bark() {
            console.log(`${this.name} is barking`);
        }
    }

    class Cat extends Animal {
        constructor(name, color, age) {
            super(name, age);
            this.color = color;
        }

        mew() {
            console.log(`${this.name} is mew`);
        }
    }

    class Bird extends Animal {
        constructor(name, specis, age) {
            super(name, age);
            this.color = specis;
        }

        fly() {
            console.log(`${this.name} is flying`);
        }
    }


    const dog1 = new Dog('coffee', 'Deshi', 1);
    console.log(dog1);
    // dog1.eat();

    const cat1 = new Cat('SP', 'White', 5);
    // console.log(cat1);
    // cat1.eat();

    const bird1 = new Bird('kokil', 'Deshi', 2);
    // console.log(bird1);
    // bird1.eat();
    console.log(bird1 instanceof Bird);

30.8 Encapsulation & this keyword
    class Vehicle {
        constructor(type, brand, price) {
            this.type = type;
            this.brand = brand;
            this.price = price;
        }

        getThis() {
            console.log(this);
        }

        getPrice() {
            return this.price;
        }
    }

    const car1 = new Vehicle('car', 'Kawasaki', 500000);
    const car2 = new Vehicle('car', 'Toyota', 400000);
    // car1.getThis();
    // console.log(car1.getPrice());

    // this in object
    const Player = {
        score : 100,
        getScore : function() {
            return this;
        },
        getScoreArrow : () => {
            return this;        // return empty obj
        }
    }

    // console.log(Player.getScore());
    // console.log(Player.getScoreArrow()); 

    // Encapsulation
    class BankAccount {
        #balance = 100;             // Encapsulation
        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount();
    console.log(account.balance);
    console.log(account.getBalance());

30.9 Recap this module
    Data Access
        Dot notation
        Bracket notation
        optional chaining
    
    Array Operations
        map() => perform operation on each item and return all item
        forEach() => perform operation only
        filter() => return matched elements only
        find()  => return first matched element only
        reduce() => perform operation on entire array return result
    
    OOP
        class
        inheritance
        encapsulation
        this
        prototypical chain
*/

/**
Practice Problem 1: You have the following object:
const student = {
  name: "Arafat",
  age: 21,
  department: {
    name: "CSE",
    subjects: ["Math", "Physics", "Programming"]
  }
};
👉 Access the subject "Programming" using dot notation and bracket notation.
console.log(student.department.subjects[2]);

Practice Problem 2: You have the following object:
const user = {
  profile: {
    email: "user@example.com"
  }
};
👉 Safely access user.profile.address.city using optional chaining.
console.log(user.profile.address?.city);

Practice Problem 3: You are given this array:
const numbers = [1, 2, 3, 4, 5, 6];
👉 Use map to create a new array that contains the squares of each number.
const square = numbers.map(x => x * x);

Practice Problem 4: Given this array:
const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];
👉 Use filter to get all products that cost less than 600.
const products2 = products.filter( products =>  products.price < 600);

Practice Problem 5: Given this array:
const users = [
  { id: 1, name: "Rina" },
  { id: 2, name: "Tarek" },
  { id: 3, name: "Nadia" }
];
👉 Use find to get the user whose name is "Nadia".
const user2 = users.find(user => user.name === 'Nadia');

Practice Problem 6: You are given:
const languages = ["JavaScript", "Python", "C++", "Java"];
👉 Use forEach to print each language with the text:
"I want to learn <language>".
languages.forEach(language => console.log(`I want to learn ${language}`));

Practice Problem 7: Given this array:
const marks = [70, 85, 90, 60, 76];
👉 Use reduce to calculate the total sum of marks.
const sum = marks.reduce((mark, sum) => mark + sum);

Practice Problem 8: Given this array:
const employees = [
  { id: 1, name: "Akash", salary: 40000 },
  { id: 2, name: "Shila", salary: 55000 },
  { id: 3, name: "Imran", salary: 30000 }
];
👉 Use reduce to find the employee with the highest salary.


Practice Problem 9: You have this object:
const book = {
  title: "JavaScript Basics",
  author: {
    name: "John Doe",
    contact: {
      email: "john@example.com"
    }
  }
};
👉 Access the author’s email using dot notation and optional chaining.
console.log(book.author?.contact.email);

const highestSalaryEmployee = employees.reduce((max, emp) => {
    return max.salary > emp.salary ? max : emp;
});

Practice Problem 10: Given this array:
const students = [
  { name: "Ali", marks: 40 },
  { name: "Sara", marks: 75 },
  { name: "Mitu", marks: 60 }
];
👉 Use filter and map together to get an array of names of students who scored 60 or more.

const studentName = students
    .filter(student => student.marks >= 60)
    .map(student => student.name);
*/