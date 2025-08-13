const phones = [
    {brand : 'Samsung', price : 27000, camera : '50 Mp', color : 'black'},
    {brand : 'Apple', price : 150000, camera : '50 Mp', color : 'black'},
    {brand : 'Xiomi', price : 18000, camera : '50 Mp', color : 'black'},
    {brand : 'Oppo', price : 25000, camera : '50 Mp', color : 'black'},
    {brand : 'Vivo', price : 31000, camera : '50 Mp', color : 'black'},
    {brand : 'Techno', price : 15000, camera : '50 Mp', color : 'black'},
];

function max(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

const expensivePhone = max(phones);
console.log(expensivePhone);