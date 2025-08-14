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

// let arr1 = [1, 2, 3]; 
// let arr2 = [1 , 2 , 3];
// let arr1 = [34 , 5 ,7 ,9 ]; 
// let arr2 = [ 34 , 5 , 7 ];
// let arr1 = [1, undefined , 3]; 
// let arr2 = [1,null ,3];
// let arr1 = [1 , "4" , 4]; 
// let arr2 = [1 , 4  , 4];
// let arr1 = [2 , 5 , 6]; 
// let arr2 = 256;
let arr1 = {data: [2 , 5 , 6] }; 
let arr2 = [2 , 5 , 6];


let restult = isSame(arr1 , arr2);
console.log(restult);