const procucts = [
    {name : 'shampoo', price : 300, quantity : 2},
    {name : 'ciruni', price : 100, quantity : 3},
    {name : 'shirt', price : 700, quantity : 5},
    {name : 'pant', price : 1200, quantity : 1}
]

function totalPrice(procucts) {
    let total = 0;
    for (const item of procucts) {
        total = total + item.price * item.quantity;
    }
    return total;
}

const price = totalPrice(procucts);
console.log(price);