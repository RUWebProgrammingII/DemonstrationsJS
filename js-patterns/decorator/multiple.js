function MacBook() {
	this.cost = function() {
		return 997;
	}
	this.screenSize = function() {
		return 15;
	}
}

 Decorator 1 (Add memory)
function Memory(macBook) {
	var cost = macBook.cost();
	macBook.cost = function() {
		return cost + 75;
	}
}

 Decorator 2 (Buy insurance)
function Insurance(macBook) {
	var cost = macBook.cost();
	macBook.cost = function() {
		return cost + 250;
	}
}

var newMb = new MacBook();
Memory(newMb);
Insurance(newMb);
console.log(newMb.cost());  1322
console.log(newMb.screenSize());  15
