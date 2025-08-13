let a = "I am hard working person";
let b = a.split(' ');
a = "";
for (let i = b.length - 1; i >= 0; i--) {
    a += b[i] + " ";
}
console.log(a);
const users = [{ name: "Alice" }]
console.log(users[0].name)