function totalFine( fare ) {
    if (fare <= 0 || typeof fare !== 'number') {
        return 'Invalid';
    }

    return fare + fare * 20 / 100 + 30;
}

function  onlyCharacter( str ) {
    if (typeof str !== 'string') {
        return 'Invalid';
    }

    let restult = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            restult += str[i];
        }
    }

    return restult.toUpperCase();
}

function  bestTeam( player1, player2 ) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return 'Invalid';
    }

    let unFareValueOfPlayer1 = player1.foul + player1.cardY + player1.cardR;
    let unFareValueOfPlayer2 = player2.foul + player2.cardY + player2.cardR;

    if (unFareValueOfPlayer1 < unFareValueOfPlayer2) {
        return player1.name;
    } else if (unFareValueOfPlayer1 > unFareValueOfPlayer2) {
        return player2.name;
    } else {
        return 'Tie';
    }
}

function  isSame(arr1 , arr2 ) {
    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
        return 'Invalid';
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

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