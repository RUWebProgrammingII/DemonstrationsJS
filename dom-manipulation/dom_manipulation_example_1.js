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

// 2. Select all elements with the class triangle and change the background color to blue

// 3. Remove element by id my-item using old method and new method

// 4. Get all paragraphs and add border around them

// 5. Change text content from all paragraphs with it's data-zup attributes value

// 6. Add class name fiery to all even <tr>

// 7. Select password input by name and change it's type

// 8. Select all elements with class name red and change it to blue

// 9. Add a paragraph element to div with id my-item

// 10. Replace newly created paragraph with h1
