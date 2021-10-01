'usestrict';
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let jessy = new Dog('Jessy', 'Cocker spaniel', 18);
let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
let dogs = [jessy, fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    let size = 'small';

    if (dogs[i].weight > 10) {
        size = 'large';
    }

    console.log('Dog: ' + dogs[i].name
        + ' is a ' + size
        + ' ' + dogs[i].breed);
}
/*
Dog: Jessy is a large Cocker spaniel
Dog: Fido is a large Mixed
Dog: Fluffy is a large Poodle
Dog: Spot is a small Chihuahua
*/
