// const square = function (x) {
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x
// }

// const squarry = (x) => x * x;

// console.log(squarry(10));

const idCard = {
    name : 'Thierry',
    firstname : 'Henry'
}
const getFirstName = (idCard) => {
    return idCard.firstname
}

const firstName = (id) => id.split(' ')[0];

console.log(firstName('Kenny Baga'))