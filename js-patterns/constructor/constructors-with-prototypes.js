// Constructors With Prototypes
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles';
};

var rollsRoyce = new Car('Rolls Royce', 2005, 10000);
var mondeo = new Car('Ford Mondeo', 2008, 15000);

// They now share the same implementation of toString through the prototype
console.log(rollsRoyce.toString());
console.log(mondeo.toString());
