type Eater<T> = (animal: T) => void;
 
// A function that eats any animal
const eatAnimal: Eater<Animal> = (animal) => {
    console.log(\`Eating \${animal.name}\`);
};
 
class Animal {
    name: string;
}
 
class Dog extends Animal {
    breed: string;
}
// Contravariant assignment
const eatDog: Eater<Dog> = eatAnimal; // Contravariant position
