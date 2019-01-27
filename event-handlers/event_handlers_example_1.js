/*
    An example on how to work with event handlers (1)
*/

function changeStyle(items, style, value) {
    var convertedItems = HTMLCollection.prototype.isPrototypeOf(items) ? items : [items];
    for (var i = 0; i < convertedItems.length; i++) {
        convertedItems[i].style[style] = value;
    }
}

// 1. Register event handlers for all input tags
var inputs = document.getElementsByTagName('input');
// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('input', function (evt) {
//         console.log(evt.target.value);
//     });
// }

// 2. Register document on load (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
    console.log('Document has been loaded!');
});

// 3. Register multiple event handlers with addEventListener and check the invocation order
var inputOne = document.getElementById('input-1');

// inputOne.addEventListener('click', function () {
//     console.log('Click 2');
// });
//
// inputOne.addEventListener('click', function () {
//     console.log('Click 1');
// });
//
// inputOne.addEventListener('click', function () {
//     console.log('Click 3');
// });

// 4. Register multiple event handlers with attachEvent and check the invocation order

// inputOne.attachEvent('click', function () {
//     console.log('Click 2');
// });
//
// inputOne.attachEvent('click', function () {
//     console.log('Click 1');
// });
//
// inputOne.attachEvent('click', function () {
//     console.log('Click 3');
// });

// 5. Register mouseover event handler for a specific button and change the transform origin based on the x and y coordinates within the event and add rotation class
// document.querySelector('input[type="submit"]').addEventListener('mouseover', function (evt) {
//     changeStyle(this, 'transformOrigin', `${evt.offsetX}px ${evt.offsetY}px`);
//     this.classList.add('rotate');
// });

// 6. Register a parent handler on the form and also on the body
// var formHorizontal = document.querySelector('.form-horizontal');
// formHorizontal.addEventListener('click', function() {
//     alert('Form clicked!');
// });
//
// var body = document.querySelector('body');
// body.addEventListener('click', function() {
//     alert('Body clicked!');
// });

// 7. Register a child handler on an input tag with the id input-4 and prevent bubbling vs. NOT
document.getElementById('input-4').addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    alert('Input nr. 4 clicked!');
});

document.getElementById('input-4').addEventListener('click', function(evt) {
    alert('Input nr. 4 clicked again!');
});

// 8. Click the button, but prevent it from submitting the form
document.querySelector('input[type="submit"]').addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelectorAll('input[type="hidden"]').forEach(function (item) {
        item.value = 'kensentme';
    });

    this.parentNode.parentNode.submit();
});

// 9. Instead submit the form in code, after filling out hidden fields with 'kensentme'
