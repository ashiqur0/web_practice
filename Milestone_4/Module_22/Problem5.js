function  resultReport( marks ) {
    if (Array.isArray(marks) === false) {
        return 'Invalid';
    }

    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let score = 0, passed = 0, failed = 0;
    for (let i = 0; i < marks.length; i++) {
        score += marks[i];
        marks[i] >= 40 ? passed++ : failed++;
    }

    return { finalScore: Math.round(score / marks.length), pass: passed, fail: failed };
}

let marks = [98, 87, 67, 91, 92, 33, 87];
// let marks = [];
// let marks = [99, 87, 67, 12 ,87];
// let marks = [99];
// let marks = 100;

// { finalScore: 79, pass: 6, fail: 1 }
let restult = resultReport( marks );
console.log(restult);