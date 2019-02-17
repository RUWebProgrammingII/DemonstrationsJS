function Vehicle(type) {
	this.type = type || 'car';
	this.model = 'default';
	this.license = '00-000';
}

var car = new Vehicle();
console.log(car); // { type: 'car', model: 'default', license: '00-000' }

function VehicleFactory() {}
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.getVehicle = function(options) {
    return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.getVehicle({ color: 'yellow', turbo: true });
console.log(car instanceof Car); // true

function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var bigfoot = truckFactory.getVehicle({ monster: true, cylinders: 12 });
console.log(bigfoot instanceof Truck); // true
