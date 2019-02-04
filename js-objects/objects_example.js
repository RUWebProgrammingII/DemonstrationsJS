/**
 * Demonstrations on how to create, update and manipulate objects
 */

/* Part I - Working with the object */

    // 1. Declare an object using object literals, with both stringed props and not
    var myObj = {
      x: 1,
      y: 2,
      z: 3
    };

    // 2. Change properties using [] and dot notation
    myObj.x = 50;
    myObj['y'] = 30;

    console.log(myObj);

    // 3. Add a property dynamically
    var someValue = 'myNewProperty';
    myObj.someValue = 400;
    myObj[someValue] = 400;

    console.log(myObj);

    // 4. Pass the object to a function which adds a property and console.log afterwards

    function myNiceFunction(obj) {
      obj.property = 300;
    }

    myNiceFunction(myObj);
    console.log(myObj);

    // 5. Object.getOwnPropertyDescriptor()
    console.log(Object.getOwnPropertyDescriptor(myObj, 'myNewProperty'));

    // 6. Delete a property from the object literal object
    //delete myObj.myNewProperty;

    console.log(myObj);

    // 7. Set the defineProperty as non-configurable
    Object.defineProperty(myObj, 'myNewProperty', {
      writable: false,
      configurable: false
    });

    myObj.myNewProperty = 1337;

    console.log(myObj);

    // 8. Try to delete another property
    delete myObj.x;

    console.log(myObj);

    // 8.1. Define a getter for the User for fullName
    var user = {
      firstName: 'Arnar',
      lastName: 'Leifsson',
      get fullName() {
        return this.firstName + ' ' + this.lastName;
      },
      set fullName(name) {
        var splittedName = name.split(' ');
        this.firstName = splittedName.slice(0, 1).join('');
        this.lastName = splittedName.slice(1).join(' ');
      }
    };


    console.log(user.fullName);
    user.fullName = 'A b c d e';
    console.log(user.firstName);
    console.log(user.lastName);

    // 8.2. Define a setter for the User for fullName

/* Part II - Object-oriented JS */

    // 9. Create a constructor function for Bug(), which takes in name, age
    function Bug(name, age) {
      this.name = name;
      this.age = age;
    };

    // 10. Define makeSound()
    Bug.prototype.makeSound = function() {
      console.log('Make bug sound.');
    };

    // 10.1. Define die()
    Bug.prototype.die = function() {
      console.log('Die bug.');
    };

    // 11. Create a constructor function for Cockroach(), which takes in name, age and if age is more than 1 canFly = true
    function Cockroach(name, age) {
      Bug.call(this, name, age);
      this.canFly = age > 1;
    };

    // 12. Assign the prototype to Bug and constructor to Cockroach
    Cockroach.prototype = Object.create(Bug.prototype);

    // 13. Define a method for Cockroach called makeSound()
    Cockroach.prototype.makeSound = function() {
      console.log('Make cockroach sound.');
    };

    // 14. Create an object of Cockroach()
    var joey = new Cockroach('Joey', 3);
    joey.makeSound();

    // 15. Loop through it and use both the in operator and hasOwnProperty()
    for (var prop in joey) {
      if (joey.hasOwnProperty(prop)) {
        console.log(prop);
      }
    }

    // 16. Create a constructor function for Ant(), which takes in name and age
    function Ant(name, age) {
      Bug.call(this, name, age);
    };

    // 17. Make Ant inherit from Bug
    Ant.prototype = Object.create(Bug.prototype);

    // 18. For a new instance of Ant call makeSound
    var ant = new Ant('Antman', 2);
    ant.makeSound();

    // 19. Extend Array.prototype with a function called evenElements()
    Array.prototype.myCustomizedFunction = function() {
      // My own implementation
    };


    console.log([1, 2, 3].myCustomizedFunction());
