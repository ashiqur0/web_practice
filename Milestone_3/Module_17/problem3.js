/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for (var i = 1; i <= lastDay; i++) {
    i % 3 === 0? console.log(i + " - medicine") : console.log(i + " - rest");
}