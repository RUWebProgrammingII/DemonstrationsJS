// Basic Constructors
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function() {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}

var rollsRoyce = new Car('Rolls Royce', 2005, 10000);
var mondeo = new Car('Ford Mondeo', 2008, 15000);

console.log(rollsRoyce.toString());
console.log(mondeo.toString());
