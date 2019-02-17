/**
    Promise examples
*/

/* Part I - Simple promises */

    // 1. Create a simple promise that resolves within 2 seconds
    function resolveInTwoSeconds() {
        return new Promise(function (resolve, reject) {
            setTimeout(function() {
                resolve('Two seconds!');
            }, 2000);
        });
    }

    // 2. Use the then function to receive the data from the promise
    resolveInTwoSeconds().then(data => console.log(data));

    // 3. Use the .finally() to show how it can be useful to prevent duplicate code
    function finalize() {
        console.log('Finalize it!');
    };

    resolveInTwoSeconds().then(data => {
        console.log(data);
    }, err => {
        console.error(err);
    }).finally(() => {
        finalize();
    });

    // 4. Create a nested promise
    function nestedPromises() {
        return new Promise((resolve, reject) => {
        });
    }

/* Part II - More advanced promises */

    // 1. Show how promises are useful when dealing with asynchronous data
    function getSuperData() {
        var superData = [{ id: 1, secret: 'S2lzcyBteSBhc3M=' }];
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000, superData);
        });
    }

    // 2. Create four different promises and use the .all() to show how all need to be resolved before doing anything

    // 3. Use the same four promises to create a race()
