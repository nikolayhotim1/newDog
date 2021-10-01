'usestrict';
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let dog = new Dog('Jasy', 'Cocker spaniel', 18);
alert(dog.name);
alert(dog.breed);
alert(dog.weight);
alert(dog);
