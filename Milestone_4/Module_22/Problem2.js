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

// let restult = onlyCharacter("  h e llo wor   ld");
// let restult = onlyCharacter("Cy   bar- At  tac k  ");
// let restult = onlyCharacter(["hack", "me"]);
let restult = onlyCharacter(true);
console.log(restult);