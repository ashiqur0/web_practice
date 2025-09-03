/**
31.1 Primitive and Non-primitive Data type in JavaScript
     Primitive: String, Number, BigInt, Boolean, Undefine, Null, Symbol
     Non-primitive: Object, Array, Function

31.2 Null vs Undefine (Interview Question)
    | Feature         | `null`                                                      | `undefined`   
    | --------------- | ----------------------------------------------------------- | 
    | **Meaning**     | Intentionally empty value (nothing).                        | A variable has been declared but not assigned any value.      |
    | **Type**        | `object` (this is actually a long-standing JavaScript bug). | `undefined`    
    | **Assigned by** | Developer (you set it explicitly).                          | JavaScript (by default when no value is given).
    | **Usage**       | Used when you want to say “no value” or “empty”.            | Indicates “not initialized” or “not defined”.
    | **Example**     | `let car = null;` → The variable `car` is empty.            | `let car;` → The variable `car` is declared but not assigned. |

31-3 Different Truthy and Falsy Values in JavaScript
    let data;           // falsy
    data = '';          // falsy
    data = ' ';         // truthy
    data = 0;           // falsy
    data = '0';         // truthy
    data = false;         // falsy
    data = true;         // truthy
    data = null;         // falsy
    data = {};         // truthy
    data = [];         // truthy
    // console.log(data? 'truthy' : 'falsy');

    // Logical Not: to get opposite boolean value
    console.log(!data? 'truthy' : 'falsy');

31.4 == vs === and ! vs !!
    == (equality operator) covert a value to same datatype of other value first then compare (type coercion)
    === (strict equality operator) compare type first. If match then compare value
    ! convert a value to its opposite type boolean value
    !! convert a value to its same type boolean value

31.5 scope 
    global, 
    functional(local), 
    block, 
    lexical (closure))

31.6 CallBack function -> when a function is sent as a argument of another function calling
    
31.7 Arguments, Passed by Value, Passed by reference
31.8 Closure -> 
    function outer(name) {
        let counter = 0;
        return function() {
            console.log(name, ++counter);
        }
    }

    const rahimCounter = outer('Rahim');
    rahimCounter();
    rahimCounter();
    rahimCounter();
    rahimCounter();
    const karimCounter = outer('Karim');
    karimCounter();
    karimCounter();
    karimCounter();
    rahimCounter();
    rahimCounter();
    karimCounter();

31.9 Recap the Module
    Common Interview Question
    1. Difference between Primitive and Non-Primitive Data Type
    2. Explain Truthy and Falsy value with example.
    3. Difference between null and undefine.
    4. Difference between == (double equal) and === (triple equal)
    5. What is scope in JavaScript?
    6. Define block scope and global scope in JavaScript
    7. Is JavaScript a dynamic typed programming language?
    8. Type Coercion 
    9. What is Hoisting in JavaScript? 
    10. How to use callback function in JavaScript?
    11. Explain closure in JavaScript?
    12. Explain passed by value and passed by reference in JavaScript

*** ChatGPT: Give me some javaScript concept interview question.
*/