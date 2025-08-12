/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
while (experience--) {
    startingSalary += startingSalary * 5 / 100;
}
console.log(startingSalary.toFixed(2));