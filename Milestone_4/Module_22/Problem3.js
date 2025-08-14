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

// player1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
// player2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
// let player1 = { name: "Germany", foul: 12, cardY: 0, cardR: 0 };
// let player2 = { name: "Sweden", foul: 7, cardY: 4, cardR: 1 };
// let player1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// let player2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
let player1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
let player2 = "France";

let restult = bestTeam( player1, player2 );
console.log(restult);