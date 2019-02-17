/* PART I - Understanding asynchronous functions */

// First example
function populateArray() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve([1, 2, 3, 4, 5]);
		}, 1000);
	});
};

async function getArray() {
	var myArr = [];
	await populateArray().then(data => {
		myArr = data;
	});
	return myArr;
};

//console.log(getArray()); // ?

getArray().then(data => console.log(data));
(async function() {
	console.log(await getArray());
})();

getNextSequence.initialNumber = 1;

function getNextSequence() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(getNextSequence.initialNumber++);
		}, 1000);
	});
}

// 1. Use getNextSequence to count to four using chained promises
function countToFour() {
	getNextSequence().then(one => {
		console.log(one);
		return getNextSequence();
	}).then(two => {
		console.log(two);
		return getNextSequence();
	}).then(three => {
		console.log(three);
		return getNextSequence();
	}).then(four => {
		console.log(four);
		return getNextSequence();
	});
}

//countToFour();

// 2. Convert the chained promises to async / await instead
async function countToFourAsync() {
	console.log(new Date());
	var one = await getNextSequence();
	console.log(one);
	var two = await getNextSequence();
	console.log(two);
	var three = await getNextSequence();
	console.log(three);
	var four = await getNextSequence();
	console.log(four);
	console.log(new Date());
};

//countToFourAsync();

// 3. Convert the async / await to Promise.all
async function countToFourAsyncUsingPromiseAll() {
	console.log(new Date());
	var results = await Promise.all([getNextSequence(), getNextSequence(), getNextSequence(), getNextSequence()]);
	console.log(new Date());
	console.log(results.join('\n'));
}

//countToFourAsyncUsingPromiseAll();

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

function getBlueLagoon() {
	getIcelandicCompanyByName(companyName).then(company => {
        if (company.hasOwnProperty('results')) {
            console.log('It exists!');
            console.log(company['results'][0]);
        } else {
            console.log('It does not exist :(');
        }
    });
};

//getBlueLagoon(); // ?

// 2. Instead of using promises use async / await

async function getBlueLagoonAsync() {
    var company = await getIcelandicCompanyByName(companyName);
    if (company.hasOwnProperty('results') && company['results'].length > 0) {
        console.log('It exists!');
        console.log(company['results'][0]);
    } else {
        console.log('It does not exist :(');
    }
}

//getBlueLagoonAsync(); // ?

// Error handling
var dukeNukem = 'Duke Nukem 3D hf.';

// 1. Get the company Duke Nukem 3D hf. and check if it exists using promises,
//    if the company does not exist an Error should be thrown
function getDukeNukem() {
    getIcelandicCompanyByName(dukeNukem).then(company => {
        if (company.hasOwnProperty('results') && company['results'].length > 0) {
            console.log('It exists!');
            console.log(company['results'][0]);
        } else {
            throw new Error(dukeNukem + ' does not exist!');
        }
    }).catch(function(err) {
        console.log(err);
    });
}

getDukeNukem();

// 2. Do the same thing as above, but now using async / await
async function getDukeNukemAsync() {
    try {
        var company = await getIcelandicCompanyByName(dukeNukem);
        if (company.hasOwnProperty('results') && company['results'].length > 0) {
            console.log('It exists!');
            console.log(company['results'][0]);
        } else {
            throw new Error(dukeNukem + ' does not exist!');
        };
    } catch (err) {
        console.log(err);
    }
}

getDukeNukemAsync();
