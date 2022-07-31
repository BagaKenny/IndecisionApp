


class Person {
    //C'est ici que lon mets les données
    //On peut definir une valeur par défaut
    constructor(name = 'Anonyme', age = 0) {
        this.name = name;
        this.age = age;
    }
    //On pourrait aussi créer directement une fonction et la retourner
    //Avec le this avec le template string
    getGretting() {
        return `Hi his name is ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }

}



//Possibilité d'extend une classe dans une autre
class Student extends Person {
    constructor(name, age, diplome) {
        super(name, age); //Avec SUPER() On appelle le parent donc la classe Person
        this.diplome = diplome;
    }

    hasMajor() {
        //Utilisation du logical not operator
        return !!this.diplome;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor() === true) {
            return `${this.name} is ${this.age} year(s) old and I majored in ${this.diplome}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, localisation){
        super(name, age);
        this.localisation = localisation
    }

    homeLocation() {
        return !!this.localisation
    }

    getGretting() {
        let greeting = super.getGretting();

        if(this.localisation) {
            return greeting += ` And he comes ${this.localisation}`
        }

        return greeting
    }
}

//Comme ceci que l'on appelle une nouvelle instance de la class
const me = new Traveler('Baga Kenny', 22, 'Fribourg');

const other = new Traveler()
console.log(me.getGretting())
console.log(other.getGretting())
