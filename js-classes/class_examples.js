/**
 * Demonstration on how to use ES6 classes
 */

 // Part I - Redo the Bug, Ant, Cockroach thing

 // 1. Define a class for Bug
class Bug {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  makeSound() {
    console.log('Make bug sound.');
  }
  die() {
    console.log('Die bug.');
  }
}

    // 1.1. Define method makeSound

    // 1.2. Define die method

 // 2. Define a class for Cockroach, inherit from Bug
 class Cockroach extends Bug {
   constructor(name, age) {
     super(name, age);
     this.canFly = age > 1;
   }
   makeSound() {
     console.log('Make cockroach sound.');
   }
 }

    // 2.2. Define method makeSound

 // 3. Define a class for Ant, inherit from Bug
class Ant extends Bug {
  constructor(name, age) {
    super(name, age);
  }
}

var cockroach = new Cockroach('Joey', 5);
console.log(cockroach.toString());
var ant = new Ant('Antman', 25);

cockroach.die();
cockroach.makeSound();

ant.die();
ant.makeSound();
