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
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', function (evt) {
    console.log(evt);
  });
}

// 2. Register document on load (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
  console.log('Document has been loaded!');
});

// 3. Register multiple event handlers with addEventListener and check the invocation order
var inputOne = document.getElementById('input-1');

inputOne.addEventListener('input', function () {
  console.log('Inside #2');
});

inputOne.addEventListener('input', function () {
  console.log('Inside #1');
});

inputOne.addEventListener('input', function () {
  console.log('Inside #3');
});

// 4. Register multiple event handlers with attachEvent and check the invocation order
inputOne.attachEvent('input', function () {
  console.log('Inside #2');
});

inputOne.attachEvent('input', function () {
  console.log('Inside #1');
});

inputOne.attachEvent('input', function () {
  console.log('Inside #3');
});

// 5. Register mouseover event handler for a specific button and change the transform origin based on the x and y coordinates within the event and add rotation class
var sweetBtn = document.getElementById('my-sweet-btn');
sweetBtn.addEventListener('mouseover', function (evt) {
  changeStyle(this, 'transformOrigin', `${evt.offsetX}px ${evt.offsetY}px`);
  this.classList.add('rotate');
});

// 6. Register a parent handler on the form and also on the body
sweetBtn.parentNode.parentNode.parentNode.addEventListener('click', function (evt) {
  alert('Click on body');
});

sweetBtn.parentNode.parentNode.addEventListener('click', function (evt) {
  alert('Click on form');
});

sweetBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  evt.stopImmediatePropagation();
  console.log('Click on button');
  // Do some things..
  var inputHidden = document.querySelectorAll('input[type="hidden"]');
  for (var i = 0; i < inputHidden.length; i++) {
    inputHidden[i].value = "kensentme";
  }
});

// 7. Register a child handler on an input tag with the id input-4 and prevent bubbling vs. NOT

// 8. Click the button, but prevent it from submitting the form

// 9. Instead submit the form in code, after filling out hidden fields with 'kensentme'
