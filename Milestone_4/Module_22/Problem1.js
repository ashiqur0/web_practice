function totalFine( fare ) {
    if (fare <= 0 || typeof fare !== 'number') {
        return 'Invalid';
    }

    return fare + fare * 20 / 100 + 30;
}
// let restult = totalFine(200);
// let restult = totalFine(50);
// let restult = totalFine(552);
// let restult = totalFine(-35);
// let restult = totalFine("65");
let restult = totalFine("Gorib tai ticket katinai");
console.log(restult);