/**
    Array examples
*/

/* Basic methods */

    // 1. Join an array with -
    var arr = [1, 2, 3, 4];
    console.log(arr.join('-'));

    // 2. Reverse an array
    arr.reverse();
    console.log(arr);

    // 3. Sort an array
    arr.sort();
    console.log(arr);

    // 4. Sort an array with a reverse sort function
    [1, 4, 2, 3].sort((a, b) => a < b);

    // 5. Use concat with empty array and three params
    [].concat([1, 2], [3, 4], [5, 6]);

    // 6. Use concat with array and then comma-separated params
    [].concat(1, 2, [3, 4, 5, 6]);

/* More advanced methods */

    // 1. Map a square function
    var arrTwo = [5, 6, 7, 8, 9];
    console.log(arrTwo.map((elem) => elem * 2));

    // 2. Map a function which takes an array of lowercase brands and makes all uppercase
    var uppercaseBrands = ['puma', 'nike', 'adidas'].map(function (elem) { return elem.charAt(0).toUpperCase() + elem.slice(1); });
    console.log(uppercaseBrands);

    // 3. Filter a function for valid SSN with the correct length
    var validSsns = [ '1205132060', '1011084870', 'INVALIDSSN' ].filter(function (elem) { return /[0-9]{10}/g.test(elem); });
    console.log(validSsns);

    // 4. Filter all odd numbers which are larger than 5
    var oddNumbersLargerThanFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (elem) {
        return elem >= 5 && elem % 2 !== 0;
    });
    console.log(oddNumbersLargerThanFive);

    // 5. Evaluate if every element are a typeof function (should pass)
    console.log([() => { }, () => {}, { x: 1 }].every(function(elem) {
        return typeof(elem) === 'function';
    }));

    // 6. Evaluate if every element is larger than 10
    [1, 2, 3, 4, 20].every(e => e > 10);

    // 7. Evaluate if some elements are squared equal to 4
    [1, 2, 3, 4].some(e => e * e === 4);

    // 8. Reduce all elements and calculate the average
    var arr = [1, 2, 3, 4, 5, 6];
    var average = arr.reduce(function (elem, total) { return elem + total }, 0) / arr.length;
    console.log(average);

    // 9. Reduce a reversed string
    ['o', 'l', 'l', 'e', 'H'].reduceRight((total, elem) => total + elem);

    // 10. Use indexOf to find a specific element within an array

    // 10.1. integer
    [1, 2, 3, 4].indexOf(3);

    // 10.2. object
    const elem = { a: 1, b: 2};
    const array = [elem];

    array.lastIndexOf(elem);
