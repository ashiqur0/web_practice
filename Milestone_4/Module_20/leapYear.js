function isLeapYear(year) {
    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if (year % 4 === 0) return true;
    return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2100));
console.log(isLeapYear(2020));
console.log(isLeapYear(2022));