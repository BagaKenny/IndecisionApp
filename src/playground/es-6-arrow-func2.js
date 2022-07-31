const add = (a, b) => {
    // console.log(arguments)
    return a + b;
}
console.log(add(2, 3))

const user = {
    name : 'Baga',
    city : ['Yaoundé', 'Bamenda', 'Fribourg'],
    printPlacesLived() {
      return this.city.map((e) =>  this.name + ' has lived in ' + e);

        // this.city.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [2, 4, 8],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((multipli) => this.multiplyBy * multipli)
    }
}

console.log(multiplier.multiply())