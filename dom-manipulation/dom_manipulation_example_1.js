/*
    An example on how to manipulate the DOM (1)
*/

function changeStyle(items, style, value) {
    var convertedItems = HTMLCollection.prototype.isPrototypeOf(items) ? items : [items];
    for (var i = 0; i < convertedItems.length; i++) {
        convertedItems[i].style[style] = value;
    }
}

// 1. Select an element with the id my-item and change the background color to yellow
var myItem = document.getElementById('my-item');
changeStyle(myItem, 'backgroundColor', 'yellow');

// 2. Select all elements with the class triangle and change the background color to blue
var triangles = document.getElementsByClassName('triangle');
changeStyle(triangles, 'backgroundColor', 'blue');

// 3. Remove element by id my-item using old method and new method
//myItem.remove();
//myItem.parentNode.removeChild(myItem);

// 4. Get all paragraphs and add border around them
var paragraphs = document.getElementsByTagName('p');
changeStyle(paragraphs, 'border', 'dashed 2px rgba(155, 155, 155, .5)');

// 5. Change text content from all paragraphs with it's data-zup attributes value
var paragraphsWithDataZup = document.querySelectorAll('p[data-zup]');
for (var i = 0; i < paragraphsWithDataZup.length; i++) {
    var currentElement = paragraphsWithDataZup[i];
    var data = currentElement.dataset;
    currentElement.textContent = data.zup;
}

// 6. Add class name fiery to all even <tr>
var evenTableRows = document.querySelectorAll('tr:nth-child(even)');
for (var i = 0; i < evenTableRows.length; i++) {
    evenTableRows[i].classList.add('fiery');
}

// 7. Select password input by name and change it's type
document.querySelector('input[name="password"]').setAttribute('type', 'text');

// 8. Select all elements with class name red and change it to blue
var redClassElements = document.getElementsByClassName('red');

for (var i = 0; i < redClassElements.length; i++) {
    redClassElements[i].classList.add('blue');
}

var blueClassElements = document.getElementsByClassName('blue');

for (var i = 0; i < blueClassElements.length; i++) {
    blueClassElements[i].classList.remove('red');
}

// 9. Add a paragraph element to div with id my-item
var paragraph = document.createElement('p');
paragraph.textContent = 'My new paragraph!';
myItem.appendChild(paragraph);

// 10. Replace newly created paragraph with h1
var heading = document.createElement('h1');
heading.textContent = 'My new heading!';
myItem.replaceChild(heading, paragraph);
