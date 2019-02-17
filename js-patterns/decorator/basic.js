var armoredTank = new Vehicle('tank');
armoredTank.addCannon = function(cannonName) {
	if (!this.hasOwnProperty('cannons')) {
		this.cannons = [];
	}
	this.cannons.push({
		id: this.cannons.length + 1,
		name: cannonName
	});
	return this;
};

armoredTank.addCannon('T101').addCannon('T102');
console.log(armoredTank);
/*
    {
        type: 'tank',
        model: 'default',
        license: '00-000',
        cannons: [ { id: 1, name: 'T101' }, { id: 2, name: 'T102' } ],
        addCannon: [Function]
    }
*/

var newCar = new Vehicle();
console.log(newCar); // { type: 'car', model: 'default', license: '00-000' }
