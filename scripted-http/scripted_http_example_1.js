/**
 * An example of how to issue XMLHttpRequests in JS
 */

var apisUrl = 'https://apis.is/concerts';
var herokuUrl = 'https://serene-island-81305.herokuapp.com';

/* Part 1 - A normal GET request */

    // 1. Create a basic XMLHttpRequest object
    var basicRequest = new XMLHttpRequest();

    // 2. Use the open() function as a GET request to APIS url
    basicRequest.open('GET', apisUrl);

    // 3. Register the onreadystatechange event handler
    basicRequest.onreadystatechange = function() {
        if (basicRequest.readyState === XMLHttpRequest.DONE) {
            var json = JSON.parse(basicRequest.responseText);
            console.log(json);
        }
    };

    // 4. Use the send() function to issue the request
    basicRequest.send();

    // 5. Examine the request within the event handler

    // 6. Console.log the data

/* Part 2 - A normal POST request */

    // 1. Create another XMLHttpRequest
    var postRequest = new XMLHttpRequest();

    // 2. Use the open() function as a POST request to Heroku app
    postRequest.open('POST', herokuUrl + '/api/200');

    // 3. Set the request header to application/json
    postRequest.setRequestHeader('Content-Type', 'application/json');

    // 4. Register the handler
    postRequest.onreadystatechange = function() {
        if (postRequest.readyState === XMLHttpRequest.DONE) {
            console.log(JSON.parse(postRequest.responseText));
        }
    };

    // 5. Use the send() function with the body set
    postRequest.send(JSON.stringify({ a: 1, b: 2 }));

    // 6. alert if successful

/* Part 3 - A synchronous request */

    // 1. Create a basic XMLHttpRequest object
    var synchronousRequest = new XMLHttpRequest();

    // 2. Use the open() function as a GET request to special method in Heroku app
    synchronousRequest.open('GET', herokuUrl + '/api/timeout/5000', false /* Not asynchronous */);

    // 3. Show effects in browser
    //synchronousRequest.send();

/* Part 4 - Demonstrate encoding techniques */

    var form = {
        id: 1,
        name: 'Mr. Miyaki',
        age: 70
    };

    // 1. JSON.stringify()
    console.log(JSON.stringify(form));

    // 2. FormData for multipart/form-data
    function createFormData(data) {
        var formData = new FormData();

        Object.keys(data).forEach(function (elem) {
            formData.append(elem, data[elem]);
        });

        return formData;
    };

    // 3. application/x-www-form-urlencoded with encodeURIComponent
    function createFormUrlEncoded(data) {
        var formUrlEncoded = [];
        Object.keys(data).forEach(function (elem) {
            var value = encodeURIComponent(data[elem]);
            var header = encodeURIComponent(elem);
            formUrlEncoded.push(header + '=' + value);
        });
        return formUrlEncoded.join('&');
    };

    console.log(createFormUrlEncoded(form));
    console.log(createFormData(form));

/* Part 5 - Demonstrate the progress event */

    // 1. Issue request to special synchronous method /file
    var progressRequest = new XMLHttpRequest();
    progressRequest.open('GET', herokuUrl + '/api/file');

    var progress = document.getElementsByClassName('progress')[0];

    // 2. Show the results in a progress bar
    progressRequest.onprogress = function(e) {
        if (e.lengthComputable) {
            progress.style.width = (100 * (e.loaded / e.total)) + '%';
        }
    };

    progressRequest.send();
