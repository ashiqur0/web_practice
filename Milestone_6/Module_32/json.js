const student = {
    name : 'Alim',
    roll : 14,
    batch : '23rd',
    departmet : 'CSE',
    marks : { chemistry : 88, physics : 90, math : 99 }
};

console.log(typeof student);

// convert object to JSON
const studentJSON = JSON.stringify(student);
console.log(typeof studentJSON);

// convert object to JSON
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);
console.log(typeof studentObject);