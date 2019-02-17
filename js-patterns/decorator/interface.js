var Interface = function(name, methods) {
	if (arguments.length != 2) {
		throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
	}
	this.name = name;
	this.methods = [];
	for (var i = 0, len = methods.length; i < len; i++) {
		if (typeof methods[i] !== 'string') {
			throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
		}
		this.methods.push(methods[i]);
	}
};

// Static class method.
Interface.ensureImplements = function(object) {
	if (arguments.length < 2) {
		throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
	}
	for (var i = 1, len = arguments.length; i < len; i++) {
		var interface = arguments[i];
		if (interface.constructor !== Interface) {
			throw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.");
		}
		for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
			var method = interface.methods[j];
			if (!object[method] || typeof object[method] !== 'function') {
				throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
			}
		}
	}
};

var MacBook = new Interface('MacBook', [
	'addEngraving',
	'addParallels',
	'add4GBRam',
	'add8GBRam',
	'addCase',
	'getPrice'
]);
var MacBookPro = function() {
	Interface.ensureImplements(this, MacBook);
}

MacBookPro.prototype = {
	addEngraving: function() {},
	addParallels: function() {},
	add4GBRam: function() {},
	add8GBRam: function() {},
	addCase: function() {},
	getPrice: function() {
		return 999;
	}
};

var newMBP = new MacBookPro();
console.log(newMBP.getPrice()); // 999

// Abstract decorator
var MacbookDecorator = function(macBook) {
	Interface.ensureImplements(macBook, MacBook);
	this.macBook = macBook;
};

MacbookDecorator.prototype = {
	addEngraving: function() {
		return this.macBook.addEngraving();
	},
	addParallels: function() {
		return this.macBook.addParallels();
	},
	add4GBRam: function() {
		return this.macBook.add4GBRam();
	},
	add8GBRam: function() {
		return this.macBook.add8GBRam();
	},
	addCase: function() {
		return this.macBook.addCase();
	},
	getPrice: function() {
		return this.macBook.getPrice();
	}
};

var CaseDecorator = function(macBook) {
	MacbookDecorator.call(this, macBook);
}

// Extend the prototype
CaseDecorator.prototype = Object.create(MacbookDecorator);

CaseDecorator.prototype.addCase = function() {
	return this.macBook.addCase() + ' Adding case to macbook';
};

CaseDecorator.prototype.getPrice = function() {
	return this.macBook.getPrice() + 45;
};

var macBookPro = new MacBookPro();
console.log(macBookPro.getPrice()); // 999

macBookPro = new CaseDecorator(macBookPro);
console.log(macBookPro.getPrice());
