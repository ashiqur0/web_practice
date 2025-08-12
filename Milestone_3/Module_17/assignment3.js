/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
console.log(area / 2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
    console.log("Laptop");
} else if (money >= 10000) {
    console.log("Cycle");
} else {
    console.log("Chocolate ");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for (var i = 1; i <= lastDay; i++) {
    i % 3 === 0? console.log(i + " - medicine") : console.log(i + " - rest");
}

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if (fileName[0] == '#') {
    console.log("Store");
} else {
    var a = fileName.split('.');
    if (a[a.length - 1] == "pdf" || a[a.length - 1] == "docx") {
        console.log("Store");
    } else {
        console.log("Delete");
    }
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
console.log(student.name + student.roll + "." + student.department + "@ph.ac.bd");

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
while (experience--) {
    startingSalary += startingSalary * 5 / 100;
}
console.log(startingSalary.toFixed(2));