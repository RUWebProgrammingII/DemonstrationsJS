/* PART I - Understanding asynchronous functions */

// First example
function populateArray() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve([1, 2, 3, 4, 5]);
		}, 1000);
	});
};

function getArray() {
	var myArr = [];
	populateArray().then(data => {
		myArr = data;
	});
	return myArr;
};

getArray(); // ?

// Second example
getNextSequence.initialNumber = 1;

function getNextSequence() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(getNextSequence.initialNumber++);
		}, 1000);
	});
}

// 1. Use getNextSequence to count to four using chained promises
// getNextSequence().then(function (number) {
// 	console.log(number);
// 	return getNextSequence();
// }).then(function (number) {
// 	console.log(number);
// 	return getNextSequence();
// }).then(function (number) {
// 	console.log(number);
// 	return getNextSequence();
// }).then(function (number) {
// 	console.log(number);
// });

// 2. Convert the chained promises to async / await instead
// (async function() {
// 	console.log(new Date());
// 	var one = await getNextSequence();
// 	var two = await getNextSequence();
// 	var three = await getNextSequence();
// 	var four = await getNextSequence();
// 	console.log(new Date());
// 	console.log(one, two, three, four);
// })();

// 3. Convert the async / await to Promise.all
// (async function() {
// 	console.log(new Date());
// 	var results = await Promise.all([ getNextSequence(), getNextSequence(), getNextSequence(), getNextSequence() ]);
// 	console.log(new Date());
// 	console.log(results);
// })();

// 4. Use Date() to measure the time for 2. and 3.

/* PART II - Making things more readable */

// Gets icelandic companies by name
const getIcelandicCompanyByName = name => {
	var apiUrl = 'https://apis.is/company?name=' + name;
	return fetch(apiUrl).then(resp => resp.json());
};

var companyName = 'Bláa lónið hf.';

// Conditionals

// 1. Get the company Bláa lónið hf. and check if it exists using promises
getIcelandicCompanyByName(companyName).then(function (data) {
	if (data.hasOwnProperty('results') && data['results'].length > 0) {
		console.log('It exists!');
	} else {
		throw new Error('It doesn\'t exist!');
	}
});

// 2. Instead of using promises use async / await
(async function () {
	var data = await getIcelandicCompanyByName(companyName);
	if (data.hasOwnProperty('results') && data['results'].length > 0) {
		console.log('It exists!');
	} else {
		console.log('it doesn"t exist')
	}
})();

// Error handling
var dukeNukem = 'Duke Nukem 3D hf.';

// 1. Get the company Duke Nukem 3D hf. and check if it exists using promises,
//    if the company does not exist an Error should be thrown
getIcelandicCompanyByName(dukeNukem).then(function (data) {
	if (data.hasOwnProperty('results') && data['results'].length > 0) {
		console.log('It exists!');
	} else {
		console.log('It doesn\'t exist!');
	}
}, function (err) {
	console.log(err);
});

// 2. Do the same thing as above, but now using async / await
